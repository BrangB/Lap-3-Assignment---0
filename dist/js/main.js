
const mainContainer = document.querySelector(".mainContainer");
const qTitle = document.querySelector(".qTitle");
const gameButton = document.querySelector(".game");
const foodButton = document.querySelector(".food");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const quizCard = document.querySelector(".quizCard");
const question = document.querySelector(".question");
const quizOption = document.querySelector(".quizOption");
const correctAlert = document.querySelector(".correct");
const incorrectAlert = document.querySelector(".incorrect");
const warningAlert = document.querySelector(".warning");
const warningMessage = document.querySelector(".warningMessage");
const quizNumber = document.querySelector('.quizNumber');
const doneImage = document.querySelector(".doneImage");
const submitButton = document.querySelector(".submit");
const backToHome = document.querySelector(".backToHome");
const scoreCard = document.querySelector(".score");
const Qamount = document.querySelector(".amount");
const correctQ = document.querySelector(".correctQ");
const incorrectQ = document.querySelector(".incorrectQ");
const percentage = document.querySelector(".percentage");

const foods = [
  {
      id: 1,
      question: "What vegetable do rabbits love to eat?",
      options: ["Carrot", "Tomato", "Potato", "Broccoli"],
      answer: "Carrot",
      done: false
  },
  {
      id: 2,
      question: "Which drink is known for helping kids grow strong bones?",
      options: ["Coffee", "Soda", "Milk", "Lemonade"],
      answer: "Milk",
      done: false
  },
  {
      id: 3,
      question: "What type of food is a cucumber?",
      options: ["Meat", "Fruit", "Vegetable", "Grain"],
      answer: "Vegetable",
      done: false
  },
  {
      id: 4,
      question: "Sushi is a cuisine that originated in which country?",
      options: ["China", "Korea", "Thailand", "Japan"],
      answer: "Japan",
      done: false
  },
  {
      id: 5,
      question: "Which of these fruits is known for having its seeds on the outside?",
      options: ["Raspberry", "Strawberry", "Blueberry", "Blackberry"],
      answer: "Strawberry",
      done: false
  },
  {
      id: 6,
      question: "What sweet treat is made from cocoa beans?",
      options: ["Cheese", "Popcorn", "Chocolate", "Bread"],
      answer: "Chocolate",
      done: false
  },
  {
      id: 7,
      question: "Which of these is a dairy product?",
      options: ["Apple", "Chicken", "Bread", "Cheese"],
      answer: "Cheese",
      done: false
  },
  {
      id: 8,
      question: "What do bees make that is sweet and sticky?",
      options: ["Butter", "Jam", "Honey", "Milk"],
      answer: "Honey",
      done: false
  },
  {
      id: 9,
      question: "Which food is often eaten at movie theaters?",
      options: ["Popcorn", "Toast", "Rice", "Salad"],
      answer: "Popcorn",
      done: false
  },
  {
      id: 10,
      question: "What fruit is known for being green on the outside and red on the inside with black seeds?",
      options: ["Banana", "Orange", "Watermelon", "Apple"],
      answer: "Watermelon",
      done: false
  }
];

const games = [
  {
    id: 1,
    question: "What is the highest-grossing video game of all time?",
    options: ["Minecraft", "GTA V", "Tetris", "Fortnite"],
    answer: "Minecraft",
    done: false,
  },
  {
    id: 2,
    question: "In which year was the first Call of Duty game released?",
    options: ["2000", "2003", "2005", "2007"],
    answer: "2003",
    done: false,
  },
  {
    id: 3,
    question: "What is the name of the main protagonist in The Legend of Zelda series?",
    options: ["Zelda", "Link", "Ganon", "Epona"],
    answer: "Link",
    done: false,
  },
  {
    id: 4,
    question: "Which game features a plumber trying to save a princess from a turtle-like villain?",
    options: [
      "Sonic the Hedgehog",
      "Mega Man",
      "Super Mario Bros",
      "Castlevania",
    ],
    answer: "Super Mario Bros",
    done: false,
  },
  {
    id: 5,
    question: "Which game is known for the phrase 'The cake is a lie'?",
    options: ["Portal", "Half-Life", "Bioshock", "Fallout"],
    answer: "Portal",
    done: false,
  },
  {
    id: 6,
    question: "In which game do players compete in a battle royale on an island named Erangel?",
    options: ["Apex Legends", "Fortnite", "PUBG", "Call of Duty: Warzone"],
    answer: "PUBG",
    done: false,
  },
  {
    id: 7,
    question: "Which game involves characters named Ryu, Ken, and Chun-Li?",
    options: ["Tekken", "Street Fighter", "Mortal Kombat", "King of Fighters"],
    answer: "Street Fighter",
    done: false,
  },
  {
    id: 8,
    question: "In which game series do you fight against a villain named Dr. Robotnik?",
    options: ["Mega Man", "Sonic the Hedgehog", "Metroid", "Castlevania"],
    answer: "Sonic the Hedgehog",
    done: false,
  },
  {
    id: 9,
    question: "Which game series features a post-apocalyptic world set in the 22nd century?",
    options: ["The Elder Scrolls", "Fallout", "Mass Effect", "Borderlands"],
    answer: "Fallout",
    done: false,
  },
  {
    id: 10,
    question: "What is the main currency used in the game The Legend of Zelda: Breath of the Wild?",
    options: ["Gil", "Rupees", "Gold", "Coins"],
    answer: "Rupees",
    done: false,
  },
];



const showAlert = (alertType) => {
  if(alertType == "correct"){
    correctAlert.style.top = "10px"
    correctAlert.style.transform = "scale(1)"
    setTimeout(() => {
      correctAlert.style.top = "-20px"
      correctAlert.style.transform = "scale(0)"
    }, 2000);
  }else if(alertType == "incorrect"){
    incorrectAlert.style.top = "10px"
    incorrectAlert.style.transform = "scale(1)"
    setTimeout(() => {
      incorrectAlert.style.top = "-20px"
      incorrectAlert.style.transform = "scale(0)"
    }, 2000);
  }else{
    warningAlert.style.top = "10px"
    warningAlert.style.transform = "scale(1)"
    setTimeout(() => {
      warningAlert.style.top = "-20px"
      warningAlert.style.transform = "scale(0)"
    }, 2000);
  }
}


let currentQuiz = 0;
let totalScore = 0;
let quizTitle = "games";

class Quiz {
  constructor(quizTitle, currentQuiz) {
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
    this.currentQuiz == 0 ? prevButton.classList.add("cursor-not-allowed") : prevButton.classList.remove("cursor-not-allowed")

    quizNumber.textContent = `${this.currentQuiz + 1}/${this.quizArray.length}`

    //disabled button
    this.currentQuiz == this.quizArray.length - 1 ? nextButton.classList.add("cursor-not-allowed") : nextButton.classList.remove("cursor-not-allowed")

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

let quiz;

const generateNewQuiz = (quizTitle) => {
  quiz = new Quiz(quizTitle, currentQuiz);
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

gameButton.addEventListener("click", () => {
  quizTitle = "games";
  currentQuiz = 0;
  totalScore = 0;
  generateNewQuiz(quizTitle);
  quizCard.style.display = "flex"
  quizCard.classList.toggle('scale-0')
  quizCard.classList.toggle('scale-100')
});

foodButton.addEventListener("click", () => {
  quizTitle = "foods";
  currentQuiz = 0;
  totalScore = 0;
  generateNewQuiz(quizTitle);
  quizCard.style.display = "flex"
  quizCard.classList.toggle('scale-0')
  quizCard.classList.toggle('scale-100')
});

backToHome.addEventListener("click", () => {
  location.reload();
})
