document.querySelector(".username-input").onkeyup = function(){
    if(document.querySelector(".username-input").value.length < 4){
        document.querySelector(".username-error").style.display = 'block';
        document.querySelector(".username-input").style.border = '2px solid red';
    }else{
        document.querySelector(".username-error").style.display = 'none';
        document.querySelector(".username-input").style.border = '2px solid green'
    }
}
document.querySelector(".password").onkeyup = function(){
    if(document.querySelector(".password").value.length < 4){
        document.querySelector(".password-error").style.display = 'block';
        document.querySelector(".password").style.border = '2px solid red';
    }else{
        document.querySelector(".password-error").style.display = 'none';
        document.querySelector(".password").style.border = '2px solid green'
    }
}