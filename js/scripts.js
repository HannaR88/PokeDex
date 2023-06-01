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

    function addListItem(pokemon) {

        const pokemonUl = document.querySelector('.pokemonList');

        const listItem = document.createElement('li');
        
        const button = document.createElement('button');
        button.innerText = pokemon.name;
        button.addEventListener('click', () => showDetails(pokemon));


        listItem.appendChild(button);
        pokemonUl.appendChild(listItem);
    };

    function showDetails(pokemon) {
        console.log(pokemon.name);
    };

    //Looping thru all the Pokemon and displaying them in the webpage
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);

    });

    return {
        add: add, 
        getAll: getAll, 
        addListItem: addListItem
    };
});