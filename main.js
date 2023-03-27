let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// SHOW PASSWORD

function myFunction() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// ADD PAYMENT

document.addEventListener('DOMContentLoaded', () => {
  for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
  const pattern = el.getAttribute("placeholder"),
  slots = new Set(el.dataset.slots || "_"),
  prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
  first = [...pattern].findIndex(c => slots.has(c)),
  accept = new RegExp(el.dataset.accept || "\\d", "g"),
  clean = input => {
  input = input.match(accept) || [];
  return Array.from(pattern, c =>
  input[0] === c || slots.has(c) ? input.shift() || c : c
  );
  },
  format = () => {
  const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
  i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
  return i<0? prev[prev.length-1]: back? prev[i-1] || first: i; }); el.value=clean(el.value).join``; el.setSelectionRange(i, j); back=false; }; let back=false; el.addEventListener("keydown", (e)=> back = e.key === "Backspace");
    el.addEventListener("input", format);
    el.addEventListener("focus", format);
    el.addEventListener("blur", () => el.value === pattern && (el.value=""));
    }
    });
  
  let user_name = document.querySelector(".user_name");
  let set_card_number = document.querySelector(".set_card_number");
  let user_cardcvv = document.querySelector(".user_card_cvv")
  let user_name_input = document.getElementById("user_name_input");
  let user_card_number_input= document.getElementById("user_card_number_input");
  function userName(name){
      
      user_name.innerHTML = name; 
  } 
  
  function userCardNumber(cardNumber){
      set_card_number.innerHTML = cardNumber;
  }
  
  function usercardcvv(cvv){
      user_cardcvv.innerHTML=cvv; 
  }
  
  let card=document.querySelector(".debit-card");
  let click_pay = document.querySelector(".click-pay");
  let left_side = document.querySelector(".left-side");
  let right_side = document.querySelector(".right-side");
  let success = document.querySelector(".success");
  click_pay.addEventListener('click',function(){
      
      
      if(!validateform()){ 
          return false;
      } 
    right_side.style.display="none";
    left_side.classList.toggle('wide');
    left_side.style.display="block";
    card.classList.add('d-none');
       
    setTimeout(function(){
      success.classList.add('success_done');
  }, 2000);
    
  setTimeout(function(){
      success.classList.add('success_final');
  }, 4000);
     
  });
  
  function validateform(){
      validate=true;
  let validate_inputs=document.querySelectorAll(".right-side input");  
       
       validate_inputs.forEach(function(input_valid){
       input_valid.classList.remove('warning');
       if(input_valid.hasAttribute('require')){
           if(input_valid.value.length==0){
               validate=false;
               input_valid.classList.add('warning');
           }
          }
        });
        return validate;
      }
      
      // validate_inputs.classList.remove('warning');
      // if(validate_inputs has);

  // POP-UP FORM

  function openForm() {
    document.getElementById("new-card-form").style.display = "flex";
    document.getElementById("form-bg").style.display = "flex";
  }
  
  function closeForm() {
    document.getElementById("new-card-form").style.display = "none";
    document.getElementById("form-bg").style.display = "none";
  }


  // FORM BACKGROUND
  function formBackgroundOne() {
    if (document.getElementById('pay-in-full').checked) {
      document.getElementById('form-1').style.backgroundColor = '#8DD3BB';
      document.getElementById('form-2').style.backgroundColor = '';
    } else {
      document.getElementById('form-1').style.backgroundColor = '';
    }
  }

  function formBackgroundTwo() {
    if (document.getElementById('pay-partly').checked) {
      document.getElementById('form-2').style.backgroundColor = '#8DD3BB';
      document.getElementById('form-1').style.backgroundColor = '';
    } else {
      document.getElementById('form-2').style.backgroundColor = '';
    }
  }
  
// CARD SELECTED

function cardBackground() {
  if (document.getElementById('card-selected-input').checked) {
    document.getElementById('card-selected').style.backgroundColor = '#8DD3BB';
  } else {
    document.getElementById('card-selected').style.backgroundColor = '';
  }
}





