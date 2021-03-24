$('.counter').counterUp({
    delay: 10,
    time: 3000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');

// button
mybutton = document.getElementById("myBtn");

// when the user scroll down 20px show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// when user clicks on the button
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

