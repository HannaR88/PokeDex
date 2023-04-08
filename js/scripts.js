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

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 7) {
        document.write(${pokemonList[i].name}
            (height: ${pokemonList[i].height}) - Wow! That's big!);
        }
    }
