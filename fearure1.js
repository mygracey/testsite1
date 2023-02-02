let username=document.getElementById('username')
let email=document.getElementById('email')
let password=document.getElementById('password')
let message=document.getElementById('msg')
let button=document.getElementById('btnreg')


button.addEventListener('click',function(){
    if(username.value=="" || email.value=="" || password.value==""){
        message.innerHTML="Please fill in all fields!"
    }
    else if(username.value=="grace" && email.value=="grace@yahoo.com" && password.value=="1234"){
        message.innerHTML="Hi! your registration was successful.Redirecting new user to login page..."
        setTimeout(()=>{
            window.location.href="login.html"
        },3000)
    }
    else{
        message.innerHTML="Sorry error!"
    }
})