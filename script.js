// function searchCards() {
//     var input = document.getElementById("pokemonInput").value;
//     var url = "https://api.magicthegathering.io/v1/cards" + input;
  
//     fetch(url)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         var pokemonData = "<h2>" + data.name + "</h2>";
//         console.log(data)
//         pokemonData += "<img src='" + data.sprites.front_default + "' alt='Pokemon Image'>";
//         pokemonData += "<p>Height: " + data.height + "</p>";
//         pokemonData += "<p>Weight: " + data.weight + "</p>";
//         pokemonData += "<p>Type: " + data.types[0].type.name + "</p>";
//         pokemonData += "<p>Ability 1: " + data.abilities[0].ability.name + "</p>";
        
//         document.getElementById("pokemonData").innerHTML = pokemonData;
//       })
//       .catch(function(error) {
//         // document.getElementById("hidden").innerHTML = error;
//         console.log(error);
//       });
//   }
  
//   searchCards ();

function searchCards(){
    var url = "https://api.magicthegathering.io/v1/cards";
    
  fetch(url)
  .then(function(res){
    return res.json();
  })
  .then(function(data) {
    var response = data.cards[0]
    //data is stored in a variable above ^ to then be accessed by the second variable below:
    var resData = "<h2>"+ response.name + "</h2>";
    console.log(response)
    console.log(resData)
    resData += "<img src='" + response.imageUrl + "' alt=' Card Image'>";
    resData += "<p>Power: " + response.power+ "</p>";
    resData += "<p>Mana Cost: " + response.manaCost + "</p>";
    resData += "<p>Text: " + response.text + "</p>";
    resData += "<p>Type: " + response.type + "</p>";
    resData += "<p>Format/Legality: " + response.legalities[0].format + " / "+ response.legalities[0].legality + "</p>";
    resData += "<p>Rarity: " + response.rarity + "</p>";

    document.getElementById("cardResult").innerHTML = resData;
  })
  .catch(function(error) {
             console.log(error);
        });
    }

  searchCards ();