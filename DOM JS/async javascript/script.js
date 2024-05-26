// var h1 = document.querySelector("h1");
// var blb = document.querySelector(".circle");
// var btn = document.querySelector(".btn");

// function mouseenter() {
//     h1.innerHTML = "Click off for turn bulb Off"
//     h1.style.color = "yellow"
//     h1.style.transition = "0.3s"
// }
// function mouseleave() {
//     h1.innerHTML = "Click on for turn bulb On"
//     h1.style.color = ""
// }

// -------------------------------

// btn.addEventListener("click", function () {
//     if (btn.innerHTML === "on") {
//         btn.innerHTML = "off"
//         blb.style.backgroundColor = "yellow"
//         blb.style.boxShadow = "rgba(255,255,0, 1) 0px 0px 200px"
//         btn.style.backgroundColor = "transparent"
//         btn.style.border = "2px solid #fff"
//         btn.style.color = "#fff"
//         mouseenter()
//     }
//     else {
//         btn.innerHTML = "on"
//         blb.style.backgroundColor = "#111"
//         blb.style.boxShadow = ""
//         btn.style.backgroundColor = ""
//         btn.style.border = ""
//         btn.style.color = ""
//         mouseleave();
//     }
// })


// -----------page2---------------------------





// setTimeout(function () {

// }, 2000)


// promis
var ans = new Promise((res, rej) => {
    if (true) {
        return res();
    }
    else {
        return rej();
    }
})

    .then(function () {
        console.log("Resolve hogaya")
    })
    .catch(function () {
        console.log("Reject hogaya")
    })



var ans2 = new Promise(function (res, rej) {

    return res("sabse pahile ghar par aao")

})
ans2.then(function (data) {
    console.log(data)
})


