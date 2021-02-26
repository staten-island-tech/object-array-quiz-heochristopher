const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

const democrats = presidents.filter((presidents) => presidents.party === "D");

console.log(democrats);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

const one_term_republicans = presidents.filter(function (presidents) {
  return presidents.party === "R" && presidents.terms === 1;
});
console.log(one_term_republicans);

//3) return only the last three presidents

console.log(presidents.slice(-3));

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice

const two_term_democrats = presidents.filter(function (presidents) {
  return presidents.party === "D" && presidents.terms === 2;
});
console.log(two_term_democrats);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

const lbj = presidents[10];

if (lbj.terms === 2) {
  console.log("LBJ served two terms");
} else {
  console.log("LBJ was one and done");
}

//not very good code but could not find another way
