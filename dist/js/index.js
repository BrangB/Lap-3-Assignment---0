const mainContainer = document.querySelector(".mainContainer");
const gameButton = document.querySelector(".game");
const cityButton = document.querySelector(".city");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const cities = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Rome",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Berlin",
  },
  {
    question: "What is the capital of Spain?",
    options: ["Madrid", "Lisbon", "Paris", "Rome"],
    answer: "Madrid",
  },
  {
    question: "What is the capital of Portugal?",
    options: ["Madrid", "Lisbon", "Paris", "Rome"],
    answer: "Lisbon",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
    answer: "Tokyo",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    answer: "Canberra",
  },
  {
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    answer: "Brasília",
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Bangalore", "Chennai"],
    answer: "New Delhi",
  },
];

const games = [
    {
        question: "What is the highest-grossing video game of all time?",
        options: ["Minecraft", "GTA V", "Tetris", "Fortnite"],
        answer: "Minecraft",
      },
      {
        question: "In which year was the first Call of Duty game released?",
        options: ["2000", "2003", "2005", "2007"],
        answer: "2003",
      },
      {
        question:
          "What is the name of the main protagonist in The Legend of Zelda series?",
        options: ["Zelda", "Link", "Ganon", "Epona"],
        answer: "Link",
      },
      {
        question:
          "Which game features a plumber trying to save a princess from a turtle-like villain?",
        options: [
          "Sonic the Hedgehog",
          "Mega Man",
          "Super Mario Bros",
          "Castlevania",
        ],
        answer: "Super Mario Bros",
      },
      {
        question: "Which game is known for the phrase 'The cake is a lie'?",
        options: ["Portal", "Half-Life", "Bioshock", "Fallout"],
        answer: "Portal",
      },
      {
        question:
          "In which game do players compete in a battle royale on an island named Erangel?",
        options: ["Apex Legends", "Fortnite", "PUBG", "Call of Duty: Warzone"],
        answer: "PUBG",
      },
      {
        question: "Which game involves characters named Ryu, Ken, and Chun-Li?",
        options: ["Tekken", "Street Fighter", "Mortal Kombat", "King of Fighters"],
        answer: "Street Fighter",
      },
      {
        question:
          "In which game series do you fight against a villain named Dr. Robotnik?",
        options: ["Mega Man", "Sonic the Hedgehog", "Metroid", "Castlevania"],
        answer: "Sonic the Hedgehog",
      },
      {
        question:
          "Which game series features a post-apocalyptic world set in the 22nd century?",
        options: ["The Elder Scrolls", "Fallout", "Mass Effect", "Borderlands"],
        answer: "Fallout",
      },
      {
        question:
          "What is the main currency used in the game The Legend of Zelda: Breath of the Wild?",
        options: ["Gil", "Rupees", "Gold", "Coins"],
        answer: "Rupees",
      },
];

let currentQuiz = 0;
let quizTitle = "games";

class Quiz {
  constructor(quizTitle, currentQuiz) {
    this.quizTitle = quizTitle;
    this.currentQuiz = currentQuiz;
    this.renderQuiz();
  }

  renderQuiz() {
    const quizData =
      this.quizTitle === "games"
        ? games[this.currentQuiz]
        : cities[this.currentQuiz];
    console.log(quizData.question);
    // You can add more logic here to display the quiz question and options in the DOM
  }

  next() {
    if (
      this.currentQuiz <
      (this.quizTitle === "games" ? games.length : cities.length) - 1
    ) {
      this.currentQuiz += 1;
      this.renderQuiz();
    }
  }

  prev() {
    if (this.currentQuiz > 0) {
      this.currentQuiz -= 1;
      this.renderQuiz();
    }
  }
}

let quiz;

const generateNewQuiz = (quizTitle) => {
  quiz = new Quiz(quizTitle, currentQuiz);
};

const checkAnswer = () => {
  console.log("checked");
  quiz.next();
};

nextButton.addEventListener("click", () => {
  checkAnswer();
});

prevButton.addEventListener("click", () => {
  quiz.prev();
});

gameButton.addEventListener("click", () => {
  quizTitle = "games";
  currentQuiz = 0;
  generateNewQuiz(quizTitle);
});

cityButton.addEventListener("click", () => {
  quizTitle = "cities";
  currentQuiz = 0;
  generateNewQuiz(quizTitle);
  console.log("city");
});
