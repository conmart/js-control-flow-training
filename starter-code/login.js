console.log("login.js loaded");

let userLogin = {userName: "Michael Scott", userPassword: "incorrect"};



for (let count = 0; count < 3; count ++) {
  let userInput = window.prompt(`Enter password for user ${userLogin.userName}.`);
    if (userInput == userLogin.userPassword) {
      window.alert("Correct password, welcome " + userLogin.userName);
      break;
    } else if (count < 2) {
      window.alert("Sorry, your password is incorrect, please try again");
    } else {
      window.alert("Sorry, your password is incorrect try again another time");
    }
}
