async function getPokemon() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=200'
    try {
        const response = await fetch(apiUrl);
        const pokemonName = await response.json();
        const randomPokemon = returnRandom(pokemonName.results);
        const pokeResponse = await fetch(randomPokemon.url);
        const pokemon = await pokeResponse.json();
        const pokeAbilities = pokemon.abilities;
        printPokemon(randomPokemon);
        printAbilities(pokeAbilities);
    } catch (error) {
        console.log(error);
    }
}

function printPokemon(pokemon) {
    if (poke__name.innerHTML != '') {
        poke__name.innerHTML = ''
    }
    let pokeName = pokemon.name
    poke__name.innerHTML = pokeName;
}

function printAbilities(pokeAbilities) {
    if (poke__abilities.innerHTML != '') {
        poke__abilities.innerHTML = ''
    }
    poke__title.innerHTML = 'I can use one of these abilities!'
    pokeAbilities.forEach(ability => {
        poke__abilities.innerHTML += `<li>${ability.ability.name}</li>`
    });
}

function returnRandom(array) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem
}

