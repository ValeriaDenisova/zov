//Order Measurement Window



function orderCallWindowOpen() {
    orderCalltWindow.style.display = "block";
}

function orderCallWindowEnd() {
    orderCallWindow.style.display = "none";
}


let orderCalltWindow = document.getElementById('orderCallWindow');
let orderCallClose = document.getElementById('orderCallClose');

if(typeof phone == 'object'){phone.addEventListener('click', orderCallWindowOpen);}
if(typeof orderCallClose == 'object'){orderCallClose.addEventListener('click', orderCallWindowEnd);}
