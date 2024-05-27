const mainContainer = document.querySelector(".mainContainer");
const qTitle = document.querySelector(".qTitle");
const gameButton = document.querySelector(".game");
const cityButton = document.querySelector(".city");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const quizCard = document.querySelector(".quizCard");
const question = document.querySelector(".question");
const quizOption = document.querySelector(".quizOption");
const correctAlert = document.querySelector(".correct");
const incorrectAlert = document.querySelector(".incorrect");

const cities = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
    done: false,
  },
  {
    question: "What is the capital of Italy?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Rome",
    done: false,
  },
  {
    question: "What is the capital of Germany?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Berlin",
    done: false,
  },
  {
    question: "What is the capital of Spain?",
    options: ["Madrid", "Lisbon", "Paris", "Rome"],
    answer: "Madrid",
    done: false,
  },
  {
    question: "What is the capital of Portugal?",
    options: ["Madrid", "Lisbon", "Paris", "Rome"],
    answer: "Lisbon",
    done: false,
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
    answer: "Tokyo",
    done: false,
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
    done: false,
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    answer: "Canberra",
    done: false,
  },
  {
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    answer: "Brasília",
    done: false,
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Bangalore", "Chennai"],
    answer: "New Delhi",
    done: false,
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
  }else{
    incorrectAlert.style.top = "10px"
    incorrectAlert.style.transform = "scale(1)"
    setTimeout(() => {
      incorrectAlert.style.top = "-20px"
      incorrectAlert.style.transform = "scale(0)"
    }, 2000);
  }
}


let currentQuiz = 0;
let quizTitle = "games";

class Quiz {
  constructor(quizTitle, currentQuiz) {
    this.quizTitle = quizTitle;
    this.currentQuiz = currentQuiz;
    this.showQuiz();
  }

  checkAnswer(selectedOption) {
    console.log(`Option selected: ${selectedOption}`);
    if(quizTitle === "games"){
      if(selectedOption == games[this.currentQuiz].answer){
        console.log("Correct")
        showAlert("correct")
      }else{
        console.log("Incorrect")
        showAlert("incorrect")
      }
      games[this.currentQuiz].done = true;
    }else{
      selectedOption == cities[this.currentQuiz].answer ? console.log("right") : console.log("wrong")
    }
    cities[this.currentQuiz].done = true;
    this.showQuiz()
  }


  showQuiz() {
    const quizData = this.quizTitle === "games" ? games[this.currentQuiz] : cities[this.currentQuiz]
    question.textContent = quizData.question
    this.currentQuiz == 0 ? prevButton.classList.add("cursor-not-allowed") : prevButton.classList.remove("cursor-not-allowed")

    //disabled button
    if(this.quizTitle === "games"){
      this.currentQuiz == games.length - 1 ? nextButton.classList.add("cursor-not-allowed") : nextButton.classList.remove("cursor-not-allowed")
    }else{
      this.currentQuiz == cities.length - 1 ? nextButton.classList.add("cursor-not-allowed") : nextButton.classList.remove("cursor-not-allowed")
    }

    quizOption.innerHTML = `
        ${
            quizData.options.map(option => {
                return `<button class="quiz-option w-[35%] h-[60px] text-center bg-waikawa-gray-200 duration-300 hover:border-transparent hover:bg-waikawa-gray-600 hover:text-waikawa-gray-50 border border-waikawa-gray-500 rounded-sm p-3 px-5 font-semibold text-waikawa-gray-900">${option}</button>`
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
      }
    });
  }


  next() {
    if(this.currentQuiz < (this.quizTitle === "games" ? games.length : cities.length) - 1){
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

prevButton.addEventListener("click", () => {
  quiz.prev();
});

gameButton.addEventListener("click", () => {
  quizTitle = "games";
  currentQuiz = 0;
  generateNewQuiz(quizTitle);
  quizCard.classList.toggle('scale-0')
  quizCard.classList.toggle('scale-100')
});

cityButton.addEventListener("click", () => {
  quizTitle = "cities";
  currentQuiz = 0;
  generateNewQuiz(quizTitle);
  quizCard.classList.toggle('scale-0')
  quizCard.classList.toggle('scale-100')
  console.log("city");
});
