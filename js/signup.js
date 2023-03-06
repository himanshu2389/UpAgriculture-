document.querySelector('.button').onclick=function(){
    var password=document.querySelector('.password').value,
    confirmPassword=document.querySelector('.confirmPassword').value;

    if(password==""){
     alert("Field cannot be empty.");   
    }
}