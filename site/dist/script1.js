document.addEventListener("DOMContentLoaded",
function(event){
document.querySelector("body")
.addEventListener("mousemove",

function (event) {
   
    if (event.shiftKey === true){
        console.log("x: " + event.clientX);
        console.log("y: " + event.clientY);
    }
 
}
)
});