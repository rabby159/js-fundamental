/**
 * if(condition){
 *      implementation code if condition is a match.
 * } else {
 *      implementation code if condition is a not-match.
 * }
 */

const myHeadphonePrice = 1899;

if (myHeadphonePrice > 4000) {
  //   console.log("Ami Borolox Pro");
} else {
  //   console.log("Ami always gorib");
}
// -------------------------------------------------------------------------------
const mySalary = 25000;
const IsGraduation = false;
const age = 25;

// --------------------------AND-----------------------------------------------------
if (mySalary > 20000 && age > 21 && IsGraduation === true) {
  // console.log("bibho joggo");
} else {
  // console.log("tr dara hbe nah");
}

// ---------------------------OR----------------------------------------------------
if (mySalary > 30000 || age > 21 || IsGraduation === true) {
  console.log("bibho joggo");
} else {
  console.log("tr dara hbe nah");
}
