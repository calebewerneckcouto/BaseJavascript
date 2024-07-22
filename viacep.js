// Importa o módulo 'node-fetch' usando import()
import('node-fetch')
  .then(module => {
    const fetch = module.default; // Acessa a função fetch do módulo importado

    // Função para buscar informações de endereço pelo CEP na API ViaCEP
    function fetchAddressByCEP(cep) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(json => {
           // Aqui você deve definir o que fazer com os dados recebidos
           console.log(json); // Exemplo: apenas exibe os dados no console
        })
        .catch(err => {
           console.error('Erro ao buscar endereço:', err);
        });
    }

    // Exemplo de uso da função fetchAddressByCEP com um CEP específico
    fetchAddressByCEP('31170700'); // Exemplo com o CEP da Av. Paulista em São Paulo
  })
  .catch(err => {
    console.error('Erro ao importar node-fetch:', err);
  });
