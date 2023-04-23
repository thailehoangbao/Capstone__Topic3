// DARK THEME(NGUYÊN)
// DARK
var dark = (document.getElementById("dark").onclick = function () {
  document.getElementById("switch-theme").className = "dark-white";
  document.getElementById("white").style.display = "inline-block";
  document.getElementById("dark").style.display = "none";
  // Header HTML
  // Thẻ a
  document.getElementById("Farmstead-dark").classList.add("a-dark");
  // Banner HTML
  // Thẻ h1
  document.getElementById("theme1").classList.add("dw-h1");
  // Thẻ h2
  document.getElementById("theme2").classList.add("dw-h2");
  // Thẻ p
  document.getElementById("theme3").classList.add("dw-p");
  // Natural HTML
  // h1
  document.getElementById("theme4").classList.add("dw-h1-na");
  // p
  document.getElementById("theme5").classList.add("dw-p-na");
  // a
  document.getElementById("theme6").classList.add("dw-a1-na");
  document.getElementById("theme7").classList.add("dw-a2-na");
  document.getElementById("theme8").classList.add("dw-a3-na");
  document.getElementById("theme9").classList.add("dw-a4-na");
  //item shadow
  document.getElementById("theme10").classList.add("dw-sha1-na");
  document.getElementById("theme11").classList.add("dw-sha2-na");
  document.getElementById("theme12").classList.add("dw-sha3-na");
  document.getElementById("theme13").classList.add("dw-sha4-na");

  //gallery shadow
  document.getElementById("theme14").classList.add("gallery-dw-h3");
  document.getElementById("theme15").classList.add("gallery-dw-p");

  //footer
  //the h3
  document.getElementById("theme16").classList.add("footer-dw-h3-1");
  //the p
  document.getElementById("theme17").classList.add("footer-dw-p-1");
  document.getElementById("theme18").classList.add("footer-dw-p-2");
  document.getElementById("theme19").classList.add("footer-dw-p-3");
  document.getElementById("theme20").classList.add("footer-dw-p-4");
  //the a
  document.getElementById("theme21").classList.add("footer-dw-a-1");
  document.getElementById("theme22").classList.add("footer-dw-a-2");
  document.getElementById("theme23").classList.add("footer-dw-a-3");
  //the p
  document.getElementById("theme24").classList.add("footer-dw-p-5");
  document.getElementById("theme25").classList.add("footer-dw-p-6");
  document.getElementById("theme26").classList.add("footer-dw-p-7");
  //the a
  document.getElementById("theme27").classList.add("footer-dw-a-4");
  //the h3
  document.getElementById("theme28").classList.add("footer-dw-h3-2");
  //the p
  document.getElementById("theme29").classList.add("footer-dw-p-8");
  //input
  document.getElementById("theme30").classList.add("footer-dw-input");
  // the a
  document.getElementById("theme31").classList.add("footer-dw-a-5");
  document.getElementById("theme32").classList.add("footer-dw-a-6");
  document.getElementById("theme33").classList.add("footer-dw-a-7");
  document.getElementById("theme34").classList.add("footer-dw-a-8");
  document.getElementById("theme35").classList.add("footer-dw-a-9");

  // Bao Dark theme

  var bg__bao = document.querySelectorAll(".bg-bao");
  var cl__bao = document.querySelectorAll(".cl-bao");
  for (i = 0; i < bg__bao.length; i++) {
    bg__bao[i].classList.add("dark-theme-bao");
    bg__bao[i].classList.remove("white-theme-bao");
    cl__bao[i].classList.add("white-color-bao");
    cl__bao[i].classList.remove("dark-color-bao");
  }
});
// LIGHT
var white = (document.getElementById("white").onclick = function () {
  document.getElementById("switch-theme").classList.remove("dark-white");
  document.getElementById("dark").style.display = "inline-block";
  document.getElementById("white").style.display = "none";
  document.getElementById("theme1").className = "dw-h1";
  // REMOVE HTML
  // Thẻ h1 header
  document.getElementById("Farmstead-dark").classList.remove("a-dark");
  // Thẻ h1 banner
  document.getElementById("theme1").classList.remove("dw-h1");
  // Thẻ h2 banner
  document.getElementById("theme2").classList.remove("dw-h2");
  // Thẻ p banner
  document.getElementById("theme3").classList.remove("dw-p");
  // Thẻ h1 natural
  document.getElementById("theme4").classList.remove("dw-h1-na");
  // p
  document.getElementById("theme5").classList.remove("dw-p-na");
  // a
  document.getElementById("theme6").classList.remove("dw-a1-na");
  document.getElementById("theme7").classList.remove("dw-a2-na");
  document.getElementById("theme8").classList.remove("dw-a3-na");
  document.getElementById("theme9").classList.remove("dw-a4-na");
  //item shadow
  document.getElementById("theme10").classList.remove("dw-sha1-na");
  document.getElementById("theme11").classList.remove("dw-sha2-na");
  document.getElementById("theme12").classList.remove("dw-sha3-na");
  document.getElementById("theme13").classList.remove("dw-sha4-na");

  //gallery shadow
  document.getElementById("theme14").classList.remove("gallery-dw-h3");
  document.getElementById("theme15").classList.remove("gallery-dw-p");

  //footer
  //the h3
  document.getElementById("theme16").classList.remove("footer-dw-h3-1");
  //the p
  document.getElementById("theme17").classList.remove("footer-dw-p-1");
  document.getElementById("theme18").classList.remove("footer-dw-p-2");
  document.getElementById("theme19").classList.remove("footer-dw-p-3");
  document.getElementById("theme20").classList.remove("footer-dw-p-4");
  //the a
  document.getElementById("theme21").classList.remove("footer-dw-a-1");
  document.getElementById("theme22").classList.remove("footer-dw-a-2");
  document.getElementById("theme23").classList.remove("footer-dw-a-3");
  //the p
  document.getElementById("theme24").classList.remove("footer-dw-p-5");
  document.getElementById("theme25").classList.remove("footer-dw-p-6");
  document.getElementById("theme26").classList.remove("footer-dw-p-7");
  //the a
  document.getElementById("theme27").classList.remove("footer-dw-a-4");
  //the h3
  document.getElementById("theme28").classList.remove("footer-dw-h3-2");
  //the p
  document.getElementById("theme29").classList.remove("footer-dw-p-8");
  //input
  document.getElementById("theme30").classList.remove("footer-dw-input");
  // the a
  document.getElementById("theme31").classList.remove("footer-dw-a-5");
  document.getElementById("theme32").classList.remove("footer-dw-a-6");
  document.getElementById("theme33").classList.remove("footer-dw-a-7");
  document.getElementById("theme34").classList.remove("footer-dw-a-8");
  document.getElementById("theme35").classList.remove("footer-dw-a-9");

  // Bao White Theme
  var bg__bao = document.querySelectorAll(".bg-bao");
  var cl__bao = document.querySelectorAll(".cl-bao");
  for (i = 0; i < bg__bao.length; i++) {
    bg__bao[i].classList.add("white-theme-bao");
    bg__bao[i].classList.remove("dark-theme-bao");
    cl__bao[i].classList.add("dark-color-bao");
    cl__bao[i].classList.remove("white-color-bao");
  }
});

document.getElementById("white").style.display = "none";
// -----DROPDOWN-MENU-----

// Add slideDown animation to Bootstrap dropdown when expanding.
$(".dropdown").on("show.bs.dropdown", function () {
  $(this).find(".dropdown-menu").first().stop(true, true).slideDown();
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$(".dropdown").on("hide.bs.dropdown", function () {
  $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
});
