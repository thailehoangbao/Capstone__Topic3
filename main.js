// DARK THEME(NGUYÊN)
// DARK
var dark = document.getElementById("dark").onclick = function() {
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
};
// LIGHT
var white = document.getElementById("white").onclick = function() {
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

};

document.getElementById("white").style.display = "none";
