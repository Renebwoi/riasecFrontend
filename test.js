// let scorearray ={
//     "amen":9,
//     "boy":0
// }

// console.log(scorearray["amen"])

// var str = "RIA";
// var match = "IAC";
// var bool = true; 
// for (var prop of str) {
//   if (str.length !== match.length || match.indexOf(prop) === -1) {
//     bool = false; break;
//   }
// };
// console.log(bool); // false

// const data = [
//   {
   
//     id: 1,
//     username: 'Kala',
//     email: 'kala@renz.com',
//     specialization: 'Medicine',
//     yearsOfExperience: 5,
//     usercookie: 'None',
//     __v: 0,
//     password: 'mospat',
//     phoneno: 9122334455
//   },
//   {
    
//     id: 2,
//     username: 'Mumbo',
//     email: 'mumbo@gmail.com',
//     specialization: 'Sports',
//     yearsOfExperience: 6,
//     usercookie: '2596psvgqk',
//     __v: 0,
//     password: 'mumbazi',
//     phoneno: 9134235678
//   },
//   {
    
//     id: 3,
//     username: 'Mumba',
//     password: 'Helloguys',
//     email: 'mumba@gmail.com',
//     specialization: 'Dietetics',
//     yearsOfExperience: 9,
//     usercookie: 'qj1nnidzhz',
//     __v: 0,
//     phoneno: 8036782459
//   }
// ];

// data.forEach(obj => {
  
//   delete obj.password;
//   delete obj.usercookie;
//   delete obj.__v;
// });

// console.log(data);

// https://riasecnode.onrender.com
// http://localhost:3003

// let url = "https://riasecnode.onrender.com/api/getAllCounsellors"

// // normal fetch request
// async function fetchData(url) {
//   const response = await fetch(url);
//   const result = await response.json();
//   // console.log(result);
//   return result
// }

// async function main() {
// const counsellors = await fetchData(url) 
//  console.log("the counsellor details are: ", counsellors)
// }
// main()

// console.log(Date.now())

// function ack(m, n)
// {
// if (m == 0){
// return n + 1;
// }
// else if((m > 0) && (n == 0)){
// return ack(m - 1, 1);
// }
// else if((m > 0) && (n > 0)){
// return ack(m - 1, ack(m, n - 1));
// } 
// }

// console.log(ack(4,0))


  