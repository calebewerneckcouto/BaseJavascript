// Importa o módulo 'node-fetch' usando import()
import('node-fetch')
  .then(module => {
    const fetch = module.default; // Acessa a função fetch do módulo importado

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
         // Aqui você deve definir o que fazer com os dados recebidos
         console.log(json); // Exemplo: apenas exibe os dados no console
      })
      .catch(err => {
         console.error('Erro ao buscar usuários:', err);
      });
  })
  .catch(err => {
    console.error('Erro ao importar node-fetch:', err);
  });
