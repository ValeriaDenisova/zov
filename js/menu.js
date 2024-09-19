//Menu

function MenuBurgerClose(){
    menuTablet.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function(){
function SearchMenu() {

    if (searchMenuSwitch == 0) {
        search.style.display = 'flex';
        searchMenuSwitch = 1;
        return;
    }

    if (searchMenuSwitch == 1) {
        search.style.display = 'none';
        searchMenuSwitch = 0;
    }

}

function MenuUnwrap() {
    menuExpanded.style.display = 'flex';
    menuUnwrap.style.display = 'none';
}

function MenuRollUp() {
    menuExpanded.style.display = 'none';
    menuUnwrap.style.display = 'block';
}

var searchImg = document.getElementById('searchImg');
var search = document.getElementById('search');
var searchMenuSwitch = 0;
var menuUnwrap = document.getElementById('menuUnwrap');
var menuExpanded = document.getElementById('menuExpanded');
var menuRollUp = document.getElementById('menuRollUp');

if(typeof searchImg == 'object'){searchImg.addEventListener('click', SearchMenu);}
if(typeof menuUnwrap == 'object'){menuUnwrap.addEventListener('click', MenuUnwrap);}
if(typeof menuRollUp == 'object'){menuRollUp.addEventListener('click', MenuRollUp);}

var menuTablet = document.getElementById('menuTablet');
var menuTabletClose = document.getElementById('menuTabletClose');
var menuBurger = document.getElementById('menuBurger');

function MenuBurger(){
    menuTablet.style.display = 'flex';
}

if(typeof menuBurger == 'object'){menuBurger.addEventListener('click', MenuBurger);}
if(typeof menuTabletClose == 'object'){menuTabletClose.addEventListener('click', MenuBurgerClose);}
    
var contactMenuBurger = document.getElementById('contactMenuBurger');
    
function ContactMenuBurger(){
    menuTablet.style.display = 'none';
}
    
if(typeof contactMenuBurger == 'object'){contactMenuBurger.addEventListener('click', ContactMenuBurger);}
if(typeof contactMenuBurger == 'object'){contactMenuBurger.addEventListener('click', ContactMenuBurger);}
});