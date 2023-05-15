// array of objects

//let pokemonList = [

//{
// name: 'Bulbasaur', height: 7, types:
//      ['poison', 'grass']
//},

//{
//    name: 'Wigglytuff', height: 10, types:
//          ['fairy', 'normal']
//    },

//{
//  name: 'Eevee', height: 3, types:
//        ['normal']
//  },
//];


//for (let i = 0; i < pokemonList.length; i++) {
//  const pokemon = pokemonList[i]
//if (pokemon.height > 7) {
//    document.write(pokemon.name + " (height: " + pokemon.height + ") - Wow that is a large pokemon! <br>" );

// } else {
//     document.write(pokemon.name + " (height: " + pokemon.height + ")<br>");
//}

let pokemonRepository = (function () { //this line along with line 68 is the IIFE that 'wraps' around the code

    let pokemonList = [  //my array of objects 
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


    function add(pokemon) {  //this is where I will add the function to add pokemon to my array later

        pokemonList.push(pokemon);
    }

    function getAll() {   // this function is what is "getting all" of the pokemon from your pokemonList array

        return pokemonList;
    }
    return {   // the IIFE prevents outside functions from altering what is inside of it, to use the the data 
        //outside of the IIFE these are what are used outside of the IIFE

        add: add,
        getAll: getAll
    };
})();


pokemonRepository.getAll().forEach(function (pokemon) {// here we are calling on 
    //pokemonRepository the function getAll and on that were using the forEach function with the value pokemon
    console.log(pokemon.name + ' height ' + pokemon.height); // here we are printing to 
    //the console the results of the getAll().forEach functions
});
