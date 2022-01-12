import axios from "axios";

const Api = axios.create({
  baseURL: "https://henri-potier.techx.fr",
});

export default Api;
