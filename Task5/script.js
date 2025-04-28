// Quiz Questions
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "London", "Austin"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "J.K. Rowling", "Mark Twain"],
    answer: "William Shakespeare"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionsEl.innerHTML = "";

  currentQuiz.options.forEach(option => {
    const button = document.createElement('button');
    button.classList.add('option-btn');
    button.textContent = option;
    button.addEventListener('click', selectOption);
    optionsEl.appendChild(button);
  });

  nextBtn.disabled = true;
}

function selectOption(e) {
  const selectedAnswer = e.target.textContent;
  const options = optionsEl.querySelectorAll('.option-btn');

  options.forEach(option => option.classList.remove('selected'));
  e.target.classList.add('selected');
  if (selectedAnswer === quizData[currentQuestion].answer) {
    score++;
  }
  nextBtn.disabled = false;
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  const quizContainer = document.getElementById('quiz');
  quizContainer.innerHTML = `
    <h2>You scored ${score} out of ${quizData.length}</h2>
    <p>${getFeedback(score)}</p>`;
}

function getFeedback(score) {
  if (score === quizData.length) {
    return "Excellent!";
  } else if (score > 0) {
    return "Good try!";
  } else {
    return "Better luck next time!";
  }
}

// Start Quiz
loadQuestion();
nextBtn.disabled = true;