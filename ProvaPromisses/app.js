// app.js

// Função para mostrar e esconder a mensagem de carregamento
function toggleLoading(show) {
    const loadingMessage = document.getElementById('loadingMessage');
    loadingMessage.style.display = show ? 'block' : 'none';
}

// Função para buscar dados da API
async function fetchDogBreeds() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random/10'; // URL de exemplo

    try {
        toggleLoading(true); // Mostrar mensagem de carregamento

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.status !== 'success') {
            throw new Error('Dados da API inválidos');
        }

        displayBreeds(data.message); // Exibir as imagens

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        alert(`Ocorreu um erro: ${error.message}`);
    } finally {
        toggleLoading(false); // Esconder mensagem de carregamento
    }
}

// Função para exibir as raças de cachorros na galeria
function displayBreeds(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Limpa a galeria

    images.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = 'Cachorro';
        imgElement.className = 'gallery-item';
        
        gallery.appendChild(imgElement);
    });
}

// Chama a função para buscar e exibir os dados
fetchDogBreeds();
