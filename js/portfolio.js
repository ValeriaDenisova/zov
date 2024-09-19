//Portfolio

document.addEventListener("DOMContentLoaded", function(){
var portfolio = [
    [`Стол "Нордик"`, `улица Ленина`, `img/portfolio/foto/0/foto0.png`, `img/portfolio/foto/0/foto1.png`],
    [`Кухня "Нордик"`, `улица Дзержинского`, `img/portfolio/foto/1/foto0.png`, `img/portfolio/foto/1/foto1.png`],
    [`Шкаф "Нордик"`, `улица Садовая`, `img/portfolio/foto/2/foto0.png`, `img/portfolio/foto/2/foto1.png`, `img/portfolio/foto/2/foto2.png`],
    [`Стол "Виолетта"`, `улица Ленина`, `img/portfolio/foto/3/foto0.png`, `img/portfolio/foto/3/foto1.png`, `img/portfolio/foto/3/foto2.png`],
    [`Кухня "Виолетта"`, `улица Дзержинского`, `img/portfolio/foto/4/foto0.png`, `img/portfolio/foto/4/foto1.png`, `img/portfolio/foto/4/foto2.png`, `img/portfolio/foto/4/foto3.png`, `img/portfolio/foto/4/foto4.png`],
    [`Кухня "Глория"`, `проспект Хрущева`, `img/portfolio/foto/5/foto0.png`]
];


function PortNameDisplayBlock(array, num) {
    ChangeDisplayBlock(num, portfolio, portNameDisplayBlock);
    None(array);
    SwouDisplayBlock(array, portNameDisplayBlock);
    PortNameAppearanceArrow(num);
    Active(num);
    numName = num;
}

function SwouDisplayBlock(array, arrayDisplayBlock) {
    for (let i = 0; i < 3; i++) {
        array[arrayDisplayBlock[i]].style.display = 'block';
    }
}

function ChangeDisplayBlock(num, array, arrayDisplayBlock) {
    if (num <= 0) {
        num = 1;
    } else if (num >= array.length - 1) {
        num = array.length - 2;
    }

    arrayDisplayBlock[0] = num - 1;
    arrayDisplayBlock[1] = num;
    arrayDisplayBlock[2] = num + 1;

}

function PortNameAppearanceArrow(num) {
    portTop.style.display = 'block';
    portfolioTitle.style.marginBottom = '40px';
    portBottom.style.display = 'block';
    if (num <= 0) {
        portTop.style.display = 'none';
        portfolioTitle.style.marginBottom = '70px';
    }

    if (num >= portName.length - 1) {
        portBottom.style.display = 'none';
    }
}

function PortNameActiveClick(e) {
    var element = e.target;

    if (element.tagName == 'P') {
        element = element.parentNode;
    }

    for (let i = 0; i < portName.length; i++) {
        if (portName[i] == element) {
            num = i;
        }
    }

    PortNameDisplayBlock(portName, num);
    Active(num);
}

function Active(num) {
    PositionActive(portName, 'port_element__active', num);
    portfolioMainFoto.innerHTML = '';
    portfolioBreadCrumbs.innerHTML = '';
    portfolioFoto.innerHTML = '';

    portfolioMainFotoActive = [];
    portfolioFotoActive = [];
    portfolioBreadCrumbsActive = []

    for (let i = 2; i < portfolio[num].length; i++) {
        NewElement(`<img class="cursor" src="${portfolio[num][i]}" id="portfolioMainFoto${i-2}" alt="" display: none;">`, portfolioMainFoto, `portfolioMainFoto${i-2}`, portfolioMainFotoActive);

        NewElement(`<div class="crumb cursor" id="portfolioBreadCrumbs${i-2}"></div>`, portfolioBreadCrumbs, `portfolioBreadCrumbs${i-2}`, portfolioBreadCrumbsActive);

        NewElement(`<div class="foto_element cursor" id="portfolioFoto${i-2}"><img src="${portfolio[num][i]}"  alt=""></div>`, portfolioFoto, `portfolioFoto${i-2}`, portfolioFotoActive);

    }

    if (portfolioFotoActive.length == 1) {
        None(portfolioBreadCrumbsActive);
        None(portfolioFotoActive);
        None([portfolioMainForoRight, portfolioMainFotoLeft, portfolioForoRight, portfolioFotoLeft]);
    }else{
        portfolioMainForoRight.style.display = "block";
        portfolioMainFotoLeft.style.display = "block";
    }
    numFoto = 0;
    FotoActive(numFoto);
    ArrayClick(portfolioFotoActive, PortfolioFotoActiveClickImg);
    ArrayClick(portfolioBreadCrumbsActive, PortfolioFotoActiveBreadCrumbs);
    ArrayClick(portfolioMainFotoActive,  WindowFotoOpenClick);
}

function FotoActive(num) {
    CarauselBlock(portfolioMainFotoActive, num);
    BreadCrumbs(portfolioBreadCrumbsActive, num);
    if (portfolioFotoActive.length > 3) {
        ChangeDisplayBlock(num, portfolioFotoActive, portfolioFotoDisplayBlock);
        None(portfolioFotoActive);
        SwouDisplayBlock(portfolioFotoActive, portfolioFotoDisplayBlock);
        portfolioFotoLeft.style.display = "block";
        portfolioForoRight.style.display = "block";
    }else{
        portfolioFotoLeft.style.display = "none";
        portfolioForoRight.style.display = "none";
    }
    PositionActive(portfolioFotoActive, 'foto_active', num);
    numFoto = num;
}

function PortfolioFotoActiveClickImg(e){
    let element = e.target.parentNode;
        for (let i = 0; i < portfolioFotoActive.length; i++) {
            if (element == portfolioFotoActive[i]) {
                numFoto = i;
                FotoActive(numFoto);
            }
        }
}

function PortfolioFotoActiveBreadCrumbs(e){
    let element = e.target;
        for (let i = 0; i < portfolioBreadCrumbsActive.length; i++) {
            if (element == portfolioBreadCrumbsActive[i]) {
                numFoto = i;
                FotoActive(numFoto);
            }
}
}



var portfolioName = document.getElementById('portfolioName');
var portTop = document.getElementById('portTop');
var portBottom = document.getElementById('portBottom');
var portfolioTitle = document.getElementById('portfolioTitle');
var portfolioMainFoto = document.getElementById('portfolioMainFoto');
var portfolioMainFoto = document.getElementById('portfolioMainFoto');
var portfolioBreadCrumbs = document.getElementById('portfolioBreadCrumbs');
var portfolioFoto = document.getElementById('portfolioFoto');
var portfolioFotoLeft = document.getElementById('portfolioFotoLeft');
var portfolioMainFotoLeft = document.getElementById('portfolioMainFotoLeft');
var portfolioForoRight = document.getElementById('portfolioForoRight');
var portfolioMainForoRight = document.getElementById('portfolioMainForoRight');
var portName = [],
    portNameDisplayBlock = [],
    portfolioMainFotoActive = [],
    portfolioFotoActive = [],
    portfolioBreadCrumbsActive = [],
    portfolioFotoDisplayBlock = [];


for (let i = 0; i < portfolio.length; i++) {
    NewElement(`<div class="port_element cursor" id="port${i}"><p class="port_name">${portfolio[i][0]}</p><p class="port_address">${portfolio[i][1]}</p></div>`, portfolioName, `port${i}`, portName);
}

var numName = 1;
var numFoto = 0;

PortNameDisplayBlock(portName, numName);
Active(numName);

if(typeof portBottom == 'object'){portBottom.addEventListener('click', (event)=>{
    Carausel(event, numName, portName, 'portTop', 'portBottom', PortNameDisplayBlock)
});}
if(typeof portTop == 'object'){portTop.addEventListener('click', (event)=>{
    Carausel(event, numName, portName, 'portTop', 'portBottom', PortNameDisplayBlock)
});}

if(typeof portfolioMainFotoLeft == 'object'){portfolioMainFotoLeft.addEventListener('click', (event)=>{
    CarauselNum(event, numFoto, portfolioFotoActive, 'portfolioMainFotoLeft', 'portfolioMainForoRight', FotoActive);
} );}

if(typeof portfolioMainForoRight == 'object'){portfolioMainForoRight.addEventListener('click', (event)=>{
    CarauselNum(event, numFoto, portfolioFotoActive, 'portfolioMainFotoLeft', 'portfolioMainForoRight', FotoActive);
} );}
ArrayClick(portName, PortNameActiveClick);
ArrayClick(portfolioFotoActive, PortfolioFotoActiveClickImg);
ArrayClick(portfolioBreadCrumbsActive, PortfolioFotoActiveBreadCrumbs);
if(typeof portfolioFotoLeft == 'object'){portfolioFotoLeft.addEventListener('click', (event)=>{
    CarauselNum(event, numFoto, portfolioFotoActive, 'portfolioFotoLeft', 'portfolioForoRight', FotoActive);
} );}
if(typeof portfolioForoRight == 'object'){portfolioForoRight.addEventListener('click', (event)=>{
    CarauselNum(event, numFoto, portfolioFotoActive, 'portfolioFotoLeft', 'portfolioForoRight', FotoActive);
} );}




var windowFotoLeft = document.getElementById('windowFotoLeft');
var windowFotoRight = document.getElementById('windowFotoRight');
var fotoWindowClose = document.getElementById('fotoWindowClose');
var windowFoto = document.getElementById('windowFoto');
var windowOpen = document.getElementById('windowOpen');
var fotoWindowArray = [];
var numWindowFoto;
var numFoto;

function WindowFotoOpen(array, num, numFoto){
    windowOpen.style.display = 'flex';
    
    for(let i = 2; i < array[num].length; i++){   
        NewElement(`<img class="foto_expanded" src="${array[num][i]}" id="fotoWindow${i - 2}" alt="">`, windowFoto, `fotoWindow${i - 2}`, fotoWindowArray);
    }
    numWindowFoto = numFoto;
    fotoWindowArray[numWindowFoto].style.display = "block";
    if (fotoWindowArray.length == 1){
        None([windowFotoLeft, windowFotoRight]);
    }else{
        windowFotoLeft.style.display = "block";
        windowFotoRight.style.display = "block";
    }
}

function WindowFotoEnd(){
    windowOpen.style.display = 'none';
    fotoWindowArray = [];
    windowFoto.innerHTML = '';
    
}

function PortfolioWindowFoto(array, num){
    CarauselBlock(array, num);
    numWindowFoto = num;
}

if(typeof windowFotoRight == 'object'){windowFotoRight.addEventListener('click', (event)=>{
    Carausel(event, numWindowFoto, fotoWindowArray, "windowFotoLeft", "windowFotoRight", PortfolioWindowFoto);
});}

if(typeof windowFotoLeft == 'object'){windowFotoLeft.addEventListener('click', (event)=>{
    Carausel(event, numWindowFoto, fotoWindowArray, "windowFotoLeft", "windowFotoRight", PortfolioWindowFoto);
});}

function WindowFotoOpenClick(e){
    for (let i = 0; i < portfolioMainFotoActive; i++){
        if (e.target == portfolioMainFotoActive[i]){
            numFoto = i;
        }
    }
    
    WindowFotoOpen(portfolio, numName, numFoto);
  
    
}

ArrayClick(portfolioMainFotoActive,  WindowFotoOpenClick);

if(typeof fotoWindowClose == 'object'){fotoWindowClose.addEventListener('click', WindowFotoEnd);}


});