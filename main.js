var menu = document.querySelector('nav ul');
var menuBar =  document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){
   
    if(iconMenu.getAttribute("src") =="img/menu.png") {
        iconMenu.setAttribute("src","img/menu.png");
    }else{
        iconMenu.setAttribute("scr","img/menu.png")
    }
     menu.classList.toggle('active') /*para clicar e o menu aparecer e desaparecer*/

});