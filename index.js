const superheroAPIUrl = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/";
let currentSuperhero = localStorage.getItem("superheroCounter");
if (!currentSuperhero) {
    currentSuperhero = 1;
    document.getElementById("superhero-previous").disabled = true;
} else if (currentSuperhero == 1) document.getElementById("superhero-previous").disabled = true;

fetchSuperhero(currentSuperhero);

function fetchSuperhero(id) {
    fetch(`${superheroAPIUrl}${id}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("superhero-image-viewer").src = data.images.md;
            document.getElementById("superhero-name").innerText = data.name;
        });
    localStorage.setItem("superheroCounter", id);
}

function previous() {
    let superheroCounter = Number(localStorage.getItem("superheroCounter"));
    if (superheroCounter > 1) {
        superheroCounter--;
        fetchSuperhero(superheroCounter);
        if (superheroCounter == 1) document.getElementById("superhero-previous").disabled = true;
        else document.getElementById("superhero-previous").disabled = false;
        document.getElementById("superhero-next").disabled = false;
    }
}

function next() {
    let superheroCounter = Number(localStorage.getItem("superheroCounter"));
    if (superheroCounter < 731) {
        superheroCounter++;
        fetchSuperhero(superheroCounter);
        if (superheroCounter == 731) document.getElementById("superhero-next").disabled = true;
        else document.getElementById("superhero-next").disabled = false;
        document.getElementById("superhero-previous").disabled = false;
    }
}