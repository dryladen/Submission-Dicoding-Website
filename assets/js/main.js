// dropdown navbar
let dropDown = document.querySelector(".dropbtn");
const logoDropdown = document.querySelector('.dropbtn svg')
dropDown.addEventListener("click",function(){
    let dropdowns = document.querySelector(".dropdown-content");
	logoDropdown.style.transform = 'rotate(0deg)'
    dropdowns.classList.toggle("show");
    if(dropdowns.classList.contains('show') == false){
		logoDropdown.style.transform = 'rotate(90deg)'
	}
});

window.onclick = function (e){
    // dropdown remove show
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
    // scrollTop setting
    if (e.target.matches('.nav-link') || e.target.matches('.nav-parent')){
        let link = e.target.getAttribute("href");
        let tujuan = document.querySelector(link);
        document.body.scrollTop = (tujuan.offsetTop-70);
        e.preventDefault();
    }
};

// scroll indicator
window.onscroll = function() {myFunction()};
function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - 625;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
    var dropdowns = document.querySelector(".dropdown-content");
    dropdowns.classList.remove("show");
    logoDropdown.style.transform = 'rotate(90deg)';
}