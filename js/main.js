$(function() {
  
  $(".bg-holder").parallaxScroll({
    friction: 0.08,
    direction: "vertical"
  });
  
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-71px";
  }
  prevScrollpos = currentScrollPos;
}

function myFunction() {
var x = document.getElementById("myLinks");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}