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


//for (let i = 0; i < pokemonList.length; i++) {
  //  const pokemon = pokemonList[i]
    //if (pokemon.height > 7) {
    //    document.write(pokemon.name + " (height: " + pokemon.height + ") - Wow that is a large pokemon! <br>" );
    
   // } else {
   //     document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
    //}

    let pokemonRepository = (function () {
        let pokemonList = [];

        function add(pokemon) {
            pokemonList.push(pokemon); 
           }
        function getAll() {
            return pokemonList; 
        }
        return {
            add: add, 
            getAll: getAll
        };
    })();



    pokemonList.forEach(function(pokemon) {
console.log(pokemon.name + ' height ' + pokemon.height);
});


