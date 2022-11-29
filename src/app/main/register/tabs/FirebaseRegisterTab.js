import React, { useEffect, useRef, useState } from "react";
import Formsy from "formsy-react";
import { CheckboxFormsy, TextFieldFormsy } from "@fuse";
import { Button, InputAdornment, Icon } from "@material-ui/core";
import * as authActions from "app/auth/store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

function FirebaseRegisterTab(props) {
  const dispatch = useDispatch();
  const register = useSelector(({ auth }) => auth.register);
  const [btnClicked, setbtnClicked] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (
      register.error &&
      (register.error.username ||
        register.error.password ||
        register.error.email)
    ) {
      setbtnClicked(false);
      formRef.current.updateInputsWithError({
        ...register.error,
      });
      disableButton();
    }
  }, [register]);

  function disableButton() {
    setIsFormValid(false);
  }

  function enableButton() {
    setIsFormValid(true);
  }

  function handleCheckBoxChange(flag) {
    setCheckBox(!flag);
  }

  function handleSubmit(model) {
    setbtnClicked(true);
    dispatch(authActions.registerWithFirebase(model));
  }

  return (
    <div className="w-full">
      <Formsy
        onValidSubmit={handleSubmit}
        onValid={enableButton}
        onInvalid={disableButton}
        ref={formRef}
        className="flex flex-col justify-center w-full"
      >
        <TextFieldFormsy
          className="mb-16"
          type="text"
          name="fullName"
          label="Full Name"
          validations={{
            minLength: 4,
          }}
          validationErrors={{
            minLength: "Min character length is 4",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon className="text-20" color="action">
                  person
                </Icon>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          required
        />

        <TextFieldFormsy
          className="mb-16"
          type="text"
          name="email"
          label="Email"
          validations="isEmail"
          validationErrors={{
            isEmail: "Please enter a valid email",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon className="text-20" color="action">
                  email
                </Icon>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          required
        />

        <TextFieldFormsy
          className="mb-16"
          type="number"
          name="phoneNumber"
          label="Phone Number"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon className="text-20" color="action">
                  phone
                </Icon>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          required
        />
        <TextFieldFormsy
          className="mb-16"
          type="password"
          name="password"
          label="Password"
          validations={{
            minLength: 6,
          }}
          validationErrors={{
            minLength: "Min character length is 6",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon className="text-20" color="action">
                  vpn_key
                </Icon>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          required
        />

        <TextFieldFormsy
          className="mb-16"
          type="password"
          name="password-confirm"
          label="Confirm Password"
          validations="equalsField:password"
          validationErrors={{
            equalsField: "Passwords do not match",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon className="text-20" color="action">
                  vpn_key
                </Icon>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          required
        />

        <CheckboxFormsy
          className="my-16"
          name="accept"
          value={checkBox}
          label="I hereby agree to"
          onChange={() => handleCheckBoxChange(checkBox)}
          required
        />
        <div
          className="flex items-center justify-end colorWhite h6"
          style={{ display: "inline" }}
        >
          <Link
            className="colorWhite h6"
            to="/terms-conditions"
            style={{ textDecoration: "none" }}
          >
            <u>Privacy Policy</u>
          </Link>

          {/* <Link
            className="colorWhite h6"
            to="/generalSubscriptionPolicy"
            style={{ textDecoration: "none" }}
          >
            <u>Master Subscription Agreement</u>.
          </Link> */}
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full mx-auto mt-16 normal-case"
          aria-label="REGISTER WITH FIREBASE"
          disabled={!isFormValid || !checkBox}
        >
          {btnClicked == true ? (
            <CircularProgress size={22} color="#2d2c4c" />
          ) : (
            <span>Register</span>
          )}
        </Button>
      </Formsy>
    </div>
  );
}

export default FirebaseRegisterTab;
