console.log("security_questions.js loaded");

let securityQuestions = [
  { question: "How many inches in a foot?", expectedAnswer: 12},
  { question: "Who is your favorit author?", expectedAnswer: "Murakami"},
  { question: "What is the capitol of California?", expectedAnswer: "Sacramento"}
];

for (var count = 0; count < securityQuestions.length; count ++) {
  var message = window.prompt(securityQuestions[count].question);
    if (message != securityQuestions[count].expectedAnswer) {
      window.alert("Wrong Answer!");
      break;
    }
};
