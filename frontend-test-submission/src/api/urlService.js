import axios from "axios";

const BACKEND_URL = "http://localhost:3000/api";

export const generateShortUrl = async (originalUrl) => {
  const response = await axios.post(`${BACKEND_URL}/shorten`, { url: originalUrl });
  return response.data;
};
