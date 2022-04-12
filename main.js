//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector("button").addEventListener("click", getDrink)

function getDrink() {

    let drink = document.querySelector("input").value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`) // Make request to server.
    .then(res => res.json()) // parse response as JSON // Treat what's coming back as JSON.
    .then(data => { // Pass whatever we get back into "data".
      console.log(data.drinks[0])
      document.querySelector("h2").innerText = data.drinks[0].strDrink
      document.querySelector("img").src = data.drinks[0].strDrinkThumb
      document.querySelector("h3").innerText = data.drinks[0].strInstructions
    })
    .catch(err => { // If something does wrong, we'll get an error printed to the console.
        console.log(`error ${err}`)
    });
} 
