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

function showResult() {
  $('.js-quiz').addClass('hidden');
  $('.js-result').removeClass('hidden');
}

function answerCorrect() {
  score++;
  $('.js-correct').text(score);
  showResult();
  $('.js-result-correct').removeClass('hidden');
  $('.js-result-incorrect').addClass('hidden');
}

function answerIncorrect() {
  $('.js-incorrect').text((currentQuestion + 1) - score);
  showResult();
  $('.js-result-correct').addClass('hidden');
  $('.js-result-incorrect').removeClass('hidden');
  $('.js-result-incorrect span').text(STORE[currentQuestion].correctAnswer);
}

function nextButtonClicked() {
  $('.next').on('click', event => {
    event.preventDefault();
    currentQuestion++;
    // if / else statement goes here
    // if currentQuestion = 10, next button becomes restart button
    // else below happens
    $('.js-question-number span').text(currentQuestion + 1);
    getNextQuestion();
    $('.js-result').addClass('hidden');
  });
}

function getNextAnswers() {
  for (let i = 0; i < 4; i++) {
    $(`.js-answer-${i}`).text(STORE[currentQuestion].answers[i]);
  }
}

function getNextQuestion() {
  $('.js-quiz').removeClass('hidden');
  $('.js-question').text(STORE[currentQuestion].qtext);
  getNextAnswers();
}

function restartQuiz() {
  // reset the score
  // go back to question 1
}

function runQuizApp() {
  startButtonClicked();
  nextButtonClicked();
  questionAnswered();
}

$(runQuizApp);