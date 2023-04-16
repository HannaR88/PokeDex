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


pokemonList.push(pokemon1);
pokemonList.push(pokemon2);
pokemonList.push(pokemon3);

for (let i = 0; i < pokemonList.length; i++) {
    // check if the height is greater than or equal to 7
    if (pokemonList[i].height >= 7) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big!<br>");
    } else {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")<br>");
    }
}
