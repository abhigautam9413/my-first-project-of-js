const input = document.getElementById("input");
const button = document.getElementById("button");
const boxContainer = document.getElementById("boxContainer");

button.addEventListener("click", function() {
    const numberofBoxes = input.value;
    boxContainer.innerHTML = "";
    for(let i = 1; i<= numberofBoxes; i++){
        let box = document.createElement("div");
        box.classList.add("square");
        boxContainer.appendChild(box);
    }

});
