import axios from "axios";

export default class Http {

  static async get(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async post(url, data){
    return axios.post(url, data);
  }
}