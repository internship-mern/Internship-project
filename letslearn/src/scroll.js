  window.onscroll = function() {scrollFunction()};
let height=85;
function scrollFunction() {
  if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
    document.getElementById("welcome-text-container").style.boxShadow= " 0px 12px 11px -16px green";
  } else {
    document.getElementById("welcome-text-container").style.boxShadow="0 0 0 0 black";
  }
}
