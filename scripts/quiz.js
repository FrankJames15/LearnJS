let correctAnswers = 0;
const quiz = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<scripting>", "<script>"],
    correctAnswer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "The <body> section",
      "The <head> section",
      "Both the <head> section and the <body> section are correct ",
    ],
    correctAnswer:
      "Both the <head> section and the <body> section are correct ",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: [
      '<script href="xxx.js">',
      '<script src="xxx.js">',
      '<script name="xxx.js">',
    ],
    correctAnswer: '<script src="xxx.js">',
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    choices: ["True", "False"],
    correctAnswer: "False",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: [
      'msgBox("Hello World");',
      'alertBox("Hello World");',
      'alert("Hello World");',
    ],
    correctAnswer: 'alert("Hello World");',
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "function = myFunction() ",
      "function myFunction()  ",
      "function:myFunction()",
    ],
    correctAnswer: "function myFunction()  ",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    choices: [
      "call function myFunction()  ",
      "myFunction()  ",
      "call myFunction()",
    ],
    correctAnswer: "myFunction()",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    choices: ["if (i == 5) ", "if i = 5 then", "if i = 5"],
    correctAnswer: "if (i == 5) ",
  },
  {
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    choices: ["if (i <> 5)", "if (i != 5) ", "if i <> 5"],
    correctAnswer: "if (i != 5) ",
  },
  {
    question: "How does a WHILE loop start?",
    choices: ["while (i <= 10; i++)", "while i = 1 to 10", "while (i <= 10) "],
    correctAnswer: "while (i <= 10) ",
  },
  {
    question: "How does a FOR loop start?",
    choices: [
      "for (i <= 5; i++) ",
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5)",
    ],
    correctAnswer: "for (i = 0; i <= 5; i++)",
  },
  {
    question: "How can you add a comment in a JavaScript?",
    choices: [
      "//This is a comment  ",
      "'This is a comment",
      "<!--This is a comment-->",
    ],
    correctAnswer: "//This is a comment  ",
  },

  {
    question: "What is the correct way to write a JavaScript array?",
    choices: [
      'var colors = "red", "green", "blue"',
      'var colors = (1:"red", 2:"green", 3:"blue")  ',
      'var colors = ["red", "green", "blue"]  ',
    ],
    correctAnswer: 'var colors = ["red", "green", "blue"]',
  },
  {
    question: "JavaScript is the same as Java.",
    choices: ["True", "False"],
    correctAnswer: "False",
  },
  {
    question: "How do you declare a JavaScript variable?",
    choices: ["var carName; ", "v carName;", "variable carName;"],
    correctAnswer: "var carName;  ",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    choices: [" *", " =", " x"],
    correctAnswer: "=",
  },
  {
    question: "What will the following code return: Boolean(10 > 9)",
    choices: ["true", "NaN", "false"],
    correctAnswer: "true  ",
  },
  
];

// Displaying Questions
const form = document.createElement("form");
form.setAttribute("class", "container");
document.body.appendChild(form);

quiz.forEach((question, i) => {
  let questionBlock = document.createElement("div");
  questionBlock.setAttribute("class", "card m-3");
  form.appendChild(questionBlock);

  // Question
  let questionTitle = document.createElement("h5");
  questionTitle.innerText = question.question;
  questionTitle.setAttribute("class", "card-header");
  questionBlock.appendChild(questionTitle);

  let questionBody = document.createElement("div");
  questionBody.setAttribute("class", "card-body");
  questionBlock.appendChild(questionBody);

  // Options
  question.choices.forEach((choice, index2) => {
    let options = document.createElement("input");
    options.setAttribute("type", "radio");
    options.setAttribute("name", `question-${i}`);
    options.setAttribute("value", choice);
    options.setAttribute("id", `question-${i}-choice-${index2}`);
    questionBody.appendChild(options);
    let label = document.createElement("label");
    label.innerText = choice;
    label.setAttribute("class", "form-check-label");
    label.setAttribute("for", `question-${i}-choice-${index2}`);
    questionBody.appendChild(label);
    questionBody.appendChild(document.createElement("br"));
  });
});

// Checking answers
function checkAnswers() {
  quiz.forEach((item, index) => {
    let selectedOption = document.querySelector(
      `input[name='question-${index}']:checked`
    );
    // Couning correct answers
    if (selectedOption) {
      let selectedChoice = selectedOption.value;
      if (selectedChoice === item.correctAnswer) {
        correctAnswers++;
      }
    }
  });
  alert("Your score is: " + correctAnswers + " out of " + quiz.length);
}
let submitButton = document.createElement("div");
submitButton.setAttribute("claas", "position-relative");
document.body.appendChild(submitButton);

let btn = document.createElement("button");
btn.setAttribute(
  "class",
  "btn btn-primary m-2 position-absolute start-50 translate-middle"
);

btn.innerText = "Submit";
btn.onclick = checkAnswers;

submitButton.appendChild(btn);
