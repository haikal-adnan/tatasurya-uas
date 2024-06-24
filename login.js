let login = document.querySelector(".login_tombol")
login.addEventListener('click', login_sekarang)
function login_sekarang(){
    let user = document.querySelector("#username").value
    let pass = document.querySelector("#password").value

    if(user == "haikal" && pass == 12345){
        window.open("profile.html")
    }
    else if(user == "admin" && pass == 12345){
        window.open("profile.html")
    }
}