import React, { Component, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import logo from "./logo.PNG";
import {
  AppConfig,
  UserSession,
  showConnect,
  openContractCall,
} from "@stacks/connect";
import CircularProgress from "@material-ui/core/CircularProgress";
import { StacksTestnet } from "@stacks/network";
import { PrincipalCV, intCV, stringUtf8CV } from "@stacks/transactions";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import apiService from "../../../helper/apiService";
import { API_BASE_URL } from "app/main/api-config/api";
import Snackbar from "@material-ui/core/Snackbar";
import { SnackbarContent } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  Grid,
  Tab,
  Tabs,
  TextField,
  Avatar,
  Select,
  MenuItem,
  InputAdornment,
  Icon,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    marginTop: "2%",
  },
}));

const appConfig = new AppConfig(["store_write", "publish_data"]);
const userSession = new UserSession({ appConfig });
const Stacks = (props) => {
  const { disableFlag, date, time, location, metaData } = props;
  const userData = useSelector(({ auth }) => auth.user.data);
  const [walletConnection, setWalletConnection] = useState(false);
  const [open, setOpen] = useState(false);
  const [loader, setloader] = useState(false);

  const classes = useStyles();
  var senderAddress;

  const authenticate = () => {
    setloader(true);
    console.log("usestate", loader);
    showConnect({
      appDetails: {
        name: "EggsChain Pioneer",
        icon: window.location.origin + `${logo}`,
      },
      redirectTo: "/apps/initiatives",
      onFinish: () => {
        setWalletConnection(true);
        handleClick();
        let userData = userSession.loadUserData();
        console.log("user data", userData);
        console.log("wallet connection status", walletConnection);
        senderAddress = userData.profile.stxAddress.testnet;
        console.log("sender Adressss:", senderAddress); //mainnet for release
        contractCall();
      },
      onCancel: () => {
        setloader(false);
        setOpen(false);
      },
      userSession: userSession,
    });
  };

  const contractCall = () => {
    setloader(true);
    openContractCall({
      contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
      contractName: process.env.REACT_APP_CONTRACT_NAME,
      functionName: process.env.REACT_APP_FUNCTION_NAME,
      network: new StacksTestnet(),
      functionArgs: [
        stringUtf8CV(date),
        stringUtf8CV(time),
        stringUtf8CV(location),
        stringUtf8CV(metaData),
      ],
      sponsored: false,
      onFinish: (data) => {
        console.log("smartcontract@@@@@@@@@@@@@@@@@@@@@@@@@", data);
        postLedger(
          data.txId,
          date,
          time,
          userData.fullName,
          userData.firebaseId
        );
        setloader(false);
        props.handleEntry();
        props.formClose();
      },
      onCancel: () => {
        setloader(false);
      },
    });
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const postLedger = async (trxId, date, time, userName, firebaseId) => {
    const payLoad = {
      trxId: trxId,
      trxDate: date,
      trxTime: time,
      addedBy: userName,
      firebaseId: firebaseId,
    };
    setloader(true);
    let logs = await apiService.postApi(
      `${API_BASE_URL}ledger/addLedger`,
      payLoad
    );

    setloader(false);
  };
  return (
    <div>
      <Button
        disabled={disableFlag}
        variant="contained"
        color="secondary"
        type="submit"
        className={classes.button}
        onClick={authenticate}
      >
        {loader == true ? (
          <CircularProgress size={19} color="#00fe9b" />
        ) : (
          <p>Send</p>
        )}
      </Button>

      {walletConnection === true ? (
        <div>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={open}
            autoHideDuration={500}
            onClose={handleCloseSnack}
          >
            <SnackbarContent
              message={"Stacks Wallet Logged in"}
              style={{ backgroundColor: "green" }}
              action={
                <React.Fragment>
                  <Button
                    color="secondary"
                    size="small"
                    onClick={handleCloseSnack}
                  ></Button>
                  <IconButton
                    size="small"
                    aria-label="close"
                    onClick={handleCloseSnack}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
          </Snackbar>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Stacks;
