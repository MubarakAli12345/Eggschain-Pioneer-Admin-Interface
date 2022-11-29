import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Typography,
  Avatar,
  Icon,
  Tooltip,
  Button,
} from "@material-ui/core";
import createHistory from "history/createBrowserHistory";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
// import {Draggable} from 'react-beautiful-dnd';
import clsx from "clsx";
import moment from "moment";
import _ from "@lodash";
// import * as Actions from '../store/actions';
import { makeStyles } from "@material-ui/styles";
import MeetingsFeedBack from "./MeetingFeedBack";
import AttendeeMeetingsFeedBack from "./AttendeeMeetingFeedBack";
import CancelIcon from "@material-ui/icons/Cancel";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import noResult from "./noResult.png";

const useStyles = makeStyles((theme) => ({
  card: {
    transitionProperty: "box-shadow",
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    width: "230px",
    height: "270px",
  },
  labels: {
    padding: "12px",
  },
  cardContent: {
    textAlign: "center",
  },
  trxDiv: {
    maxWidth: "200px",
    overflowWrap: "break-word",
    textAlign: "center",
  },
  buttonHolder: {
    position: "relative",
    top: "10px",
    textAlign: "center",
  },
  imgHolder: {
    width: "300px",
    position: "absolute",
    left: "27%",
    top: "27%",
  },
  imgDiv: {},
  titlediv:{
    textAlign:"center"
  }
}));

function InitiativeCard(props) {
  const { handleStatus, handleReload, location,  toasterHandler } = props;
  const [FeedBackToggler, setFeedBackToggler] = React.useState(
    location.state && location.state.role ? location.state.role : false
  );
  const userRole = React.useState(
    location.state && location.state.role ? location.state.role : "attendee"
  );
  const userData = useSelector(({ auth }) => auth.user.data);
  const [role, setRole] = React.useState(userRole);
  const classes = useStyles(props);

  const [meetingFeedback, setMeetingsFeedback] = React.useState(null);

  function handleFeedBackToggler() {
    setFeedBackToggler(true);
  }
  function handleFeedBackClose() {
    setFeedBackToggler(false);
  }

  const openInNewTab = (trxId) => {
   // console.log("i am here", trxId);
    const url = `https://explorer.stacks.co/txid/${trxId}`;
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  //console.log("Initiative card ke props", props.MeetingsData);
  const meetingCards =
    props.MeetingsData && props.MeetingsData.length > 0 ? (
      props.MeetingsData.map((MeetingDetails) => {
        return (
          <Card
            className={clsx(
              classes.card,
              role === "Host"
                ? "m-16 rounded-4 cursor-pointer border-1"
                : "m-16 rounded-4 border-1"
            )}
          >
            <div className="p-16 pb-0">
              <div className="flex flex-wrap mb-8"></div>
              <div className="flex flex-wrap mb-8">
                <span className={classes.cardContent}>
                  <strong className={classes.labels}>
                    <a style={{ color: "#3C4252" }}> Added on :</a>
                  </strong>
                  <a
                    style={{
                      fontSize: "13px",
                      color: "black",
                      position: "relative",
                      right: "4px",
                    }}
                  >
                    {MeetingDetails.trxDate}
                  </a>
                  <br />
                  <strong className={classes.labels}>
                    <a style={{ color: "#3C4252" }}>Log time:</a>
                  </strong>
                  <a
                    style={{
                      fontSize: "13px",
                      color: "black",
                      position: "relative",
                      right: "4px",
                    }}
                  >
                    {MeetingDetails.trxTime}
                  </a>

                  <br />
                  <strong className={classes.labels}>
                    <a style={{ color: "#3C4252" }}> Added by :</a>
                  </strong>
                  <a
                    style={{
                      fontSize: "13px",
                      color: "black",
                      position: "relative",
                      right: "4px",
                    }}
                  >
                    {MeetingDetails.addedBy}
                  </a>
                  <br />
                  <strong style={{ color: "#3C4252" }}>TxId:</strong>
                  <br />
                </span>
                <div className={classes.trxDiv}>
                  <code>{MeetingDetails.trxId}</code>
                </div>
              </div>
            </div>
            <div className={classes.buttonHolder}>
              <Fab
                variant="extended"
                aria-label="Delete"
                color="primary"
                className={"hoverEffect"}
                onClick={() => {
                  openInNewTab(MeetingDetails.trxId);
                }}
              >
                Block Explorer
              </Fab>
            </div>
          </Card>
        );
      })
    ) : (
      <div>
        <div className={classes.imgDiv}>
          {" "}
          <img className={classes.imgHolder} src={noResult} />
        </div>
        <div className={classes.titlediv}>   <Typography color="textSecondary" variant="h6">
         Click on the “ADD NEW” button to create your Log.
        </Typography></div>
     
      </div>
    );
  // <div className="mt-32 flex flex-1 items-center justify-center h-full"></div>
  return (
    <Grid container>
      {meetingCards}
      {FeedBackToggler ? (
        <Dialog
          open={FeedBackToggler}
          maxWidth="lg"
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            <div className="flex justify-between h-48">
              <div className="flex items-center">
                {/* { role === 'attendee' ? `Add Feedback` :`Edit Initiative`} */}
                Initiative
              </div>

              <div className="flex items-center justify-end">
                <CancelIcon
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={handleFeedBackClose}
                />
              </div>
            </div>
          </DialogTitle>
          <DialogContent style={{ width: "600px", height: "800px" }}>
            <DialogContentText>
              <MeetingsFeedBack
                handleReload={handleReload}
                meetingFeedback={meetingFeedback}
                handleStatus={handleStatus}
                handleFeedBackClose={handleFeedBackClose}
                toasterHandler={ toasterHandler}
              />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : null}
    </Grid>
  );
}

export default withRouter(InitiativeCard);
