
var rect = document.querySelector(".center");

rect.addEventListener("mousemove", function(details){
    
var rectlocation = rect.getBoundingClientRect()
var rectinside = details.clientX - rectlocation.left

if(rectinside<rectlocation.width/2){
    var redcolor = gsap.utils.mapRange(0, rectlocation.width/2, 255, 200, rectinside);
    gsap.to(rect,{
        backgroundColor:`rgb(${redcolor},0,0)`,
        ease: Power4,
    })
}
else

var bluecolor = gsap.utils.mapRange(rectlocation.width/2, rectlocation.width, 0, 255, rectinside);
    gsap.to(rect,{
        backgroundColor:`rgb(0,0,${bluecolor})`,
        ease: Power4,
    })

}) 

rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
        backgroundColor:"#fff",
    })

})




