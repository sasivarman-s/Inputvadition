let email = document.getElementById("email")
let password = document.getElementById("pass")
let info1 = document.getElementById("info1")
let info2 = document.getElementById("info2")
let btn = document.getElementById("btn")
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(email.value);
    console.log(password.value);
    validation(email,password)
    
})

function validation(email,password){
     var Vemail = email.value
     var Vpassword = password.value
    
}