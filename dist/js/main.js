import Quiz from "./quiz.js";

const gameButton = document.querySelector(".game");
const foodButton = document.querySelector(".food");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const quizCard = document.querySelector(".quizCard");
const submitButton = document.querySelector(".submit");
const backToHome = document.querySelector(".backToHome");


let currentQuiz = 0;
let totalScore = 0;
let quizTitle = "games";
let quiz;

const generateNewQuiz = (quizTitle) => {
  quiz = new Quiz(quizTitle, currentQuiz, totalScore);
};

nextButton.addEventListener("click", () => {
  quiz.next()
});

submitButton.addEventListener("click", () => {
  quiz.submit()
})

prevButton.addEventListener("click", () => {
  quiz.prev();
});

const displayQuizCard = () => {
  quizCard.style.display = "flex"
  quizCard.classList.toggle('scale-0')
  quizCard.classList.toggle('scale-100')
}

gameButton.addEventListener("click", () => {
  quizTitle = "games";
  currentQuiz = 0;
  totalScore = 0;
  generateNewQuiz(quizTitle);
  displayQuizCard()
});

foodButton.addEventListener("click", () => {
  quizTitle = "foods";
  currentQuiz = 0;
  totalScore = 0;
  generateNewQuiz(quizTitle);
  displayQuizCard()
});

backToHome.addEventListener("click", () => {
  location.reload();
})
