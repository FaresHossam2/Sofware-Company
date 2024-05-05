document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("bar").addEventListener("click", function () {
        document.querySelector("nav ul").style.right = "-100px";
    });

    document.getElementById("close").addEventListener("click", function () {
        var navUl = document.querySelector("nav ul");
        navUl.style.right = "-3000px";
        navUl.style.transition = "right 0.7s ease-in-out";
    });

    var lis = document.querySelectorAll("li");
    lis.forEach(function (li) {
        li.addEventListener("click", function () {
            document.querySelector("nav ul").style.right = "-3000px";
        });
    });
});
   
//reviews
let slideIndex = 0;

function showSlide(n) {
const slides = document.getElementsByClassName("slide");
if (n < 0) {
slideIndex = slides.length - 1;
} else if (n >= slides.length) {
slideIndex = 0;
}
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slideIndex].style.display = "block";
}

function nextSlide() {
showSlide(++slideIndex);
}

function prevSlide() {
showSlide(--slideIndex);
}

showSlide(slideIndex);



//cards services 
let cardIndex = 0;
const cardsPerPage = 2;
const screenWidthThreshold = 768; 

function showcard() {
    const screenWidth = window.innerWidth;
    const cards = document.getElementsByClassName("card");
    if (screenWidth <= screenWidthThreshold) {
        for (let i = 0; i < cards.length; i++) {
            if (i === cardIndex) {
                cards[i].style.display = "block";
            } else {
                cards[i].style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            if (i >= cardIndex && i < cardIndex + cardsPerPage) {
                cards[i].style.display = "block";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}

function nextCard() {
    const screenWidth = window.innerWidth;
    const cards = document.getElementsByClassName("card");
    if (screenWidth <= screenWidthThreshold) {
        if (cardIndex < cards.length - 1) {
            cardIndex++;
            showcard();
        }
    } else {
        cardIndex = (cardIndex + cardsPerPage) % cards.length;
        showcard();
    }
}

function prevCard() {
    const screenWidth = window.innerWidth;
    const cards = document.getElementsByClassName("card");
    if (screenWidth <= screenWidthThreshold) {
        if (cardIndex > 0) {
            cardIndex--;
            showcard();
        }
    } else {
        cardIndex = (cardIndex - cardsPerPage + cards.length) % cards.length;
        showcard();
    }
}

window.addEventListener('resize', showcard); 
showcard(); 



//logos
function stopAnimation() {
    var sliders = document.querySelectorAll('.ads .move');
    sliders.forEach(function(move) {
      move.addEventListener('mouseover', function() {
        move.style.animationPlayState = 'paused';
      });
  
      move.addEventListener('mouseout', function() {
        move.style.animationPlayState = 'running';
      });
    });
  }


  stopAnimation();