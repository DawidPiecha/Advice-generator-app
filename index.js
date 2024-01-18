import { fetchRandomAdvice } from "./adviceApi";

const updateAdvice = (id, advice) => {
  const adviceNumber = document.querySelector(".container__heading--number");
  const adviceText = document.querySelector(".container__advice");

  adviceNumber.textContent = id;
  adviceText.textContent = advice;
};

const button = document.querySelector(".lower-container__button");

const handleButtonClick = async () => {
  try {
    const adviceData = await fetchRandomAdvice();
    console.log(adviceData);

    const { id, advice } = adviceData.slip;

    updateAdvice(id, advice);
  } catch (error) {
    console.error("getting advice error:", error);
  }
};

button.addEventListener("click", handleButtonClick);
