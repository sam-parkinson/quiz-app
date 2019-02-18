'use strict';

function resetScore() {
  score = 0;
  currentQuestion = 0;
  $('.js-results').removeClass('hidden');
  $('.js-start').addClass('hidden');
  console.log('showScore ran');
}

function startButtonClicked() {
  $('.js-start-button').on('click', event => {
    event.preventDefault();
    console.log('startButtonClicked ran')
    resetScore();
    getNextQuestion();
  });
}

function questionAnswered() {
  $('.answer').on('click', event => {
    const ans1 = $(event.currentTarget).find('span').text();
    const correct1 = STORE[currentQuestion].correctAnswer;
    event.preventDefault();
    if (ans1 === correct1) {
      answerCorrect();
    } else {
      answerIncorrect();
    }
  });
}

function answerCorrect() {
  // increment score
  // display score
  // inform user that answer is correct
  // return score
  console.log('correct answer!');
}

function answerIncorrect() {
  // inform user that answer is incorrect
  // inform user of correct answer
  console.log('incorrect answer.');
}

function getNextAnswers() {
  for (let i = 0; i < 4; i++){
    $(`.js-answer-${i}`).text(STORE[currentQuestion].answers[i]);
  }
  questionAnswered();
  console.log('getNextAnswers ran');
}

function getNextQuestion() {
  $('.js-quiz').removeClass('hidden');
  $('.js-question').text(STORE[currentQuestion].qtext);
  getNextAnswers();
  console.log('getNextQuestion ran');
}

function restartQuiz() {
  // reset the score
  // go back to question 1
}

function runQuizApp() {
  startButtonClicked();
}

$(runQuizApp);