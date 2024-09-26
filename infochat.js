const loginCookie = getCookie("loginCookie")
console.log("cookie is: ", loginCookie )
// if there is no loginCookie - validate user login
if (!loginCookie) {
  console.log("cookie is: ", loginCookie )
  document.body.innerHTML = `
      <div class="error-container">
          <h1>404</h1>
          <p>Page Not Found</p>
          <p>Try Logging in again</p>
      </div>
  `;
}

async function main() {
    const user = getCookie('user')
    console.log('user is ', user)
    if(user == 'counsellor'){
        const studentname = getCookie('studentname');
        const studentid = getCookie('studentid')
        
        const url = "https://riasecnode.onrender.com/api/getcode/" + studentid;
        const studentData = await fetchData(url);

        console.log("Student Data is: ", studentData)

        let studentInfobox = document.querySelector('.studentInfobox')
        let chatbox = document.querySelector('.chatbox')
        studentInfobox.innerHTML += `
                                                        <div class = "a1">
                                                        <h3>Student Name: ${studentData.studentname}</h3>
                                                        <p>Student Code: ${studentData.riasecCode}</p>
                                                        </div>
                                                        <div class = "a2">
                                                        <h3>Student RIASEC scores</h3>
                                                        <p> Realistic: ${studentData.riasecScore.realistic}</p>
                                                        <p> Investigative: ${studentData.riasecScore.investigative}</p>
                                                        <p> Social: ${studentData.riasecScore.social}</p>
                                                        <p> Enterprising: ${studentData.riasecScore.realistic}</p>
                                                        <p> Conventional: ${studentData.riasecScore.conventional}</p>
                                                        </div>
                                                        <div class = "a3">
                                                        <h3> Student WAEC results</h3>
                                                        <p>${studentData.waecResults.subject1.subjectName} : ${studentData.waecResults.subject1.subjectScore}</p>
                                                        <p>${studentData.waecResults.subject2.subjectName} : ${studentData.waecResults.subject2.subjectScore}</p>
                                                        <p>${studentData.waecResults.subject3.subjectName} : ${studentData.waecResults.subject3.subjectScore}</p>
                                                        <p>${studentData.waecResults.subject4.subjectName} : ${studentData.waecResults.subject4.subjectScore}</p>
                                                        <p>${studentData.waecResults.subject5.subjectName} : ${studentData.waecResults.subject5.subjectScore}</p>
                                                        <p>${studentData.waecResults.subject6.subjectName} : ${studentData.waecResults.subject6.subjectScore}</p>
                                                        <p>${studentData.waecResults.subject7.subjectName} : ${studentData.waecResults.subject7.subjectScore}</p>
                                                        <p>${studentData.waecResults.subject8.subjectName} : ${studentData.waecResults.subject8.subjectScore}</p>
                                                        <p>${studentData.waecResults.subject9.subjectName} : ${studentData.waecResults.subject9.subjectScore}</p>
                                                        </div>`

        chatbox.innerHTML = `<button type="button" onclick="showInfo()" class="showbutton">Hide Student Info</button>`
        let counUrl = "https://riasecnode.onrender.com/api/getCounData/" + loginCookie
        const counsellorData = await fetchData(counUrl)
         let messages = await fetchData(`https://riasecnode.onrender.com/api/counsGetmsg/${studentid}/${counsellorData.id}`)
         console.log("Our Messages are: ", messages)

         for(let i = 0;i<messages.length;i++){
            if(messages[i].chattertype == "counsellor"){
              chatbox.innerHTML += `<div class="counMsgBox">
                                                  <h3>Counsellor</h3>
                                                  <p>${messages[i].message}</p>
                                                  <p>${messages[i].time}</p>
                                                  </div>`
            }else{
              chatbox.innerHTML += `<div class="counMsgBox">
                                                  <h3>Student</h3>
                                                  <p>${messages[i].message}</p>
                                                  <p>${messages[i].time}</p>
                                                  </div>`
            }
         }

         var countCheck = messages.length

        setInterval(async function() {
          let messages = await fetchData(`https://riasecnode.onrender.com/api/counsGetmsg/${studentid}/${counsellorData.id}`)
         console.log("Our Messages are: ", messages)

         if(countCheck != messages.length){

         chatbox.innerHTML = `<button type="button" onclick="showInfo()" class="showbutton">Hide Student Info</button>`
        
         let counUrl = "https://riasecnode.onrender.com/api/getCounData/" + loginCookie
        const counsellorData = await fetchData(counUrl)
         

         for(let i = 0;i<messages.length;i++){
            if(messages[i].chattertype == "counsellor"){
              chatbox.innerHTML += `<div class="counMsgBox">
                                                  <h3>Counsellor</h3>
                                                  <p>${messages[i].message}</p>
                                                  <p>${messages[i].time}</p>
                                                  </div>`
            }else{
              chatbox.innerHTML += `<div class="counMsgBox">
                                                  <h3>Student</h3>
                                                  <p>${messages[i].message}</p>
                                                  <p>${messages[i].time}</p>
                                                  </div>`
            }
         }
          countCheck = messages.length
          console.log("updated")
        }

          }, 10000);
      
         
         
        




        }
        else if(user == 'student'){
          console.log("user is cooked")
          let chatbox = document.querySelector('.chatbox')
          const counsellorname = getCookie('counsellorname');
          const counsellorid = getCookie('counsellorid')

          chatbox.innerHTML = ``
          let studUrl = "https://riasecnode.onrender.com/api/getStudentData/" + loginCookie
          const studentData = await fetchData(studUrl)
          let messages = await fetchData(`https://riasecnode.onrender.com/api/counsGetmsg/${studentData.id}/${counsellorid}`)
          console.log("Our Messages are: ", messages)

          for(let i = 0;i<messages.length;i++){
            if(messages[i].chattertype == "counsellor"){
              chatbox.innerHTML += `<div class="counMsgBox msgBox">
                                                  <h3>Counsellor</h3>
                                                  <p>${messages[i].message}</p>
                                                  <p>${messages[i].time}</p>
                                                  </div>`
            }else{
              chatbox.innerHTML += `<div class="studMsgBox msgBox">
                                                  <h3>Student</h3>
                                                  <p>${messages[i].message}</p>
                                                  <p>${messages[i].time}</p>
                                                  </div>`
            }
         }

         var countCheck = messages.length


         setInterval(async function() {
          let studUrl = "https://riasecnode.onrender.com/api/getStudentData/" + loginCookie
          const studentData = await fetchData(studUrl)

          let messages = await fetchData(`https://riasecnode.onrender.com/api/counsGetmsg/${studentData.id}/${counsellorid}`)
          console.log("Our Messages are: ", messages)
 
          if(countCheck != messages.length){
            chatbox.innerHTML = ``
   
            for(let i = 0;i<messages.length;i++){
               if(messages[i].chattertype == "counsellor"){
                 chatbox.innerHTML += `<div class="counMsgBoxed">
                                                     <h3>Counsellor</h3>
                                                     <p>${messages[i].message}</p>
                                                     <p>${messages[i].time}</p>
                                                     </div>`
               }else{
                 chatbox.innerHTML += `<div class="counStudBoxed">
                                                     <h3>Student</h3>
                                                     <p>${messages[i].message}</p>
                                                     <p>${messages[i].time}</p>
                                                     </div>`
               }
            }
             countCheck = messages.length
             console.log("updated")
          }
        }, 10000);
        }




}
main()






let shownum = 0
function showInfo() {
    let studentInfobox = document.querySelector('.studentInfobox')
    let button = document.querySelector('.showbutton')

    if(shownum == 0){
    studentInfobox.style.display = "none"
    button.textContent = "Show Student Info"
    shownum = 1
    }
    else if (shownum == 1){
        studentInfobox.style.display = "flex"
        button.textContent = "Hide Student Info"
        shownum = 0
    }
}


async function sendMsg() {
  const user = getCookie('user')

  if(user=="counsellor"){
    await counsellorSendMsg()
  }else if(user=="student"){
    await studentSendMsg()
  }
}

async function counsellorSendMsg() {
  let message = document.querySelector('#textinputbox').value

  if(message != false){
  let counUrl = "https://riasecnode.onrender.com/api/getCounData/" + loginCookie
  const counsellorData = await fetchData(counUrl)
  const studentname = getCookie('studentname');
  const studentid = getCookie('studentid')

  const messagesent = await SendMessage(studentid, 
                                                                studentname,
                                                                counsellorData.id, 
                                                                counsellorData.fullname, 
                                                                "counsellor", 
                                                                message)

console.log("Is message sent? ", messagesent)
}else{console.log("No message written")}
}

async function studentSendMsg() {
  let message = document.querySelector('#textinputbox').value

  if(message != false){
  let studUrl = "https://riasecnode.onrender.com/api/getStudentData/" + loginCookie
  const studentData = await fetchData(studUrl)
  const counsellorname = getCookie('counsellorname');
  const counsellorid = getCookie('counsellorid')

  const messagesent = await SendMessage( studentData.id, 
                                                                studentData.fullname,
                                                                counsellorid, 
                                                                counsellorname,
                                                                "student", 
                                                                message)

console.log("Is message sent? ", messagesent)
}else{console.log("No message written")}
}

async function SendMessage(studentid, studentname, counsellorid, counsellorname, chattertype, message) {
  const messageurl = "https://riasecnode.onrender.com/api/counsSendmsg";
  const messagevar = {
    studentid: studentid,
    studentname: studentname,
    counsellorid: counsellorid,
    counsellorname: counsellorname,
    chatData: [{
      chattertype: chattertype,
      message: message,
      time:Date.now()
    }]
  }
  console.log("messagevar is  ", messagevar)
  let messagesent = await postData(messageurl, messagevar)
  return messagesent
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

async function postData(url, data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    // console.log(result);
    return result
  }

  async function patchData(url, data) {
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.text();
    // console.log(result);
    return result
  }
  
 // normal fetch request
 async function fetchData(url) {
    const response = await fetch(url);
    const result = await response.json();
    // console.log(result);
    return result
  }

  // CLEARING COOKIE
  function clearCookie() {
    // Set the cookie with the same name, a blank value, and an expiration date in the past
    document.cookie = loginCookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "index.html"
  }