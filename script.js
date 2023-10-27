
// This is for image slider in About.html 
//Image slider
const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-image');
let currentIndex = 0;
let up = true;

function nextSlide() {

  if (up) {
    currentIndex++;
    if (currentIndex == 4) {
      up = false;
      currentIndex = 3;
    }
  }
  else {
    currentIndex--;
    if (currentIndex == -1) {
      up = true;
      currentIndex = 1;
    }
  }

  updateSlider();
}

function updateSlider() {
  const translateXValue = -currentIndex * 350; // 300px is the width of each image
  sliderContainer.style.transform = `translateX(${translateXValue}px)`;
}

setInterval(nextSlide, 3000); // Change image every 3 seconds


//counter in About.html

let count_curated_products = 4800;
let count_curated_products_new = 0;
let count_product_categories = 0;

function incrementCounter1() {

  count_curated_products++;

  if (count_curated_products <= 5000) {
    document.getElementById("count-Curated-Products1").innerText = `${count_curated_products}+`;
  }
}

// setInterval(incrementCounter1, 28);

function incrementCounter2() {

  count_curated_products_new++;

  if (count_curated_products_new <= 800) {
    document.getElementById("count-Curated-Products2").innerText = `${count_curated_products_new}+`;
  }
}

// setInterval(incrementCounter2,1);

function incrementCounter3() {

  count_product_categories++;

  if (count_product_categories <= 40) {
    document.getElementById("count-Product-Categories").innerText = `${count_product_categories}+`;
  }
}

// setInterval(incrementCounter3,145);

document.addEventListener("DOMContentLoaded", function () {
  const elementToMonitor = document.getElementById('numbers');

  const executeFunctionWhenVisible = () => {
    const elementRect = elementToMonitor.getBoundingClientRect();

    if (elementRect.top < window.innerHeight && elementRect.bottom >= 0) {
      // The element is in the viewport
      // Execute your desired function here
      setInterval(incrementCounter1, 28);
      setInterval(incrementCounter2, 1);
      setInterval(incrementCounter3, 145);
    }
  }

  executeFunctionWhenVisible();

  window.addEventListener('scroll', executeFunctionWhenVisible);
});


// Frequently Asked Questions

document.addEventListener("DOMContentLoaded", function() {
  var questions = document.querySelectorAll('.que');

  questions.forEach(function(question) {
    var icon = question.querySelector('i');
    var answer = question.nextElementSibling;

    question.addEventListener("click", function() {
      if (answer.style.height === '0px' || !answer.style.height) {
        answer.style.height = answer.scrollHeight + "px";
        icon.classList.remove('fa-caret-right');
        icon.classList.add('fa-caret-down');
        answer.style.borderBottom = '1px solid #d5d8dc';
        question.style.border='none';
      } else {
        answer.style.height = '0';
        icon.classList.remove('fa-caret-down');
        icon.classList.add('fa-caret-right');
        question.style.borderBottom='1px solid #d5d8dc';
        answer.style.borderBottom = 'none';
      }
    });
  });
});
