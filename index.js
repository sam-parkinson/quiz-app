'use strict';

function resetScore() {
  score = 0;
  currentQuestion = 0;
  $('.js-score').removeClass('hidden');
  $('.js-start').addClass('hidden');
}

function startButtonClicked() {
  $('.js-start-button').on('click', event => {
    event.preventDefault();
    resetScore();
    getNextQuestion();
  });
}

function questionAnswered() {
  // this function is currently running currentQuestion number of times
  // figure out why, stop it
  $('.answer').on('click', event => {
    const ans1 = $(event.currentTarget).find('span').text();
    const correct1 = STORE[currentQuestion].correctAnswer;
    event.preventDefault();
    if (ans1 === correct1) {
      answerCorrect();
      console.log('answer correct ran');
    } else {
      answerIncorrect();
    }
    console.log('questionAnswered ran');
  });
}

function answerCorrect() {
  score++;
  console.log(score);
  $('.js-correct').text(score);
  $('.js-quiz').addClass('hidden');
  $('.js-result').removeClass('hidden');
  $('.js-result-correct').removeClass('hidden');
  $('.js-result-incorrect').addClass('hidden');

}

function answerIncorrect() {
  $('.js-incorrect').text((currentQuestion + 1) - score);
  $('.js-quiz').addClass('hidden');
  $('.js-result').removeClass('hidden');
  $('.js-result-correct').addClass('hidden');
  $('.js-result-incorrect').removeClass('hidden');
  $('.js-result-incorrect span').text(STORE[currentQuestion].correctAnswer)
}

function nextButtonClicked() {
  $('.next').on('click', event => {
    event.preventDefault();
    currentQuestion++;
    // ('.js-question-number span').text(currentQuestion + 1);
    getNextQuestion();
    $('.js-result').addClass('hidden');
  });
}

function getNextAnswers() {
  for (let i = 0; i < 4; i++){
    $(`.js-answer-${i}`).text(STORE[currentQuestion].answers[i]);
  }
  questionAnswered();
  // questionAnswered should only run once
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
  nextButtonClicked();
}

$(runQuizApp);