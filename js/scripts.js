// array of objects

let pokemonList = [

    {
        name: 'Bulbasaur', height: 7, types:
            ['poison', 'grass']
    },

    {
        name: 'Wigglytuff', height: 10, types:
            ['fairy', 'normal']
    },

    {
        name: 'Eevee', height: 3, types:
            ['normal']
    },
];


let pokemonSize = "Wow that's a large pokemon.";


for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i]
    if (pokemon.height > 7) {
        document.write(`${pokemonSize}  ${pokemon.name} ${pokemon.height}`)
    }
}
