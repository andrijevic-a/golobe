function showTxt1() {
  var dots = document.querySelector("#dots");
  var moreText = document.querySelector("#more-txt");
  var btnText = document.querySelector("#show-more-txt");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View less";
    moreText.style.display = "inline";
  }
}

function showTxt2() {
  var dots = document.querySelector("#dots2");
  var moreText = document.querySelector("#more-txt2");
  var btnText = document.querySelector("#show-more-txt2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View less";
    moreText.style.display = "inline";
  }
}

function showTxt3() {
  var dots = document.querySelector("#dots3");
  var moreText = document.querySelector("#more-txt3");
  var btnText = document.querySelector("#show-more-txt3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View less";
    moreText.style.display = "inline";
  }
}

function showTxt4() {
  var dots = document.querySelector("#dots4");
  var moreText = document.querySelector("#more-txt4");
  var btnText = document.querySelector("#show-more-txt4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View less";
    moreText.style.display = "inline";
  }
}

function showTxt5() {
  var dots = document.querySelector("#dots5");
  var moreText = document.querySelector("#more-txt5");
  var btnText = document.querySelector("#show-more-txt5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View less";
    moreText.style.display = "inline";
  }
}

function showTxt6() {
  var dots = document.querySelector("#dots6");
  var moreText = document.querySelector("#more-txt6");
  var btnText = document.querySelector("#show-more-txt6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View less";
    moreText.style.display = "inline";
  }
}

let aOne = document.querySelector('#tbd-srch-flghts');
let aTwo = document.querySelector('#tbd-srch-plcs');
let contShowerH = document.querySelector('#places-search');
let contShowerF = document.querySelector('#flights-search');

function htlsSelect() {
  aOne.style.borderBottom = 'none';
  aTwo.style.borderBottom = '0.28vw solid #8DD3BB';
  contShowerH.style.display = 'block';
  contShowerF.style.display = 'none';
}

function flghtsSelect() {
  aOne.style.borderBottom = '0.28vw solid #8DD3BB';
  aTwo.style.borderBottom = 'none';
  contShowerH.style.display = 'none';
  contShowerF.style.display = 'block';
}