var question1 = ["Juliette Strawberry", "Berry Starlight", "Ichigo Hoshimiya", "Ttalgi Bo-ah a.k.a. Lime"];
var question2 = ["Iguanas", "Dragons", "Rampage", "Wings"];
var question3 = ["Tahiti", "Palau", "Solomon Islands", "Federated States of Micronesia"];
var question4 = ["Sonic the Hedgehog", "Alex Kidd", "Kazuma Kiryu", "Opa-Opa"];
var question5 = ["Ontario", "Quebec", "British Columbia", "Alberta"];
var question6 = ["Bring Me To Life - Evanescence", "How You Remind Me - Nickelback", "Bodies - Drowning Pool", "In The End - Linkin Park"];
var question7 = ["Liechtenstein", "Bhutan", "United States of America", "Comoros"];
var question8 = ["Whale", "Horse", "Bear", "Bison"];
var question9 = ["Texas", "Alaska", "California", "New York"];
var question10 = ["BEER!!!", "Adulting", "So. Heavy.", "Because Boobs"];
var question11 = ["The Game", "Make Your Move", "Athena", "Over The Hedge"];
var question12 = ["The universe explodes!", "Instant death!", "All hell breaks loose!", "0 divided by 0 returns 0."];

var startOfGame;
var endOfGame;
var answer;
var correct = 0;
var wrong = 0;
var correctAnswer = false;
var finalResult = 0
var numberOfQuestions = 12;

$(document).ready(function() {

  $("#start").on("click", function() {
    startOfGame = setTimeout(function() {
    }, 120000);
    // for (var i = 0; i < question1.length; i++) {
    //   if (answer = question1[2]) {
    //     correctAnswer = true;
    //     console.log(question1[2]);
    //   } else {
    //     correctAnswer = false;
    //     console.log("WRONG!");
    //   }
    // }
    // for (var i = 0; i < question2.length; i++) {
    //   if (answer = question2[0]) {
    //     correctAnswer = true;
    //     console.log(question2[0]);
    //   } else {
    //     correctAnswer = false;
    //     console.log("WRONG!");
    //   }
    // }
   
  });

  $("#finish").on("click", function() {
    clearTimeout(endOfGame);
  });

});