import axios from "axios";

const Api = axios.create({
  baseURL: "https://sistema.compjunior.com.br/api",
});

export default Api;
