class Quiz {
    constructor(quizTitle, currentQuiz) {
      this.quizTitle = quizTitle;
      this.currentQuiz = currentQuiz;
      this.totalScore = totalScore;
      this.showQuiz();
    }
  
    checkAnswer(selectedOption) {
      console.log(`Option selected: ${selectedOption}`);
      if(quizTitle === "games"){
        if(selectedOption == games[this.currentQuiz].answer){
          showAlert("correct")
          this.totalScore += 1;
        }else{
          showAlert("incorrect")
        }
        games[this.currentQuiz].done = true;
      }else{
        if(selectedOption == foods[this.currentQuiz].answer){
          showAlert("correct")
        }else{
          showAlert("incorrect")
        }
        foods[this.currentQuiz].done = true;
      }
      this.showQuiz()
    }
  
    submit(){
      let unFinishedQ;
      if(quizTitle === "games"){
        unFinishedQ = games.filter(question => {
          return question.done != true;
        })
  
      }else{
        unFinishedQ = foods.filter(question => {
          return question.done != true;
        })
      }
  
      if(unFinishedQ.length > 0){
        let message = unFinishedQ.map(item => item.id).join(", ");
        warningMessage.textContent = `You haven't answered question no. ${message} !!`
        showAlert("warning")
      }else{
        console.log(this.totalScore)
      }
    }
  
    showQuiz() {
      const quizData = this.quizTitle === "games" ? games[this.currentQuiz] : foods[this.currentQuiz]
      question.textContent = quizData.question
      this.currentQuiz == 0 ? prevButton.classList.add("cursor-not-allowed") : prevButton.classList.remove("cursor-not-allowed")
  
      this.quizTitle === "games" ? quizNumber.textContent = `${this.currentQuiz + 1}/${games.length}` : quizNumber.textContent = `${this.currentQuiz + 1}/${foods.length}`
  
      //disabled button
      if(this.quizTitle === "games"){
        this.currentQuiz == games.length - 1 ? nextButton.classList.add("cursor-not-allowed") : nextButton.classList.remove("cursor-not-allowed")
      }else{
        this.currentQuiz == foods.length - 1 ? nextButton.classList.add("cursor-not-allowed") : nextButton.classList.remove("cursor-not-allowed")
      }
  
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
      if(this.currentQuiz < (this.quizTitle === "games" ? games.length : foods.length) - 1){
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