var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var btn = document.querySelector('button');

function changeGradient(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ',' 
    + color2.value 
    + ")";
    css.textContent = body.style.background+";";
}

var randHex = function(len) {
    var maxlen = 8,
        min = Math.pow(16,Math.min(len,maxlen)-1) 
        max = Math.pow(16,Math.min(len,maxlen)) - 1,
        n   = Math.floor( Math.random() * (max-min+1) ) + min,
        r   = n.toString(16);
    while ( r.length < len ) {
       r = r + randHex( len - maxlen );
    }
    return r;
};
  

function randomColors(){
    random1 = "#" + randHex(6);
    random2 = "#" + randHex(6);
    color1.value = random1;
    color2.value = random2;
    changeGradient();
}

color1.addEventListener('input', changeGradient);

color2.addEventListener('input', changeGradient);

btn.onclick = randomColors;

changeGradient();