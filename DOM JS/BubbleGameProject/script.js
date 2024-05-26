var timer = 10

var score = 10

var hitrn = 0

function fScore() {

    var fscore = document.querySelector(".finalscore");
    fscore.style.display = "block";

}

function mkbbl() {
    var clutter = ""
    for (var i = 0; i <= 215; i++) {
        var num = Math.floor(Math.random() * 10)
        clutter += `<div class="bouble">${num}</div>`
    }
    document.querySelector(".pbottom").innerHTML = clutter

}
function runTimer() {
    var timerintrvl = setInterval(function () {
        if (timer > 0) {
            timer--
            document.querySelector("#timervalue").textContent = timer

        }

        else {
            clearInterval(timerintrvl)
            var pbottom = document.querySelector(".pbottom")
            pbottom.innerHTML = ""
            // fscore()
        }

    }, 1000)

}
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    var hit = document.querySelector("#hit");
    hit.textContent = hitrn;
}

function increases() {

    var counter = score += 10
    var scoreBox = document.querySelector("#score").textContent = counter



    var pbottom = document.querySelector(".pbottom")
    pbottom.addEventListener("click", (dets) => {
        var clickedNum = Number(dets.target.textContent)

        if (hitrn === clickedNum) {
            increases()
            mkbbl()
            getNewHit()
        }
        // else {


        // }

    })





}



// ----------------------
increases()
// ----------------------
getNewHit()
// ----------------------
runTimer()
// ----------------------
mkbbl()
// ----------------------
