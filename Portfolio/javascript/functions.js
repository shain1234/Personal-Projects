$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".nav a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function(){});

function dropdownfun(){
  $("ul").toggleClass("show");
};

var loadImageOnScrollIntoView = function(img) {
  var imgPos = img.getBoundingClientRect(),
	  src = img.getAttribute('data-src');
  window.addEventListener('scroll', function loadImgWhenVisible() {
    return window.scrollY >= (imgPos.top - window.innerHeight) ? (img.src = src, window.removeEventListener('scroll', loadImgWhenVisible)) : false;
  });
};

Array.apply(null, document.querySelectorAll('img')).forEach(function(e) {
	loadImageOnScrollIntoView(e);
});
