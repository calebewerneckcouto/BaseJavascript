// Importa o módulo 'node-fetch' usando import()
import('node-fetch')
  .then(module => {
    const fetch = module.default; // Acessa a função fetch do módulo importado

    async function fetchCatImage() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
        const data = await response.json();

        if (data && data.length > 0) {
          const imageUrl = data[0].url;
          console.log('URL da imagem do gato:', imageUrl);
          // Aqui você pode prosseguir com o que deseja fazer com a URL da imagem
        } else {
          console.error('Não foi possível encontrar imagens de gatos.');
        }
      } catch (error) {
        console.error('Erro ao buscar imagem de gato:', error);
      }
    }

    // Chama a função fetchCatImage() quando o arquivo é executado diretamente com Node.js
    fetchCatImage();
  })
  .catch(err => {
    console.error('Erro ao importar node-fetch:', err);
  });
