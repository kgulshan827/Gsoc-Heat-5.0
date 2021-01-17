
//Countdown-->

// Set the date we're counting down to
var countDownDate = new Date("Oct 2, 2020 18:30:00").getTime();
var eventDate = new Date("Oct 12, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    var eventDistance = eventDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var eventDays = Math.floor(eventDistance / (1000 * 60 * 60 *24));

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = "<i class='fas fa-clock'></i> " +days + "d " +  hours + "h " +  minutes + "m " + seconds + "s";

    if(days >= 0) {
      document.getElementById('main-image').innerHTML="<img src='images/Day " + 0 + ".png' class='responsive'></img>";
    }
    // If the count down is finished, write some text
    if (distance <= 0 && eventDays>=0) {
        // clearInterval(x);
        document.getElementById('main-image').innerHTML="<img src='images/Day " + (10-eventDays) + ".png' class='responsive'></img>";
        document.getElementById("demo").innerHTML = (eventDays)+" days left";
    }
    if(eventDays < 0)
    {
      document.getElementById('main-image').innerHTML="<img src='images/Day " + 10 + ".png' class='responsive'></img>";
      document.getElementById("demo").innerHTML = "Event Completed ";
    }


}, 1000);

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
    });
});


// animation on scroll
$(function(){

  window.sr = ScrollReveal();

  	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}

  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });



});

$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('.split-pane').offset().top }, 'slow');
    return false;
  });
});