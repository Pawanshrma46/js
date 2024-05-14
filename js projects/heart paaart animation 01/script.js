const bodyE1 = document.querySelector("body")
bodyE1.addEventListener("mousemove", (Event) => {

    const xPos = Event.offsetX;
    const yPos = Event.offsetY;
    const spanE1 = document.createElement("span");

    spanE1.style.left = xPos + "px";
    spanE1.style.top = yPos + "px";

    const size = Math.random() * 100;
    spanE1.style.width = size + "px"
    spanE1.style.height = size + "px"

    bodyE1.appendChild(spanE1);
    setTimeout(() => {
        spanE1.remove();

    }, 3000);

})