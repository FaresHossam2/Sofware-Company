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
    // Filter
    const images = document.querySelectorAll(".tech-images img");
    const buttons = document.querySelectorAll(".tech .container h5");

    const filterImages = (e) => {
        const selectedCategory = e.target.dataset.name.toLowerCase();
        buttons.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        images.forEach(img => {
            const imgCategory = img.dataset.name.toLowerCase();
            if (selectedCategory === "all" || imgCategory.includes(selectedCategory)) {
                img.classList.remove("hide");
            } else {
                img.classList.add("hide");
            }
        });
    };

    buttons.forEach(btn => btn.addEventListener("click", filterImages));

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







//logos
function stopAnimation() {
    var sliders = document.querySelectorAll('.ads .move');
    sliders.forEach(function (move) {
        move.addEventListener('mouseover', function () {
            move.style.animationPlayState = 'paused';
        });

        move.addEventListener('mouseout', function () {
            move.style.animationPlayState = 'running';
        });
    });
}


stopAnimation();


// filter 