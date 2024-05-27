// var center = document.querySelector(".center")
// var main = document.querySelector(".main")

// const myThrottling = (func, delayTime) => {
//     let prev = 0;
//     return (...args) => {

//         let current = new Date().getTime();
//         console.log(current - prev, delayTime);

//         if (current - prev > delayTime) {
//             prev = current;
//             return func(...args);
//         }
//     }
// }

// center.addEventListener("mousemove", myThrottling((dets) => {

//     // creating div
//     var div = document.createElement("div")
//     div.classList.add('imgdiv')

//     div.style.left = dets.clientX + 'px'
//     div.style.top = dets.clientY + 'px'
//     document.body.appendChild(div)

//     var img = document.createElement("img")
//     img.setAttribute("src", "https://images.unsplash.com/photo-1527189919029-aeb3d997547d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwZ2lybHxlbnwwfDF8MHx8fDA%3D")

//     div.appendChild(img)

//     gsap.to("img", {
//         y: "0",
//         duration: .2,
//         ease: "power1",
//     })

//     gsap.to("img", {
//         y: "100%",
//         delay: .8,
//         ease: "power2",
//     })

//     setTimeout(function () {
//         div.remove()
//     }, 2000);

// }, 200));


var center = document.querySelector(".center");

const myThrottling = (func, delayTime) => {
    let prev = 0;
    return (...args) => {
        let current = new Date().getTime();
        console.log(current - prev, delayTime);
        if (current - prev > delayTime) {
            prev = current;
            return func(...args);
        }
    };
};

const imageUrls = [
    "https://images.unsplash.com/photo-1527189919029-aeb3d997547d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwZ2lybHxlbnwwfDF8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21pbGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHx8fDA%3D",
    "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1517940310602-26535839fe84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1526816619231-e426e697193e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1590209714895-f0472b8eb042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsc3xlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1534551039924-409372dd29c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsc3xlbnwwfDB8MHx8fDA%3D ",
    "https://images.unsplash.com/photo-1633329712165-4e578376eb87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsc3xlbnwwfDB8MHx8fDA%3D   ",
    "https://images.unsplash.com/photo-1527189919029-aeb3d997547d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwZ2lybHxlbnwwfDF8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21pbGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHx8fDA%3D",
    "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1517940310602-26535839fe84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8MHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1526816619231-e426e697193e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1590209714895-f0472b8eb042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsc3xlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1534551039924-409372dd29c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsc3xlbnwwfDB8MHx8fDA%3D ",
    "https://images.unsplash.com/photo-1633329712165-4e578376eb87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsc3xlbnwwfDB8MHx8fDA%3D   ",
];

let currentImageIndex = 0;

center.addEventListener(
    "mousemove",
    myThrottling((dets) => {
        var div = document.createElement("div");
        div.classList.add("imgdiv");

        div.style.left = dets.clientX + "px";
        div.style.top = dets.clientY + "px";
        document.body.appendChild(div);

        var img = document.createElement("img");
        img.setAttribute("src", imageUrls[currentImageIndex]);
        div.appendChild(img);

        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;

        gsap.to(img, {
            y: "0",
            duration: 0.4,
            ease: "expo.in",
        });

        gsap.to(img, {
            y: "110%",
            delay: 0.5,
            ease: "elastic.in(1,0.75)",
        });

        setTimeout(function () {
            div.remove();
        }, 1000);
    }, 120)
);
