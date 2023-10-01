import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ed82f52447324a3a91657f7fd39af1f2",
  },
});
