let questions = [
  {
    "que": "Which of the following is a markup language?",
    "a": "HTML",
    "b": "CSS",
    "c": "JavaScript",
    "d": "PHP",
    "correct": "a"
  },
  {
    "que": "Which of the following is a programming language?",
    "a": "HTML",
    "b": "CSS",
    "c": "JavaScript",
    "d": "JJ",
    "correct": "c"
  },
  {
    "que": "Which of the following is used for styling web pages?",
    "a": "HTML",
    "b": "CSS",
    "c": "JavaScript",
    "d": "PHP",
    "correct": "b"
  },
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
let displayQuestion = document.querySelector(".displayQuestion");
let displayOption = document.querySelectorAll(".option");

function loadQuestion() {
  if (total === index) {
    return endQuiz();
  }
  reset();
  let currentQuestion = questions[index];
  displayQuestion.innerText = currentQuestion.que;
  displayOption[0].nextElementSibling.innerText = currentQuestion.a;
  displayOption[1].nextElementSibling.innerText = currentQuestion.b;
  displayOption[2].nextElementSibling.innerText = currentQuestion.c;
  displayOption[3].nextElementSibling.innerText = currentQuestion.d;
}
function submit() {
  let currentQuestion = questions[index];
  let ans = getAns();
  console.log(ans);
  if (ans === currentQuestion.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
}

function getAns() {
  let ans;
  displayOption.forEach((input) => {
    if (input.checked) {
      ans = input.value;
    }
  }
  )
  return ans;
}


function reset() {
  displayOption.forEach((input) => {
    input.checked = false;
  })
}

function endQuiz() {
  document.querySelector(".container").innerHTML = `
  You got ${right} right and ${wrong} wrong.
  <button onclick="location.reload()" class="reload">Reload</button>
  `
}

loadQuestion()