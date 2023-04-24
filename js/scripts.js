// array of objects
let pokemonRepository = (function () {

    function getAll() {
        return pokemonList;
    }
   
function add(pokemon) {
    pokemonList.push(pokemon)
}

return {
    getAll: getAll,
    add: add
};

}) ();

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


pokemonRepository.getAll().forEach(function (pokemon) {
    if (pokemon.height >= 7) {
        document.write(pokemon.name + " (height: " + pokemon.height + ") - Wow that's big!<br>");
    } else {
        document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
    }
});