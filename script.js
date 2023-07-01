function searchPokemon() {
    var input = document.getElementById("pokemonInput").value;
    var url = "https://pokeapi.co/api/v2/pokemon/" + input;
  
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var pokemonData = "<h2>" + data.name + "</h2>";
        console.log(data)
        pokemonData += "<img src='" + data.sprites.front_default + "' alt='Pokemon Image'>";
        pokemonData += "<p>Height: " + data.height + "</p>";
        pokemonData += "<p>Weight: " + data.weight + "</p>";
        pokemonData += "<p>Type: " + data.types[0].type.name + "</p>";
        pokemonData += "<p>Ability 1: " + data.abilities[0].ability.name + "</p>";
        // pokemonData += "<p>Ability 2: " + data.abilities[1].ability.name + "</p>";
        // pokemonData += "<p>Ability 3: " + data.abilities[2].ability.name + "</p>";
  
        document.getElementById("pokemonData").innerHTML = pokemonData;
      })
      .catch(function(error) {
        // document.getElementById("hidden").innerHTML = error;
        console.log(error);
      });
  }
  
  searchPokemon ();