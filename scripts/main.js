var katImage = document.querySelector('img');

katImage.onclick = function() {
    var katSrc = katImage.getAttribute('src');
    if (katSrc === 'images/katara.jpg') {
        katImage.setAttribute ('src', 'images/katara-2.jpg');
    }
    else {
        katImage.setAttribute('src', 'images/katara.jpg');
        }
    }

var mbut = document.querySelector('button');
var mheading = document.querySelector('h1');

function setUsername() {
    var uName = prompt('Please enter your name.');
    localStorage.setItem('name', uName);
    mheading.textContent = 'Katara likes you, ' + uName;
}

if(!localStorage.getItem('name')) {
    setUsername();
}
else {
    var storedName = localStorage.getItem('name');
    mheading.textContent = "Katara likes you, " + storedName;
}

mbut.onclick = function() {
    setUsername();
}
