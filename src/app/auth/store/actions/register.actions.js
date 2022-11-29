import firebaseService from "app/services/firebaseService";
import * as UserActions from "./user.actions";
import * as Actions from "app/store/actions";
import jwtService from "app/services/jwtService";
import { API_BASE_URL } from "app/main/api-config/api";
import Axios from "axios";

export const REGISTER_ERROR = "REGISTER_ERROR";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export function submitRegister({ displayName, password, email }) {
  return (dispatch) =>
    jwtService
      .createUser({
        displayName,
        password,
        email,
      })
      .then((user) => {
        dispatch(UserActions.setUserData(user));
        return dispatch({
          type: REGISTER_SUCCESS,
        });
      })
      .catch((error) => {
        return dispatch({
          type: REGISTER_ERROR,
          payload: error,
        });
      });
}

export function registerWithFirebase(model) {
  const { email, password, fullName, phoneNumber } = model;
  let role = "superAdmin";
  return (dispatch) =>
    firebaseService.auth &&
    firebaseService.auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        Axios({
          method: "post",
          url: `${API_BASE_URL}auth/signup`,
          data: {
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber,
            firebaseId: response.user.uid,
            role: role,
            isUserDisabled: false,
          },
        }).then((res) => {
          if (res.status === 200) {
            dispatch(
              Actions.showMessage({
                message: "Your account has been successfully created",
                variant: "success",
              })
            );
          } else {
            dispatch(
              Actions.showMessage({
                message: res.errorMessage,
                variant: "error",
              })
            );
          }
        });

        dispatch(
          UserActions.createUserSettingsFirebase({
            ...response.user,
            fullName,
            email,
          })
        );

        return dispatch({
          type: REGISTER_SUCCESS,
        });
      })
      .catch((error) => {
        const usernameErrorCodes = [
          "auth/operation-not-allowed",
          "auth/user-not-found",
          "auth/user-disabled",
        ];

        const emailErrorCodes = [
          "auth/email-already-in-use",
          "auth/invalid-email",
        ];

        const passwordErrorCodes = [
          "auth/weak-password",
          "auth/wrong-password",
        ];

        const response = {
          email: emailErrorCodes.includes(error.code) ? error.message : null,
          displayName: usernameErrorCodes.includes(error.code)
            ? error.message
            : null,
          password: passwordErrorCodes.includes(error.code)
            ? error.message
            : null,
        };

        if (error.code === "auth/invalid-api-key") {
          dispatch(Actions.showMessage({ message: error.message }));
        }

        return dispatch({
          type: REGISTER_ERROR,
          payload: response,
        });
      });
}
