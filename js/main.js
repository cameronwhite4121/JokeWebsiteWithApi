window.onload = function () {
    let randomJokeButton = document.querySelector("#getRandomJoke");
    randomJokeButton.onclick = getJoke;
};
function getJoke() {
    let randomJokeUrl = "https://v2.jokeapi.dev/joke/Any?type=single&safe-mode";
    fetch(randomJokeUrl)
        .then((response) => response.json())
        .then((jsonData) => {
        console.log(jsonData);
    });
}
