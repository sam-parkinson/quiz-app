'use strict';

function resetScore() {
  score = 0;
  currentQuestion = 0;
  $('.js-results').removeClass('hidden');
  $('.js-start').addClass('hidden');
  console.log('showScore ran');
}

function startButtonClicked() {
  $('.js-start-button').on('click', event =>{
    event.preventDefault();
    console.log('startButtonClicked ran')
    resetScore();
    getNextQuestion();
  });
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

function getNextAnswers() {
  $(`.js-answer-0`).text(STORE[currentQuestion][answers[0]]);
  $(`.js-answer-1`).text(STORE[currentQuestion][answers[1]]);
  $(`.js-answer-2`).text(STORE[currentQuestion][answers[2]]);
  $(`.js-answer-3`).text(STORE[currentQuestion][answers[3]]);
  console.log('getNextAnswers ran');
}

function getNextQuestion() {
  $('.js-quiz').removeClass('hidden');
  $('.js-question').text(STORE[currentQuestion].qtext);
  // add function to add answer text to buttons
  console.log('getNextQuestion ran')
  // gets the next question, displays it
  // shows answers
  // adds hidden classes indicating correctness and incorrectness
}

function restartQuiz() {
  // reset the score
  // go back to question 1
}

function runQuizApp() {
  startButtonClicked();
}

$(runQuizApp);