window.onload = function() {
    let randomJokeButton = document.querySelector("#getRandomJoke") as HTMLButtonElement;
    randomJokeButton.onclick = getJoke;
}

function getJoke() {
    let randomJokeUrl = "https://v2.jokeapi.dev/joke/Any?type=single&safe-mode";

    // Fetches joke
    fetch(randomJokeUrl)
        // Waits for url
        .then(
            // parameter    body of function
            (response) =>   response.json() // Gets the response object and 
                                            // return the json data
        )
        .then( // Use Json
            (jsonData) => {
                console.log(jsonData);
            }
        )
    
}

