function buka_menu(){
    document.querySelector(".penutup_menu").style.display = "block"; 
    document.querySelector(".app").style.display = "flex"; 
    setTimeout(function(){
        document.querySelector(".app").style.width = "250px"; 
    }, 100);
}

function tutup_menu(){
    document.querySelector(".app").style.width = "0";
    setTimeout(function(){
        document.querySelector(".penutup_menu").style.display = "none";
        document.querySelector(".app").style.display = "none"; 
    }, 100);
}

window.addEventListener('resize', function() {
    if (window.innerWidth >= 1200) {
        document.querySelector(".app").style.display = "flex"; 
        document.querySelector(".app").style.width = "250px"; 
    }
    else{
        tutup_menu();
    }
});