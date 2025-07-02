//fetch : function used for making HTTP reoquest to fetch resources.(JSON style data , images , files)
// simplify asynchronous data fetching in javascript and used for interacting with APIs to retrieve and send data asynchronously over the web.
// fetch(url , {options}).



// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//   if(!response.ok){
//     throw new Error("Could not fetch resource");
//   }
//   return response.json();
// })
// .then(data => console.log(data.id))
// // .then(data => console.log(data.weight))
// .catch(error => console.log(error)
// );

// with async and await

async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imageElement = document.getElementById("pokemonSprite");
    
    imageElement.src = pokemonSprite;
    imageElement.style.display = "block";
  }
  catch (error) {
    console.log("Fetch error:", error.message);
  }
}

fetchData();
