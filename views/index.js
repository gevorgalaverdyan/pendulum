const timeDiv = document.querySelector("#timeDiv");

function myFunction () {
    timeDiv.innerHTML = new Date();
}

var interval = setInterval(function () { myFunction(); }, 5000);

myFunction();