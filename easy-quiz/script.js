const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const quizzes = document.getElementById("quizzes");
const score = document.createElement("div");

let count = 0;

function updateScore() {
  score.textContent = `Your scores = ${count}`;
}

updateScore();
quizzes.appendChild(score);

function checkAnswer(answer) {
  if (answer === "a") {
    result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
    result.style.color = "green";
    count++;
  } else {
    result.textContent = "Incorrect! Try again.";
    result.style.color = "red";
    if (count > 0) {
      count--;
    }
  }
  updateScore();
}

function checkAnswer2(answer) {
  if (answer === "c") {
    result2.textContent = "Great Job! I like white colour";
    result2.style.color = "green";
    count++;
  } else {
    result.textContent = "Incorrect! Try again.";
    result.style.color = "red";
    if (count > 0) {
      count--;
    }
  }
  updateScore();
}
