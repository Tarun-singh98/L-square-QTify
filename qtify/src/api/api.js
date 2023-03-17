// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new

import axios from "axios";

const BACKEND_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/top`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/new`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/songs`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


