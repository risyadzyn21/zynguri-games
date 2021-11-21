import axios from 'axios'
const BASE_URL = 'https://api.rawg.io/api/'


const API = axios.create({
  baseURL: BASE_URL
});

export default API