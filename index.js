const fetchRandomAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error-fetching-advice:", error);
    throw error;
  }
};

const adviceNumber = document.querySelector(".container__heading--number");
const adviceText = document.querySelector(".container__advice");
const button = document.querySelector(".lower-container__button");
const heading = document.querySelector(".container__heading");
const welcome = document.querySelector(".container__welcome");

const handleButtonClick = async () => {
  try {
    const adviceData = await fetchRandomAdvice();
    welcome.classList.add("hidden");
    heading.classList.remove("hidden");

    adviceNumber.textContent = adviceData.slip.id;
    adviceText.textContent = adviceData.slip.advice;
  } catch (error) {
    console.error("getting advice error:", error);
  }
};

button.addEventListener("click", handleButtonClick);
