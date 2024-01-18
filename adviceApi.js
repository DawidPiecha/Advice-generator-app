import axios from "axios";

const fetchRandomAdvice = async () => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchRandomAdvice };
