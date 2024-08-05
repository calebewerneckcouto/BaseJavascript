document.addEventListener('DOMContentLoaded', () => {
    const adicionarBtn = document.getElementById('adicionar');
    const listarBtn = document.getElementById('listar');
    const buscarBtn = document.getElementById('buscar');
    const avaliarBtn = document.getElementById('avaliar');
    const ordenarSelect = document.getElementById('ordenar');
    const livrosUl = document.getElementById('livros');

    let livros = [];

    // Função para carregar livros do arquivo JSON
    const carregarLivros = async () => {
        try {
            const response = await fetch('livros.json');
            if (!response.ok) {
                throw new Error('Erro ao carregar livros');
            }
            livros = await response.json();
            listarLivros();
        } catch (error) {
            console.error('Erro ao carregar livros:', error);
        }
    };

    // Função para salvar livros no arquivo JSON
    const salvarLivros = async () => {
        try {
            await fetch('livros.json', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(livros)
            });
        } catch (error) {
            console.error('Erro ao salvar livros:', error);
        }
    };

    // Função para listar livros
    const listarLivros = () => {
        livrosUl.innerHTML = '';
        const ordenarPor = ordenarSelect.value;

        livros.sort((a, b) => {
            if (ordenarPor === 'avaliacao') {
                return calcularMedia(b.avaliacoes) - calcularMedia(a.avaliacoes); // Ordenar em ordem decrescente de avaliação
            }
            return a[ordenarPor].localeCompare(b[ordenarPor]);
        });

        livros.forEach(livro => {
            const li = document.createElement('li');
            li.innerText = `${livro.titulo} - ${livro.autor} (${livro.genero}, ${livro.ano}) - Avaliação Média: ${calcularMedia(livro.avaliacoes).toFixed(1)}`;
            livrosUl.appendChild(li);
        });
    };

    // Função para calcular a média das avaliações
    const calcularMedia = (avaliacoes) => {
        if (avaliacoes.length === 0) return 0;
        const soma = avaliacoes.reduce((a, b) => a + b, 0);
        return soma / avaliacoes.length;
    };

    // Adiciona um novo livro
    adicionarBtn.addEventListener('click', () => {
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const genero = document.getElementById('genero').value;
        const ano = parseInt(document.getElementById('ano').value);

        if (titulo && autor && genero && ano) {
            livros.push({ titulo, autor, genero, ano, avaliacoes: [] });
            salvarLivros();
            listarLivros();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Busca livros com base no título, autor ou gênero
    buscarBtn.addEventListener('click', () => {
        const busca = document.getElementById('busca').value.toLowerCase();
        livrosUl.innerHTML = '';

        const resultados = livros.filter(livro => 
            livro.titulo.toLowerCase().includes(busca) ||
            livro.autor.toLowerCase().includes(busca) ||
            livro.genero.toLowerCase().includes(busca)
        );

        resultados.forEach(livro => {
            const li = document.createElement('li');
            li.innerText = `${livro.titulo} - ${livro.autor} (${livro.genero}, ${livro.ano}) - Avaliação Média: ${calcularMedia(livro.avaliacoes).toFixed(1)}`;
            livrosUl.appendChild(li);
        });

        if (resultados.length === 0) {
            livrosUl.innerHTML = '<li>Nenhum livro encontrado.</li>';
        }
    });

    // Avalia um livro existente
    avaliarBtn.addEventListener('click', () => {
        const titulo = document.getElementById('titulo-avaliar').value;
        const avaliacao = parseInt(document.getElementById('avaliacao').value);

        if (titulo && avaliacao >= 1 && avaliacao <= 5) {
            const livro = livros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
            if (livro) {
                livro.avaliacoes.push(avaliacao);
                salvarLivros();
                listarLivros();
            } else {
                alert('Livro não encontrado.');
            }
        } else {
            alert('Por favor, insira uma avaliação válida (1-5) e o títu
