import { showAlert } from "./alert.js";
import { games, foods } from "./question.js";
const question = document.querySelector(".question");
const quizOption = document.querySelector(".quizOption");
const warningMessage = document.querySelector(".warningMessage");
const quizNumber = document.querySelector('.quizNumber');
const doneImage = document.querySelector(".doneImage");
const scoreCard = document.querySelector(".score");
const Qamount = document.querySelector(".amount");
const correctQ = document.querySelector(".correctQ");
const incorrectQ = document.querySelector(".incorrectQ");
const percentage = document.querySelector(".percentage");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const quizCard = document.querySelector(".quizCard");


class Quiz {
    constructor(quizTitle, currentQuiz, totalScore) {
      this.quizTitle = quizTitle;
      this.currentQuiz = currentQuiz;
      this.totalScore = totalScore;
      this.quizArray = quizTitle === "games" ? games : foods
      this.showQuiz();
    }
  
    checkAnswer(selectedOption) {
      console.log(`Option selected: ${selectedOption}`);
      if(selectedOption == this.quizArray[this.currentQuiz].answer){
        showAlert("correct")
        this.totalScore += 1;
      }else{
        showAlert("incorrect")
      }
      this.quizArray[this.currentQuiz].done = true;
      this.showQuiz()
    }
  
    submit(){
      let unFinishedQ;
      unFinishedQ = this.quizArray.filter(question => {
        return question.done != true;
      })
  
      if(unFinishedQ.length > 0){
        let message = unFinishedQ.map(item => item.id).join(", ");
        warningMessage.textContent = `You haven't answered question no. ${message} !!`
        showAlert("warning")
      }else{
        console.log(this.totalScore)
        Qamount.textContent = this.quizArray.length
        correctQ.textContent = this.totalScore
        incorrectQ.textContent = this.quizArray.length - this.totalScore
        const percentageScore = (this.totalScore / this.quizArray.length) * 100;
        percentage.textContent = `${percentageScore.toFixed(1)}%`;
        console.log(percentageScore)
        scoreCard.style.display = "flex"
        quizCard.style.display = "none"
      }
    }
  
    showQuiz() {
      const quizData = this.quizArray[this.currentQuiz]
      question.textContent = quizData.question
  
      quizNumber.textContent = `${this.currentQuiz + 1}/${this.quizArray.length}`
  
      //disabled button
      this.currentQuiz == this.quizArray.length - 1 ? nextButton.classList.add("cursor-not-allowed") : nextButton.classList.remove("cursor-not-allowed")
      this.currentQuiz == 0 ? prevButton.classList.add("cursor-not-allowed") : prevButton.classList.remove("cursor-not-allowed")
  
      quizOption.innerHTML = `
          ${
              quizData.options.map(option => {
                  return `<button class="quiz-option w-[40%] min-h-[60px] text-center bg-waikawa-gray-200 duration-300 hover:border-transparent hover:bg-waikawa-gray-600 hover:text-waikawa-gray-50 border border-waikawa-gray-500 rounded-sm p-3 px-5 font-medium text-waikawa-gray-900">${option}</button>`
              }).join("")
          }
      `
      const quizButton = document.querySelectorAll('.quiz-option');
      quizButton.forEach(button => {
        button.addEventListener('click', (event) => {
          this.checkAnswer(event.target.textContent);
        });
  
        if (quizData.done) {
          button.classList.add("cursor-not-allowed");
          button.disabled = true;
          doneImage.style.display = "block"
        }else{
          doneImage.style.display = "none"
        }
      });
    }
  
  
    next() {
      if(this.currentQuiz < this.quizArray.length - 1){
          this.currentQuiz += 1;
          this.showQuiz();
          quizCard.classList.toggle("rotateCard")
          quizCard.classList.toggle("shakeCard")
      }
    }
  
    prev() {
      if (this.currentQuiz > 0) {
        this.currentQuiz -= 1;
        this.showQuiz();
        quizCard.classList.toggle("rotateCard")
        quizCard.classList.toggle("shakeCard")
      }
    }
  }

export default Quiz;