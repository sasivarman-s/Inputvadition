var email = document.getElementById("email")
var password = document.getElementById("pass")
var info1 = document.getElementById("info1")
var info2 = document.getElementById("info2")
var btn = document.getElementById("btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(email.value);
    console.log(password.value);
    validation(email.value, password.value)

})

function validation(email, password) {
    const emailregex = /^\S+@\S+\.\S+$/
    const passwordregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    if (email.match(emailregex)) {
        info1.innerHTML = "Email validation successful"
        info1.style.color = "darkgreen"
    } else {
        info1.innerHTML = "Invalid Email format"
    }

    if (password.match(passwordregex)) {
        info2.innerHTML = "Password validation successful"
        info2.style.color = "darkgreen"
    } else {
        info2.innerHTML = "Invalid password format"
    }
}