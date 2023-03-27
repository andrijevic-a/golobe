let aOne = document.querySelector('#account');
let aTwo = document.querySelector('#history');
let aThree = document.querySelector('#payment-methods');
let contShowerA = document.querySelector('#acc-info');
let contShowerH = document.getElementById('his-info');
let contShowerP = document.querySelector('#pay-info');
let HeadA = document.getElementById('hacc');
let HeadH = document.getElementById('htb');
let HeadP = document.getElementById('hpay');




function accSelect() {
  aOne.style.borderBottom = '0.28vw solid #8DD3BB';
  aTwo.style.borderBottom = 'none';
  aThree.style.borderBottom = 'none';
  contShowerA.style.display = 'flex';
  contShowerH.style.display = 'none';
  contShowerP.style.display = 'none';
  HeadA.style.display = 'block';
  HeadH.style.display = 'none';
  HeadP.style.display = 'none';
}

function hisSelect() {
  aOne.style.borderBottom = 'none';
  aTwo.style.borderBottom = '0.28vw solid #8DD3BB';
  aThree.style.borderBottom = 'none';
  contShowerA.style.display = 'none';
  contShowerH.style.display = 'block';
  contShowerP.style.display = 'none';
  HeadA.style.display = 'none';
  HeadH.style.display = 'block';
  HeadP.style.display = 'none';
}

function paySelect() {
  aOne.style.borderBottom = 'none';
  aTwo.style.borderBottom = 'none';
  aThree.style.borderBottom = '0.28vw solid #8DD3BB';
  contShowerA.style.display = 'none';
  contShowerH.style.display = 'none';
  contShowerP.style.display = 'flex';
  HeadA.style.display = 'none';
  HeadH.style.display = 'none';
  HeadP.style.display = 'block';
}

let bOne = document.querySelector('#fl-slct');
let bTwo = document.querySelector('#st-slct');
let showerFl = document.querySelector('#his-fl-info');
let showerSt = document.getElementById('his-st-info');

function flSelect() {
  bOne.style.borderBottom = '0.28vw solid #8DD3BB';
  bTwo.style.borderBottom = 'none';
  showerFl.style.display = 'block';
  showerSt.style.display = 'none';
}

function stSelect() {
  bOne.style.borderBottom = 'none';
  bTwo.style.borderBottom = '0.28vw solid #8DD3BB';
  showerFl.style.display = 'none';
  showerSt.style.display = 'block';
}