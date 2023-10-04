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
        listItem.classList.add("list-group-item", "mx-auto");
        button.innerText = pokemon.name;



        button.classList.add("btn", "btn-primary", "btn-md");
        button.setAttribute('data-target', '#exampleModal');
        button.setAttribute('data-toggle', 'modal');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        button.addEventListener('click', function () {
            showDetails(pokemon)
        });

    }

    function showModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
        let modalHeader = $('.modal-header');

        // clear existing modal
        modalTitle.empty();
        modalBody.empty();

        // creating element for name in modal content
        let nameElement = $('<h5 class="modal-title">' + pokemon.name + '</h5>');
        let imageElement = $('<img class="modal-img">');
        imageElement.attr('src', pokemon.imageUrl);
        let heightElement = $('<p>' + 'height : ' + pokemon.height + ' decimeters' + '</p>');
        let weightElement = $('<p>' + 'weight : ' + pokemon.weight + ' decagrams' + '</p>');
        let typesElement = $('<p>' + 'Types: ' + pokemon.types.join(', ') + '</p>');
        let abilitiesElement = $('<p>' + 'Abilities: ' + pokemon.abilities.join(', ') + '</p>');


        modalTitle.append(nameElement);
        modalBody.append(imageElement);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typesElement);
        modalBody.append(abilitiesElement);
    }

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

            // Adding details to the pokemon object

            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });

    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon)
        });
    }


    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal
    };
})();



pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});