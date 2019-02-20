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

function endQuiz() {
  $('.js-final span').text(score);
  if (score === 10) {
    $('.js-final span').append('. Congratulations!')
  } else if (score > 6) {
    $('.js-final span').append('. Good job!')
  } else {
    $('.js-final span').append('. Want to try again?')
  }
  $('.js-final').removeClass('hidden');
  $('.js-score').addClass('hidden');
  $('.js-incorrect, .js-correct').text('0');
}

function nextButtonClicked() {
  $('.next').on('click', event => {
    event.preventDefault();
    currentQuestion++;
    if (currentQuestion === 10) {
      endQuiz();
    } else {
      $('.js-question-number span').text(currentQuestion + 1);
      getNextQuestion();
    }
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

function restartButtonClicked() {
  $('.js-restart-button').on('click', event => {
    event.preventDefault();
    $('.js-final span').empty();
    $('.js-final').addClass('hidden');
    $('.js-question-number span').text('1');
  })

}

function runQuizApp() {
  startButtonClicked();
  nextButtonClicked();
  questionAnswered();
  restartButtonClicked();
}

$(runQuizApp);

// todo: make it impossible to restart with keyboard and hidden div