// let scorearray ={
//     "amen":9,
//     "boy":0
// }

// console.log(scorearray["amen"])

var str = "RIA";
var match = "IAC";
var bool = true; 
for (var prop of str) {
  if (str.length !== match.length || match.indexOf(prop) === -1) {
    bool = false; break;
  }
};
console.log(bool); // false