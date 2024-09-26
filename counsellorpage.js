// async function hello(){
//     const username = "Rene"
//     const password = "superman"

//     try {
//         const response = await fetch('http://localhost:3002/api/loginstudent', {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.text();
//         console.log('Success:', data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// async function hello(){

//     try {
//         const response = await fetch('https://riasecnode.onrender.com/api/getOne/3')

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log('Success:', data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// hello()


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






async function main(){

    // try {
    //     const response = await fetch('https://riasecnode.onrender.com/api/getOne/3')
        

    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }

    //     const data = await response.json();
    //     console.log('Success:', data);
    // } catch (error) {
    //     console.error('Error:', error);
    // }https://riasecnode.onrender.com

    let pupilsection= document.querySelector('section.gridSection');
    let url = "http://localhost:3003/api/getAllCounsellors"
    const counsellors = await fetchData(url) 
    console.log("the counsellor details are: ", counsellors)

    let counurl = "http://localhost:3003/api/getCounData/" + loginCookie;
    let counsData = await fetchData(counurl)
    let counsname = await counsData.fullname
    let counsid = await counsData.id

    console.log("counsData ", counsData)

    let counpupilurl = "http://localhost:3003/api/getCounStudData/" + await counsid;
    let counpupilsData = await fetchData(counpupilurl)

    console.log("counspupilsData ", counpupilsData)

    for(let i=0;i<counpupilsData.length;i++){
        pupilsection.innerHTML += `<section class="metrics metric${i}">
                <div class="graphMetric">
                    <div class="loadCircle">
                        <div class="spaceCircle">
                            <div class="infoCircle">
                                <h2>${counpupilsData[i].studentid}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="textMetric"> 
                    <h3>${counpupilsData[i].studentname}</h3> 
                    <p>ID: ${counpupilsData[i].studentid}</p>
                    <button type="button" onclick="setCookie('studentname','${counpupilsData[i].studentname}',1);setCookie('studentid',${counpupilsData[i].studentid},1);moveChat()" class="studentpickbutton"> Select Student</button>
                </div>
            </section>`
        console.log("added")
    }
}

main()
setCookie('user','counsellor',1)











// Helper Functions
// -------------------------------------------------------------------------------------------------------------------

// SETTING COOKIE
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

  // normal fetch request
async function fetchData(url) {
    const response = await fetch(url);
    const result = await response.json();
    // console.log(result);
    return result
  }

  function moveChat(){
    window.location.href = "./infochatpage.html";
    // console.log("move chat")
  }

  function filtername(){
    let typedName = document.querySelector('#searchBar').value.toLowerCase();
    // let studentNames = document.querySelectorAll('.textMetric h3')[0].outerText;
    let studentNames = document.querySelectorAll('.textMetric h3');
    console.log(studentNames, typedName)

    // studentNames.forEach(element => {
    //   if(typedName)
    // });
    for (let i = 0; i < studentNames.length; i++) {
      // const element = array[i];
      if(!( studentNames[i].outerText.toLowerCase().includes(typedName) )){
        console.log(studentNames[i].outerText)

        document.querySelector(`.metric${i}`).style.display = "none";
      }
      else{
        document.querySelector(`.metric${i}`).style.display = "flex";
      }
      
    }

    
  }

