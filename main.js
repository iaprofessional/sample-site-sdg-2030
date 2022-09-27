//theme.js chooses a random number and then gives a theme. If the number is 0 then the default background will remain.//
var number = Math.floor(Math.random() * 11);
console.log(number)
setTimeout(theme, 500) //Yes this is needed in order to prevent the browser from throwing an error in the devtools console//
function theme() {
if (number == 1) {
document.getElementById("themeinject").style.background = "blue"
document.getElementById("themeinject").style.color = "black"
} else if (number == 2) {
document.getElementById("themeinject").style.background = "green"
document.getElementById("themeinject").style.color = "pink"    
} else if (number == 3) {
document.getElementById("themeinject").style.background = "orange"
document.getElementById("themeinject").style.color = "green"     
} else if (number == 4) {
document.getElementById("themeinject").style.background = "yellow" 
document.getElementById("themeinject").style.color = "maroon"      
} else if (number == 5) {
document.getElementById("themeinject").style.background = "black"
document.getElementById("themeinject").style.color = "white"      
} else if (number == 6) {
document.getElementById("themeinject").style.background = "aquamarine" 
document.getElementById("themeinject").style.color = "maroon"     
} else if (number == 7) {
document.getElementById("themeinject").style.background = "white"    
} else if (number == 8) {
document.getElementById("themeinject").style.background = "greenyellow"
document.getElementById("themeinject").style.color = "maroon"      
} else if (number == 9) {
document.getElementById("themeinject").style.background = "brown"
document.getElementById("themeinject").style.color = "skyblue"      
} else if (number == 9) {
document.getElementById("themeinject").style.background = "pink"    
} else if (number == 10) {
document.getElementById("themeinject").style.background = "red" 
document.getElementById("themeinject").style.color = "skyblue"      
}
if(number == 0) {
    document.getElementById("themeinject").style.background = "orange"
    document.getElementById("themeinject").style.color = "green"
}
}