var inputBox = document.querySelector(".input-box");

var inputNameButton = document.querySelector("#input-button");
var wisherArea = document.querySelector("#name");

function printWisherName(wisherName){
    //console.log("Wisher's Name is "+ inputBox.value);
    wisherArea.innerHTML = inputBox.value;

}

inputNameButton.addEventListener("click", printWisherName);

