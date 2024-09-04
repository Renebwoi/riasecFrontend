


async function registerStudent(value) {
    console.log(value, typeof(value))

    
if (value==2){//2 means register for student
    let username = document.querySelector('#student-register-name').value
    // console.log(username)
    let password = document.querySelector('#student-register-password').value
    let fullname = document.querySelector('#student-fullname').value
    let email = document.querySelector('#student-email').value
    let age = document.querySelector('#student-register-age').value
    let schoolname = document.querySelector('#student-register-schoolname').value

    if (username && password && fullname && email && age ){

console.log("hello")
    // create a fetch statement to the backend to add this values as a new student user in the student database
    // then display the login field

    const postDataUrl = "https://riasecnode.onrender.com/api/post";
    const payload = { 
        "username": username,
        "password":password,
        "fullname": fullname,
        "email": email,
        "age": age,
        "schoolname": schoolname
     };
    let register = await postData(postDataUrl, payload);
    console.log(register)
    alert("Student Registered Successfully")

    // window.location.href = "./personalitypg.html";

      // window.location.href = "/personalitypg.html";
  }
}
if (value==1){//1 means login for student
    let usernamelogs = document.querySelector('#login-name').value
    let passwordlogs = document.querySelector('#login-password').value
      if (usernamelogs && passwordlogs ){
      //login student
      const fetchDataUrl = "https://riasecnode.onrender.com/api/loginstudent";
      loginData = {
        "username" : usernamelogs,
        "password" : passwordlogs
      }

      let loginCookie = await loginfetchData(fetchDataUrl, loginData);
      console.log("Your login cookie is: ",loginCookie)

      if(loginCookie == "User Not Registered"){
        alert("Wrong login details")
      } 
      else {
        setCookie("loginCookie", loginCookie, 1)

        alert("Student Logged in Successfully")

        window.location.href = "./personalitypg.html";
      }
    }
}
if (value==3){
  //3 means login for counsellor
  console.log("hullo")
  let usernamelogs = document.querySelector('#login-name').value
  let passwordlogs = document.querySelector('#login-password').value
  if (usernamelogs && passwordlogs ){
    //login counsellor
    const fetchDataUrl = "https://riasecnode.onrender.com/api/logincounsellor";
      loginData = {
        "username" : usernamelogs,
        "password" : passwordlogs
      }

      let loginCookie = await loginfetchData(fetchDataUrl, loginData);
      console.log(loginCookie)

      setCookie("loginCookie", loginCookie, 1)

    alert("Counsellor Logged in Successfully")
    // later, direct straight to the counsellor page
    window.location.href = "./counsellorpage.html";
  }
}
if (value==4){//4 means register for counsellor
  let cname = document.querySelector('#counsellor-register-name').value
  let cpassword = document.querySelector('#counsellor-register-password').value
  let cemail = document.querySelector('#counsellor-email').value
  let cphoneno = document.querySelector('#counsellor-phoneno').value
  let cspecialization = document.querySelector('#counsellor-specialization').value
  let cexperience = document.querySelector('#counsellor-experience').value

  if (cname && cpassword && cemail && cspecialization && cexperience) {
  //register counsellor
  console.log("hello")
  // create a fetch statement to the backend to add these values as a new counsellor user in the counsellor database
  // then display the login field

  const postDataUrl = "https://riasecnode.onrender.com/api/postcounsellor";
  const payload = { 
      "username": cname,
      "password":cpassword,
      "specialization": cspecialization,
      "email": cemail,
      "phoneno": cphoneno,
      "yearsOfExperience": cexperience
   };
  let register = await postData(postDataUrl, payload);
  console.log(register)
  alert("Counsellor Registered Successfully")
    // later, direct straight to the counsellor page
    // window.location.href = "./counsellorpage.html";
  }
}
}



let methodbox = document.querySelector('.method')
let login_select = document.querySelector('.login-select')
let loginbox = document.querySelector('.login')
let register_select = document.querySelector('.register-select')
let registerbox = document.querySelector('.register')

let methodbox2 = document.querySelector('.register-method')
let student_select = document.querySelector('.student-register-method')
let studentbox = document.querySelector('.student-register')
let counselling_select = document.querySelector('.counsellor-register-method')
let counsellorbox = document.querySelector('.counsellor-register')

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
  counsellorbox.style.display = "none"
});



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


// FETCH FUNCTIONS
// --------------------------------------------------------------------------------

// REGISTER FETCH FOR STUDENT
async function postData(url, data) {
  const response = await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  });
  const result = await response.text();
  // console.log(result);
  return result
}

// LOGIN DATA FOR STUDENT
async function loginfetchData(url, loginData) {
const response = await fetch(url, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
});
const result = await response.text();
// console.log(result);
return result
}

// Usage
// const postDataUrl = "https://api.example.com/submit";
// const payload = { answer: 42 };
// postData(postDataUrl, payload);


// COOKIES
//CREATE COOKIE 
// cname - cookie name, cvalue - cookie value, exdays - no of days till expiry

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}

// GETTING THE COOKIE
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// CLEARING COOKIE
function clearCookie() {
  // Set the cookie with the same name, a blank value, and an expiration date in the past
  document.cookie = loginCookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
