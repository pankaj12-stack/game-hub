import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2f4785c0ed06475d8618b87ce712dfe8",
  },
});
