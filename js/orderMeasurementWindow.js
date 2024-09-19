//Order Measurement Window



function orderMeasurementWindowOpen() {
    orderMeasurementWindow.style.display = "block";
}

function orderMeasurementWindowOpenTablet() {
    orderMeasurementWindowOpen();
    MenuBurgerClose()
    
}

function orderMeasurementWindowEnd() {
    orderMeasurementWindow.style.display = "none";
}



var orderMeasurementMenu = document.getElementById('orderMeasurementMenu');
var orderMeasurementMenuTablet = document.getElementById('orderMeasurementMenuTablet');
var orderMeasurementWindow = document.getElementById('orderMeasurementWindow');
var orderMeasurementClose = document.getElementById('orderMeasurementClose');

if(typeof orderMeasurementMenu == 'object'){orderMeasurementMenu.addEventListener('click', orderMeasurementWindowOpen)};

if(typeof orderMeasurementMenuTablet == 'object'){orderMeasurementMenuTablet.addEventListener('click', orderMeasurementWindowOpenTablet)};

if(typeof orderMeasurementClose == 'object'){orderMeasurementClose.addEventListener('click', orderMeasurementWindowEnd)};
