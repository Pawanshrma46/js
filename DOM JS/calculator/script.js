var display = document.querySelector(".screen input");


function appendToDisplay(input) {
    display.value += input;
}

function clearscr() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }

}