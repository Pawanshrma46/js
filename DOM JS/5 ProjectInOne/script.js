// Project 1
function fbaddfrnd() {
    var addFriendButtons = document.querySelectorAll(".addf");
    var remove = document.querySelector(".remove")
    var statusElements = document.querySelectorAll(".card h5");
    var name = document.querySelector("h1")

    addFriendButtons.forEach((addbtn, index) => {

        let flag = 0;
        addbtn.addEventListener("click", function () {

            var istatus = statusElements[index];

            if (flag == 0) {
                istatus.innerHTML = "Friends";
                istatus.style.color = "green";
                flag = 1;
                addbtn.innerHTML = "Remove Friend";
            } else {
                istatus.innerHTML = "Stranger";
                istatus.style.color = "red";
                flag = 0;
                addbtn.innerHTML = "Add Friend";
            }
        });
    });
}
fbaddfrnd()

// Project 2 instagram likes-------------------------------------------------------------------
function instalikes() {

    var love = document.querySelector(".user-profile i")
    var con = document.querySelector(".card-container")

    con.addEventListener("dblclick", function () {

        love.style.transform = "translate(-50%, -50%) scale(1)"
        love.style.opacity = "1"

        setTimeout(function () {
            love.style.opacity = "0"
        }, 500)

        setTimeout(function () {
            love.style.transform = "translate(-50%, -50%) scale(0)"
        }, 1500)
    })


    // var cardContainers = document.querySelectorAll(".card-container");


    // cardContainers.forEach(container => {

    //     var loveIcon = container.querySelector(".love-icon");

    //     container.addEventListener("dblclick", function () {
    //         loveIcon.style.transform = "translate(-50%, -50%) scale(1)";
    //         loveIcon.style.opacity = "1";

    //         setTimeout(function () {
    //             loveIcon.style.opacity = "0";
    //         }, 500);

    //         setTimeout(function () {
    //             loveIcon.style.transform = "translate(-50%, -50%) scale(0)";
    //         }, 1500);
    //     });
    // });

}
instalikes()

// Project  Custom Cursor-------------------------------------------------------------------
function customcursor() {
    var main = document.querySelector("body");
    var crsr = document.querySelector(".cursor");
    var h1 = document.querySelector("#h1");

    main.addEventListener("mousemove", function (dets) {
        gsap.to(crsr, {
            opacity: "1",
            x: dets.clientX + "px",
            y: dets.clientY + "px",
            duration: 2,
            ease: "power4.out"
        });
    });


    h1.addEventListener("mouseenter", function () {
        gsap.to(crsr, {
            scale: 8,
            duration: 0.2,
        });
    });
    h1.addEventListener("mouseleave", function () {
        gsap.to(crsr, {
            scale: 1,
            duration: 0.2,
        });
    });

}
customcursor()

// project 4  image sho ---------------------------------------------------------

function imagehover() {

    var elem = document.querySelectorAll(".elem")
    var elemImg = document.querySelector(".elem img")

    elem.forEach(function (val) {

        val.addEventListener("mousemove", (dets) => {

            val.childNodes[3].style.left = dets.x + "px"
            val.childNodes[3].style.top = dets.y + "px"
            // val.style.transform = "translate(-50% -50%)"

        })

        val.addEventListener("mouseenter", function () {

            val.childNodes[3].style.opacity = 1


        });

        val.addEventListener("mouseleave", function () {
            val.childNodes[3].style.opacity = 0

        });

    })

    // var elem = document.querySelectorAll(".elem");

    // elem.forEach(function (val) {
    //     var img = val.querySelector("img");

    //     val.addEventListener("mousemove", function (dets) {
    //         gsap.to(img, {
    //             x: dets.clientX,
    //             y: dets.clientY,
    //             duration: 0.2,
    //             ease: "power3.out"
    //         });
    //     });

    //     val.addEventListener("mouseenter", function () {
    //         gsap.to(img, {
    //             opacity: 1,
    //             duration: 0.2,
    //             ease: "power3.out"
    //         });
    //     });

    //     val.addEventListener("mouseleave", function () {
    //         gsap.to(img, {
    //             opacity: 0,
    //             duration: 0.2,
    //             ease: "power3.out"
    //         });
    //     });
    // });


    // elem.addEventListener("mousemove", (dets) => {

    //     elemImg.style.left = dets.x + "px"
    //     elemImg.style.top = dets.y + "px"

    // })

    // elem.addEventListener("mouseenter", function () {
    //     elemImg.style.opacity = 1

    // });

    // elem.addEventListener("mouseleave", function () {
    //     elemImg.style.opacity = 0
    // });
}
imagehover()

// project 5  insta story ---------------------------------------------------------

var arr = [
    {
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmxzfGVufDB8fDB8fHww"
    },

    // -------------------
    {
        dp: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D"
    },

    // -------------------

]

var Clutter = ""

arr.forEach(function (elem, idx) {

    Clutter += ` <div class="story">
                 <img  src="${elem.dp}" id="${idx}" alt="">
                 </div>`

})

var storyDiv = document.querySelector(".story-div")
storyDiv.innerHTML = Clutter


var line = document.querySelector(".timebar")
var line = document.querySelector(".line")

storyDiv.addEventListener("click", (dets) => {

    // console.log(arr[dets.target.id].story)  
    document.querySelector(".imagediv-full").style.display = "block"
    document.querySelector(".imagediv-full").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function () {
        document.querySelector(".imagediv-full").style.display = "none"
        gsap.to(line, {
            right: "100%",
        });

    }, 2500)

    gsap.to(line, {
        right: "0%",
        duration: 2.5,
        ease: "power4"
    });

})

function instaStory() {










}
instaStory()

























// var elemImg = document.querySelector(".elem1 img");
// var elem1 = document.querySelector("#elem1");

// elemImg.addEventListener("mousemove", function (dets) {
//     gsap.to(elem1, {
//         left: dets.pageX + "px",
//         top: dets.pageY + "px",
//         duration: 0.5,
//         ease: "power2.out"
//     });
// });

// elem1.addEventListener("mouseenter", function () {
//     gsap.to(elemImg, {
//         opacity: 1,
//         duration: 0.5
//     });
// });

// elem1.addEventListener("mouseleave", function () {
//     gsap.to(elemImg, {
//         opacity: 0,
//         duration: 0.5
//     });
// });





