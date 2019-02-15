'use strict';

function startButtonClicked() {
  let score = 0;
  // let questionCurrent = 0;
  $('.js-start').on('click', event =>{
    event.preventDefault();
    console.log('startButtonClicked ran')
    getNextQuestion();
  });
  return score
  // return score, so other functions can manipulate it
}

function questionAnswered() {
  // check if the answer is correct or not
  // bring up the next question
}

function answerCorrect() {
  // increment score
  // display score
  // inform user that answer is correct
  // return score
}

function answerIncorrect() {
  // inform user that answer is incorrect
  // inform user of correct answer
}

function getNextQuestion() {
  console.log('getNextQuestion ran')
  // gets the next question, displays it
  // shows answers
  // adds hidden classes indicating correctness and incorrectness
}

function restartQuiz() {
  // do I need a separate function for this? maybe reuse start function?
}

// add the jquery function call thing at the end of this