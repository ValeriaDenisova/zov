document.addEventListener("DOMContentLoaded", function () {
  let orderMeasurementFirstScreen = document.getElementById("orderMeasurementFirstScreen");
  let reviewsOrderCall = document.getElementById("reviewsOrderCall");
  if (typeof reviewsOrderCall == "object") {
    reviewsOrderCall.addEventListener("click", orderCallWindowOpen);
  }
  if (typeof orderMeasurementFirstScreen == "object") {
    orderMeasurementFirstScreen.addEventListener("click", orderMeasurementWindowOpen);
  }

  //First Screen

  var breadCrumbsFirstScreen = document.getElementById("breadCrumbsFirstScreen");
  var numFirstScreen = 0;

  var firstScreen = document.querySelectorAll(".firstScreen_content");

  function FirstScreenBreadCrumbsClick(e) {
    for (let i = 0; i < breadCrumbsFirstScreen.children.length; i++) {
      breadCrumbsFirstScreen.children[i].classList.remove(`crumb_active`);
      if (e.target == breadCrumbsFirstScreen.children[i]) {
        numFirstScreen = i;
      }
    }
    e.target.classList.add(`crumb_active`);
    FirstScreen(numFirstScreen);
    clearInterval(firstScreenInterval);
    firstScreenInterval = setInterval(FirstScreenTime, 8000);
  }

  function FirstScreen(num) {
    None(firstScreen);
    firstScreen[num].style.display = "flex";
  }

  function FirstScreenTime() {
    numFirstScreen++;
    if (numFirstScreen >= breadCrumbsFirstScreen.children.length) {
      numFirstScreen = 0;
    }
    for (let i = 0; i < breadCrumbsFirstScreen.children.length; i++) {
      breadCrumbsFirstScreen.children[i].classList.remove(`crumb_active`);
    }
    breadCrumbsFirstScreen.children[numFirstScreen].classList.add(`crumb_active`);
    FirstScreen(numFirstScreen);
  }

  FirstScreen(numFirstScreen);

  var firstScreenInterval = setInterval(FirstScreenTime, 8000);
  for (let i = 0; i < breadCrumbsFirstScreen.children.length; i++) {
    if (typeof breadCrumbsFirstScreen.children[i] == "object") {
      breadCrumbsFirstScreen.children[i].addEventListener("click", FirstScreenBreadCrumbsClick);
    }
  }

});