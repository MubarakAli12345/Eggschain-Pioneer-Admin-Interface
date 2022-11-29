import React, { useEffect, useRef, useState } from "react";
import { Button, InputAdornment, Icon } from "@material-ui/core";
import { TextFieldFormsy } from "@fuse";
import Formsy from "formsy-react";
import * as authActions from "app/auth/store/actions";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FuseAnimate, NavLinkAdapter } from "@fuse";

function FirebaseLoginTab(props) {
  const dispatch = useDispatch();
  const login = useSelector(({ auth }) => auth.login);
  const [btnClicked, setbtnClicked] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (login.error && (login.error.username || login.error.password)) {
      setbtnClicked(false);
      formRef.current.updateInputsWithError({
        ...login.error,
      });

      disableButton();
    }
  }, [login.error]);

  function disableButton() {
    setIsFormValid(false);
  }

  function enableButton() {
    setIsFormValid(true);
  }

  function handleSubmit(model) {
    setbtnClicked(true);
    dispatch(authActions.submitLoginWithFireBase(model));

    // console.log("login",model);
    // if(model.username === "wei@eggschain.com" && model.password === "123asd")
    // {

    // }
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
          name="username"
          label="Email"
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
          type="password"
          name="password"
          label="Password"
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
                  vpn_key
                </Icon>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full mx-auto normal-case mt-16"
          aria-label="LOG IN"
          disabled={!isFormValid}
          value="firebase"
          // component={NavLinkAdapter}
          // to={'/apps/calender'}
        >
          {btnClicked == true ? (
            <CircularProgress size={22} color="#2d2c4c" />
          ) : (
            <span>LOGIN</span>
          )}
        </Button>
      </Formsy>
    </div>
  );
}

export default FirebaseLoginTab;
