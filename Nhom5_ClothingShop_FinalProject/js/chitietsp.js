// ----------------PRODUCT---------------------------

const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem, X) {
    imgItem.addEventListener("click", function() {
        bigImg.src = imgItem.src
    })
})


const chitiet = document.querySelector(".chitiet")
const chamsoc = document.querySelector(".chamsoc")
const doitravanchuyen = document.querySelector(".doitravanchuyen")

if (chitiet) {
    chitiet.addEventListener("click", function() {
        document.querySelector(".panel-title-content-chamsoc").style.display = "none"
        document.querySelector(".panel-title-content-doitravanchuyen").style.display = "none"
        document.querySelector(".panel-title-content-chitiet").style.display = "block"
    })
}

if (chamsoc) {
    chamsoc.addEventListener("click", function() {
        document.querySelector(".panel-title-content-chamsoc").style.display = "block"
        document.querySelector(".panel-title-content-doitravanchuyen").style.display = "none"
        document.querySelector(".panel-title-content-chitiet").style.display = "none"
    })
}

if (doitravanchuyen) {
    doitravanchuyen.addEventListener("click", function() {
        document.querySelector(".panel-title-content-chamsoc").style.display = "none"
        document.querySelector(".panel-title-content-doitravanchuyen").style.display = "block"
        document.querySelector(".panel-title-content-chitiet").style.display = "none"
    })
}

$(document).ready(function() {
    $('ul li a').click(function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

// Carousel-related

$(document).ready(function() {
    $('#slider-product-related .product-related-content').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1
    })
});



// Responsive-carousel

$('#slider-product-related .product-related-content').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})