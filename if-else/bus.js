/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const childrenAge = 10;
const isStudent = true;
const seniorCitizensAge = 65;
const isSeniorCitizens = false;
const regularTicket = 800;

if (childrenAge < 10) {
  console.log("Free");
} else {
  console.log(regularTicket);
}

if (isStudent) {
  const cal1 = regularTicket * (50 / 100);
  const result = regularTicket - cal1;
  console.log(result);
} else {
  console.log(regularTicket);
}

if (!isSeniorCitizens && seniorCitizensAge > 60) {
  const cal2 = regularTicket * (15 / 100);
  const result = regularTicket - cal2;
  console.log(result);
} else {
  console.log(regularTicket);
}
