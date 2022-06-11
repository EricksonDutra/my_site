
let content = 'E&M Doces Gourmet';

let text = document.querySelector('#title2');
var speed = 50;
var cont = 0;
function typeWriter() {
    if(cont < content.length){
        text.textContent += content.charAt(cont);
        cont++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter(); 
