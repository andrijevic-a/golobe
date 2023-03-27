let aOne = document.querySelector('#fav-hotels-sel');
let aTwo = document.querySelector('#fav-flights-sel');
let contShowerH = document.querySelector('#fav-hotels');
let contShowerF = document.querySelector('#fav-flights');

function hotelsSelect() {
  aOne.style.borderBottom = '0.28vw solid #8DD3BB';
  aTwo.style.borderBottom = 'none';
  contShowerH.style.display = 'block';
  contShowerF.style.display = 'none';
}

function flightsSelect() {
  aOne.style.borderBottom = 'none';
  aTwo.style.borderBottom = '0.28vw solid #8DD3BB';
  contShowerH.style.display = 'none';
  contShowerF.style.display = 'block';
}