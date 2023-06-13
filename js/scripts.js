let pokemonRepository = (function () { //this line along with line 68 is the IIFE that 'wraps' around the code

    let pokemonList = []  //my array of objects 
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


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


    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    }

    //Pull details about the clicked Pokemon from API and add them to the clicked Pokemon object
    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {

            //Adding details to the item   
            item.imageUlr = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;

        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon.name);
    };
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});