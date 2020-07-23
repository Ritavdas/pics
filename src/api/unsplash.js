import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID s57Jdq83jKrIXD_iOLmNxZd5b2nBMpAPth2TaPY9iQg",
  },
});
