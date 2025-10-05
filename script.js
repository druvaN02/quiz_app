const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: "1995"
  }
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

let currentQ = 0;
let score = 0;

function loadQuestion() {
  resetState();
  let q = quizData[currentQ];
  questionEl.textContent = q.question;

  q.options.forEach(opt => {
    const button = document.createElement("button");
    button.textContent = opt;
    button.classList.add("option");
    button.onclick = () => selectAnswer(button, q.answer);
    optionsEl.appendChild(button);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";
}

function selectAnswer(button, correct) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(b => b.disabled = true);

  if (button.textContent === correct) {
    button.style.background = "#28a745"; // green
    score++;
  } else {
    button.style.background = "#dc3545"; // red
  }
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQ++;
  if (currentQ < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  resetState();
  questionEl.textContent = `Quiz Completed! You scored ${score} / ${quizData.length}`;
}

loadQuestion();
