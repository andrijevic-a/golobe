// DOUBLE RANGE INPUT

let sliderOne = document.querySelector('#range-slider-1');
let sliderTwo = document.querySelector('#range-slider-2');
let displayValueOne = document.querySelector('#range1');
let displayValueTwo = document.querySelector('#range2');
let minGap = 10;
let sliderTrack = document.querySelector('#slider-track');
let sliderMaxValue = document.querySelector('#range-slider-1').max;

window.onload = function() {
  slideOne();
  slideTwo();
  showMore();
}



function slideOne(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <=minGap){
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValueOne.textContent = '$' + sliderOne.value;
}

function slideTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <=minGap){
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValueTwo.textContent = '$' + sliderTwo.value;
}




// COUNTING OF LISTINGS & SHOW MORE

function showMore() {
  let loadMoreBtn = document.querySelector('#show-more');
  let currentItem = 4;

  loadMoreBtn.onclick = () => {
    console.log('Button clicked');
    let boxes = [...document.querySelectorAll('#container-show')];
    for (var i = currentItem; i < currentItem + 6 && i < boxes.length; i++) {
      boxes[i].style.display = 'flex';
    }
    currentItem += 6;

    if (currentItem >= boxes.length) {
      loadMoreBtn.style.display = 'none';
      const productCount = document.querySelector('.show');
      productCount.textContent = `Showing ${boxes.length} of `;
      currentItem = 4; // reset currentItem to its initial value
    }
  }
}


let aOne = document.querySelector('#hotels-select');
let aTwo = document.querySelector('#motels-select');
let aThree = document.querySelector('#resorts-select');
let contShower = document.querySelectorAll('#container-show');
let textShow = document.querySelector('.show');
let btnShow = document.querySelector('#show-more');
let spanShow = document.querySelector('.show-span');

function hotelsSelect() {
  aOne.style.borderBottom = '0.28vw solid #8DD3BB';
  aTwo.style.borderBottom = 'none';
  aThree.style.borderBottom = 'none';
  textShow.style.display = 'inline';
  spanShow.style.display = 'inline';
  contShower.forEach(function(element, index) {
    if (index >= 4) {
      element.style.display = 'none';
    }
  });
  Array.from(contShower).slice(0, 4).forEach(function(element) {
    element.style.display = 'flex';
  });
  btnShow.style.display = 'block';
}

function motelsSelect() {
  aOne.style.borderBottom = 'none';
  aTwo.style.borderBottom = '0.28vw solid #8DD3BB';
  aThree.style.borderBottom = 'none';
  // textShow.style.display = 'none';
  // spanShow.style.display = 'none';
  // contShower.forEach(function(element) {
  //   element.style.display = 'none';
  // });
  // btnShow.style.display = 'none';
}

function resortsSelect() {
  aOne.style.borderBottom = 'none';
  aTwo.style.borderBottom = 'none';
  aThree.style.borderBottom = '0.28vw solid #8DD3BB';
  // textShow.style.display = 'none';
  // spanShow.style.display = 'none';
  // contShower.forEach(function(element) {
  //   element.style.display = 'none';
  // });
  // btnShow.style.display = 'none';
}

// DIVS REACTING TO THE SLIDER

// Get the range inputs and the container divs
const rangeSlider1 = document.getElementById("range-slider-1");
const rangeSlider2 = document.getElementById("range-slider-2");
const containerDivs = document.querySelectorAll("#container-show");

// Add event listeners to the range inputs
rangeSlider1.addEventListener("input", slide);
rangeSlider2.addEventListener("input", slide);

function slide() {
  // Get the current values of the range inputs
  const value1 = parseInt(rangeSlider1.value);
  const value2 = parseInt(rangeSlider2.value);

  // Loop through the container divs
  containerDivs.forEach(div => {
    // Get the value assigned to the container div
    const divValue = parseInt(div.getAttribute("data-value"));

    // Check if the value of either range input is within the range of data-values of the container div
    if (divValue >= value1 && divValue <= value2) {
      // Show the container div
      div.style.display = "flex";
    } else {
      // Hide the container div
      div.style.display = "none";
    }
  });
  // Hide the "Show more" button
  document.querySelector("#show-more").style.display = "none";
}

// Brojanje majmuna

// create a new MutationObserver
const observer = new MutationObserver(() => {
  updateCount();
  console.log(1);
});

// observe changes to the document body
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// function to update the count of visible divs
function updateCount() {
  console.log(2);
  // get all divs with id="container-show"
  const containerShowDivs = document.querySelectorAll('#container-show');
  
  // filter divs with display: flex
  const visibleDivs = Array.from(containerShowDivs).filter(div => {
    return getComputedStyle(div).display === 'flex';
  });
  
  // update the span with id="num-places" with the count of visible divs
  document.querySelector('#num-places').textContent = visibleDivs.length.toString();
}

