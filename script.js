function postData(url, data) {
    // const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // });
    // const result = await response.text();
    // console.log(result);
    return "User Logged in"
}

// Usage
// const postDataUrl = "https://api.example.com/submit";
// const payload = { answer: 42 };
// postData(postDataUrl, payload);


function registerStudent() {
    username = document.querySelector('#student-register-name').value
    // console.log(username)
    password = document.querySelector('#student-register-password').value
    fullname = document.querySelector('#student-fullname').value
    email = document.querySelector('#student-email').value
    age = document.querySelector('#student-register-age').value
    schoolname = document.querySelector('#student-register-schoolname').value

    // create a fetch statement to the backend to add this values as a new student user in the student database
    // then display the login field

    const postDataUrl = "http://127.0.0.1:5000/registerstudent1";
    const payload = { 
        "username": "gad",
        "password":"gade",
        "fullname":"gado",
        "email":"gado@gmail.com",
        "age":13,
        "schoolname":"UNN"
     };
    let register = postData(postDataUrl, payload);
    console.log(register)
    alert(register)

    window.location.href = "./personalitypg.html";

}

let methodbox = document.querySelector('.method')
let login_select = document.querySelector('.login-select')
let loginbox = document.querySelector('.login')
let register_select = document.querySelector('.register-select')
let registerbox = document.querySelector('.register')

login_select.addEventListener('click', function() {
  this.style.backgroundColor = 'yellow'; // Change to the desired color
  loginbox.style.display = "grid";
  registerbox.style.display = "none"
  methodbox.style.display = 'none';
});

register_select.addEventListener('click', function() {
  this.style.backgroundColor = 'yellow'; // Change to the desired color
  loginbox.style.display = "none";
  registerbox.style.display = "grid"
  methodbox.style.display = 'none';
});

let methodbox2 = document.querySelector('.register-method')
let student_select = document.querySelector('.student-register-method')
let studentbox = document.querySelector('.student-register')
let counselling_select = document.querySelector('.counsellor-register-method')
let counsellorbox = document.querySelector('.counsellor-register')

student_select.addEventListener('click', function() {
  // this.style.backgroundColor = 'yellow'; // Change to the desired color
  studentbox.style.display = "grid";
  counsellorbox.style.display = "none"
  methodbox2.style.display = 'none';
});

counselling_select.addEventListener('click', function() {
  // this.style.backgroundColor = 'yellow'; // Change to the desired color
  studentbox.style.display = "none";
  counsellorbox.style.display = "grid"
  methodbox2.style.display = 'none';
});