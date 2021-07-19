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