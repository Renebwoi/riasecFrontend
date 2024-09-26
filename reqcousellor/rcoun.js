const loginCookie = getCookie("loginCookie")
console.log("cookie is: ", loginCookie )
// if there is no loginCookie - validate user login
if (!loginCookie) {
  console.log("cookie is: ", loginCookie )
  document.body.innerHTML = `
      <div class="error-container">
          <h1>404</h1>
          <p>Page Not Found</p>
      </div>
  `;
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

// fetch all counsellor details but only display their name, whatsapp number and whatsapp link

async function main() {
  let counsellorbox= document.querySelector('.counsellorbox');
  let url = "https://riasecnode.onrender.com/api/getAllCounsellors"
 const counsellors = await fetchData(url) 
 console.log("the counsellor details are: ", counsellors)


 counsellors.forEach(element => {
  counsellorbox.innerHTML += `<div class="counsbox"><p> <b>Name:</b> ${element.username}</p>
                                              <p id="p${element.id}"> <b>ID:</b> ${element.id} </p>
                                              <p> <b>Email:</b> ${element.email} </p>
                                              <p> <b>Specialization:</b> ${element.specialization} </p>
                                              <p> <b>Phonenumber:</b> ${element.phoneno} </p>
                                              <p> <b>Years of Experience:</b> ${element.yearsOfExperience} </p>
                                              <buton type="button" onclick="selectcounsellor(${element.id},'${element.username}');setCookie('user','student',1);setCookie('counsellorname','${element.username}',1);setCookie('counsellorid','${element.id}',1);moveChat() " id="select${element.id}" class="selectbuttons"> Select Counsellor </button>
                                              <br>
                                              </div>`
 });
}
main()



// normal fetch request
async function fetchData(url) {
  const response = await fetch(url);
  const result = await response.json();
  // console.log(result);
  return result
}

async function selectcounsellor(num,name) {
  let url = "https://riasecnode.onrender.com/api/getStudentData/" + loginCookie;
  let studentData = await fetchData(url)
  let counsellorName = name;
  let counsellorid = num;
  let studentname = await studentData.fullname;
  let studentid = await studentData.id;

  let body = {
    studentID:studentid,
    studentname: studentname,
    counsellorname: counsellorName,
    counsellorid: counsellorid,
  }
  // --------------------------------------------------------------------------------------------------------------------------------------
  // ADD AN EXTRA FETCH REQUEST TO CHECK IF THIS BODY IS ALREADY IN THE COUNSELLORPUPILS DATBASE
  // IF SO DONT POST. TO FIX THE ISSUE WITH MULTIPLE CHATS WITH ONE STUDENT
  let mainurl = "https://riasecnode.onrender.com/api/postpupilrequest"
  const postrequest = postData(mainurl,body)
  
  console.log("Data posted")
}

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

// CLEARING COOKIE
function clearCookie() {
  // Set the cookie with the same name, a blank value, and an expiration date in the past
  document.cookie = loginCookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// SETTING COOKIE
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";" + "path=/;";
}

function moveChat(){
  window.location.href = "../infochatpage.html";
  // console.log("move chat")
}