function verifyPassword(){
    let pw = document.getElementById("password").value;  
    let pw2 = document.getElementById("password2").value;  
    if(pw!==pw2){
        alert("password not matching")
    }
}