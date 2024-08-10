// Importa o pacote node-fetch
const fetch = require('node-fetch');

// Função que faz três requisições assíncronas em paralelo
async function fetchData() {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

    try {
        // Inicia todas as requisições em paralelo
        const [postsResponse, usersResponse, commentsResponse] = await Promise.all([
            fetch(postsUrl),
            fetch(usersUrl),
            fetch(commentsUrl)
        ]);

        // Verifica se todas as respostas foram bem-sucedidas
        if (!postsResponse.ok || !usersResponse.ok || !commentsResponse.ok) {
            throw new Error('Alguma das requisições falhou');
        }

        // Converte as respostas em JSON
        const [posts, users, comments] = await Promise.all([
            postsResponse.json(),
            usersResponse.json(),
            commentsResponse.json()
        ]);

        // Exibe os resultados no console
        console.log('Posts:', posts);
        console.log('Users:', users);
        console.log('Comments:', comments);

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Chama a função para executar as requisições
fetchData();
