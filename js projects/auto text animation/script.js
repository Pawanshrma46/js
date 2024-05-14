var container = document.querySelector(".container");

const careers = ["Youtuber", "Developer", "Graphic Designer"];

let careerIndex = 0;
let characterIndex = 0;

function updateText() {
    if (careerIndex >= careers.length) {
        careerIndex = 0;
        characterIndex = 0;
    }

    container.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    characterIndex++;

    if (characterIndex > careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;

        setTimeout(updateText, 4000);
    } else {
        setTimeout(updateText, 100);
    }
}

updateText();
