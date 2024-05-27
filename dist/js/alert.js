const correctAlert = document.querySelector(".correct");
const incorrectAlert = document.querySelector(".incorrect");
const warningAlert = document.querySelector(".warning");

export const showAlert = (alertType) => {
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