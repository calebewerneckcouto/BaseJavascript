// Importa o módulo 'node-fetch' usando import()
import('node-fetch')
  .then(module => {
    const fetch = module.default; // Acessa a função fetch do módulo importado

    async function getPokemonInfo(nameOrId) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        if (!response.ok) {
          throw new Error(`Não foi possível encontrar o Pokémon "${nameOrId}"`);
        }
        const pokemonData = await response.json();
        return pokemonData;
      } catch (error) {
        console.error('Erro ao buscar informações do Pokémon:', error.message);
        return null;
      }
    }

    // Função para buscar informações do Pokémon "cheri"
    async function searchCheriPokemon() {
      const pokemonName = 'butterfree'; // Nome do Pokémon a ser pesquisado
      const pokemonInfo = await getPokemonInfo(pokemonName);

      if (pokemonInfo) {
        console.log(`Nome: ${pokemonInfo.name}`);
        console.log(`Número na Pokédex: ${pokemonInfo.id}`);
        console.log('Tipos:');
        pokemonInfo.types.forEach(type => {
          console.log(`- ${type.type.name}`);
        });
        console.log(`Altura: ${pokemonInfo.height}`);
        console.log(`Peso: ${pokemonInfo.weight}`);
        console.log('Habilidades:');
        pokemonInfo.abilities.forEach(ability => {
          console.log(`- ${ability.ability.name}`);
        });
        console.log(`Imagem padrão: ${pokemonInfo.sprites.front_default}`);
      }
    }

    // Chama a função para buscar informações do Pokémon "cheri"
    searchCheriPokemon();
  })
  .catch(err => {
    console.error('Erro ao importar node-fetch:', err);
  });
