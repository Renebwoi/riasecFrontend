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
  let url = "http://localhost:3003/api/getAllCounsellors"
 const counsellors = await fetchData(url) 
 console.log("the counsellor details are: ", counsellors)


 counsellors.forEach(element => {
  counsellorbox.innerHTML += `<div class="counsbox"><p>Name: ${element.username}</p>
                                              <p id="p${element.id}">ID: ${element.id} </p>
                                              <p>Email: ${element.email} </p>
                                              <p>Specialization: ${element.specialization} </p>
                                              <p>Phonenumber: ${element.phoneno} </p>
                                              <p>Years of Experience: ${element.yearsOfExperience} </p>
                                              <buton type="button" onclick="selectcounsellor(${element.id},'${element.username}')" id="select${element.id}" class="selectbuttons"> Select Counsellor </button>
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
  let url = "http://localhost:3003/api/getStudentData/" + loginCookie;
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
  let mainurl = "http://localhost:3003/api/postpupilrequest"
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