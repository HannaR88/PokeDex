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

    function getAll() {   // this function is what is "getting all" of the pokemon from my pokemonList array
        return pokemonList;
    };

    function addListItem(pokemon, i) {

        let pokemonList = document.querySelector('.pokemonList');


        let listItem = document.createElement('li');


        let button = document.createElement('button')
        button.innerText = pokemon.name;


        listItem.appendChild(button)
        listItem.appendChild(pokemonList)


        button.addEventListener('click', () => console.log(pokemon))
        showDetails(pokemon);


    }
})()

//Looping thru all the Pokemon and displaying them in the webpage
pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);

});




