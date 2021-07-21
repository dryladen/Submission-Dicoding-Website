// dropdown navbar
let dropDown = document.querySelector(".dropbtn");
dropDown.addEventListener("click",function(){
    var dropdowns = document.querySelector(".dropdown-content");
    dropdowns.classList.toggle("show");
});

window.onclick = function (e){
    if (!e.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName(".dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// scroll indicator
window.onscroll = function() {myFunction()};
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - 625;
    var scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
}