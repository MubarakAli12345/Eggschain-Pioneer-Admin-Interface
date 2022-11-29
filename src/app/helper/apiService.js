import firebaseService from "../services/firebaseService";
import axios from "axios";

class apiService {
  getApi = async (url) => {
    let token = await firebaseService.getFirebaseToken();
    let headers = token;
    const data = await axios.get(url, headers).then((response) => {
      return response.data;
    });
    return data;
  };

  postApi = async (url, payload) => {
    let token = await firebaseService.getFirebaseToken();
    let header = token;
    const data = await axios.post(url, payload, header).then((response) => {
      return response.data;
    });
    return data;
  };

  putApi = async (url, payload) => {
    let token = await firebaseService.getFirebaseToken();
    let header = token;
    const data = await axios.patch(url, payload, header).then((response) => {
      return response.data;
    });
    return data;
  };
}

const instance = new apiService();

export default instance;
