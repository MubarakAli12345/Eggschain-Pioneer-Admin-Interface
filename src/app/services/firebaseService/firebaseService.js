import config from "./firebaseServiceConfig";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { AUTH_CONFIG } from "../auth0Service/auth0ServiceConfig";
import { resolvePlugin } from "@babel/core";
import axios from "axios";
import { API_BASE_URL } from "app/main/api-config/api";

class firebaseService {
  init(success) {
    // if ( Object.entries(AUTH_CONFIG).length === 0 && AUTH_CONFIG.constructor === Object )
    // {
    //     if ( process.env.NODE_ENV === 'development' )
    //     {
    //         console.warn("Missing Firebase Configuration at src/app/services/firebaseService/firebaseServiceConfig.js");
    //     }
    //     success(false);
    //     return;
    // }

    if (firebase.apps.length) {
      return;
    }
    firebase.initializeApp(config);
    // this.db = firebase.database();
    this.auth = firebase.auth();
    success(true);
  }

  getUserData = (userId) => {
  
    if (!firebase.apps.length) {
      return;
    }
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_BASE_URL}auth/getUser/${userId}`)
        .then((userData) => {
          console.log("Get User Data Firebase Service", userData);
          resolve(userData);
        });
      //     this.db.ref(`users/${userId}`)
      //         .once('value')
      //         .then((snapshot) => {
      //             const user = snapshot.val();
      //             resolve(user);
      //         });
      // resolve({
      //     firstName : "Momin",
      //     middleName : "Momin",
      //     lastName : "Momin",
      //     emailId : "momin4073@gmail.com"
      // })
    });
  };

  updateUserData = (user) => {
    if (!firebase.apps.length) {
      return;
    }
    return axios
      .get(`${API_BASE_URL}auth/getUser/${user.firebaseId}`)
      .then((userData) => {
        console.log("updateUserData Firebase Service", userData);
      })
      .set(user);
  };

  onAuthStateChanged = (callback) => {
    if (!this.auth) {
      return;
    }
    this.auth.onAuthStateChanged(callback);
  };

  signOut = () => {
    if (!this.auth) {
      return;
    }
    this.auth.signOut();
  };

  resetPassword = (email) => {
    this.auth.sendPasswordResetEmail(email);
  };

  getFirebaseToken = async () => {
    let token = await firebase.auth().currentUser.getIdToken();
    let header = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    return header;
  };
}

const instance = new firebaseService();

export default instance;
