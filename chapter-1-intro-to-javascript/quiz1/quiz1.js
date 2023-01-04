function calculate() {
  // collecting correct answers forEach(questions)
  let q1 = document.getElementById("q1-a");
  let q2 = document.getElementById("q2-d");
  let q3 = document.getElementById("q3-d");
  let q4 = document.getElementById("q4-b");
  let q5 = document.getElementById("q5-b");
  let q6 = document.getElementById("q6-b");
  let q7 = document.getElementById("q7-c");
  let q8 = document.getElementById("q8-a");
  let q9 = document.getElementById("q9-b");
  let q10 = document.getElementById("q10-c");

  score = 0;

  function check(answer) {
    if (answer.checked) {
      score++; // Update counter
      console.log(score);
    }
  }

  check(q1); // check question 1
  check(q2); // check question 2
  check(q3); // check question 3
  check(q4); // check question 4
  check(q5); // check question 5
  check(q6); // check question 6
  check(q7); // check question 7
  check(q8); // check question 8
  check(q9); // check question 9
  check(q10); //check question 10

  alert("Your score: " + score); // Output score summary (testing only)
}
