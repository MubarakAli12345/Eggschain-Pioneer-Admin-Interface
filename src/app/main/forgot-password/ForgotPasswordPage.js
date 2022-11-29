import React from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import { FuseAnimate } from "@fuse";
import { useForm } from "@fuse/hooks";
import clsx from "clsx";
import { Link } from "react-router-dom";
import * as authActions from "app/auth/store/actions";
import { useDispatch as dispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(to right, " +
      theme.palette.primary.dark +
      " 0%, " +
      darken(theme.palette.primary.dark, 0.5) +
      " 100%)",
    color: theme.palette.primary.contrastText,
  },
}));

function ForgotPasswordPage() {
  const classes = useStyles();
  const { form, handleChange, resetForm } = useForm({
    email: "",
  });

  function isFormValid() {
    return form.email.length > 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    authActions.forgotPassword(form.email);
    resetForm();
  }

  return (
    <div
      className={clsx(
        classes.root,
        "flex flex-col flex-auto flex-shrink-0 p-24 md:flex-row md:p-0 pageBackground"
      )}
    >
      <div
        style={{ marginTop: "100px" }}
        className="flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"
      >
        {/* <FuseAnimate animation="transition.expandIn">
	<img className="w-128 mb-32" src="assets/images/logos/fuse.svg" alt="logo"/>
</FuseAnimate> */}

        <FuseAnimate animation="transition.slideUpIn" delay={300}>
          <Typography variant="h3" color="inherit" className="font-light">
            Eggschain Admin
          </Typography>
        </FuseAnimate>

        <FuseAnimate delay={400}>
          <Typography
            variant="subtitle1"
            color="inherit"
            className="max-w-512 mt-16"
          >
            Track Users Activity!
          </Typography>
        </FuseAnimate>
      </div>

      <FuseAnimate animation={{ translateX: [0, "100%"] }}>
        <Card
          elevation="0"
          className="w-full max-w-400 mx-auto m-16 md:m-0 loginPaper"
          square
        >
          <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
            {/* <Typography variant="h6" className="md:w-full mb-32">
							RECOVER YOUR PASSWORD
						</Typography> */}

            <form
              name="recoverForm"
              noValidate
              className="flex flex-col justify-center w-full loginPaper"
              onSubmit={handleSubmit}
            >
              <b>
                <label className="modalColorGreen">EMAIL</label>
              </b>
              <TextField
                className="mt-4 mb-16 inputBackground colorWhite"
                label=""
                autoFocus
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
              />

              <Button
                variant="contained"
                color="primary"
                className="w-full mx-auto normal-case mt-16 hoverEffect"
                aria-label="Reset"
                disabled={!isFormValid()}
                type="submit"
              >
                RESET PASSWORD
              </Button>
            </form>

            <div className="flex flex-col justify-end marginLeft mt-12">
              <Link className="font-medium" to="/login">
                Go back to login page
              </Link>
            </div>
          </CardContent>
        </Card>
      </FuseAnimate>
    </div>
  );
}

export default ForgotPasswordPage;
