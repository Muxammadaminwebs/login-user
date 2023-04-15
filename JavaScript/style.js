"use strict"
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let form = document.querySelector(".form")
console.log(form);

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let  inpt1 = input1.value
    let  inpt2 = input2.value
    

    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: inpt1,
            password: inpt2,
        })
    }).then(res => res.json())
        .then(data => {
        if (data.token) {
            window.location.replace('index2.html')
        } else {
            alert("Sen men emassan")
        }
    })
})
