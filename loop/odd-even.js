/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let num = 60;

while (num <= 100) {
  if (num % 2 === 1) {
    console.log("This num is Odd Number", num);
  }
  num++;
}
//---------------------------------------------------------
let num2 = 78;

while (num2 <= 98) {
    if (num2 % 2 === 0) {
      console.log("This num is Even Number", num2);
    }
    num2++;
  }
