import React, { useEffect, useRef, useState } from "react";
import { FusePageSimple } from "@fuse";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import {
  Table,
  Paper,
  TableBody,
  Tooltip,
  Avatar,
  TableCell,
  TableRow,
  Grid,
} from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import MeetingsHeader from "./MeetingsHeader";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import axios from "axios";
import { API_BASE_URL } from "app/main/api-config/api";
import { FuseLoading } from "@fuse";
import LinearIndeterminate from "./LinearIndeterminate";
import apiService from "../../../helper/apiService";

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    marginTop: "44px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function MeetingDetails(props) {
  const { location } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState(null);
  let meeting;
  const meetingById = async () => {
    setIsLoading(true);

    // meeting = await axios.get(`${API_BASE_URL}meetings/getMeetingDetails/${location.state.MeetingDetails._id}`)
    //     .then((response) => {
    //         setIsLoading(false);
    //         return response.data;
    //     });

    meeting = await apiService.getApi(
      `${API_BASE_URL}meetings/getMeetingDetails/${location.state.MeetingDetails._id}`
    );
    setIsLoading(false);
    await setMeetingDetails(meeting);
  };
  useEffect(() => {
    meetingById();
  }, []);

  const classes = useStyles();
  const pageLayout = useRef(null);
  const card = {
    members: [
      {
        name: "Alice Freeman",
        avatar: "assets/images/avatars/alice.jpg",
      },
      {
        name: "Danielle Obrien",
        avatar: "assets/images/avatars/danielle.jpg",
      },
      {
        name: "James Lewis",
        avatar: "assets/images/avatars/james.jpg",
      },
      {
        name: "John Doe",
        avatar: "assets/images/avatars/Velazquez.jpg",
      },
      {
        name: "Abbott",
        avatar: "assets/images/avatars/Abbott.jpg",
      },
      {
        name: "Andrew",
        avatar: "assets/images/avatars/andrew.jpg",
      },
      {
        name: "Arnold",
        avatar: "assets/images/avatars/Arnold.jpg",
      },
      {
        name: "Barrera",
        avatar: "assets/images/avatars/Barrera.jpg",
      },
      {
        name: "Blair",
        avatar: "assets/images/avatars/Blair.jpg",
      },
      {
        name: "Estes",
        avatar: "assets/images/avatars/Estes.jpg",
      },
      {
        name: "Momin Shahid",
        avatar: "assets/images/avatars/mshahid.png",
      },
      {
        name: "Atif Mumtaz",
        avatar: "assets/images/avatars/amumtaz.png",
      },
    ],
  };
  let colors = ["orange", "blue", "red", "green", "purple", "pink"];
  let [menuToggle, setMenuToggle] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const userData = useSelector(({ auth }) => auth.user.data);
  const handleToggleMenu = (i) => {
    menuToggle = menuToggle.map((menu, index) => {
      if (index === i) return !menu;
      return menu;
    });
    setMenuToggle(menuToggle);
  };
  let preMeetVisibleAll =
    meetingDetails &&
    meetingDetails.preMeetingFeedback.length > 0 &&
    meetingDetails.preMeetingFeedback.map((preMeetFeedback) => {
      console.log("preMeetFeedback", preMeetFeedback);
      if (preMeetFeedback.feedbackVisibleAll.length > 0) {
        return preMeetFeedback.feedbackVisibleAll.map((visibleAllFeed) => {
          console.log("visibleAllFeed", visibleAllFeed);
          return (
            <TableRow>
              <TableCell component="th" scope="row" align="left">
                <b>{visibleAllFeed}</b>
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                <Grid style={{ justifyContent: "flex-end" }} container>
                  <Grid item xs={1.5}>
                    <Avatar
                      style={{
                        backgroundColor: colors[Math.floor(Math.random() * 6)],
                      }}
                      className="mr-8 w-32 h-32"
                    >
                      {preMeetFeedback.attendee.charAt(0).toUpperCase()}
                    </Avatar>
                  </Grid>
                  <Grid
                    style={{ paddingTop: "5px", paddingLeft: "5px" }}
                    item
                    xs={1.5}
                  >
                    {preMeetFeedback.attendee}
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          );
        });
      }
    });

  let preMeetVisibleOnlyHost =
    meetingDetails &&
    meetingDetails.preMeetingFeedback.length > 0 &&
    meetingDetails.preMeetingFeedback.map((preMeetFeedback) => {
      if (preMeetFeedback.feedbackVisibleOnlyHost.length > 0) {
        return preMeetFeedback.feedbackVisibleOnlyHost.map(
          (visibleOnlyHost) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  <b>{visibleOnlyHost}</b>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Grid style={{ justifyContent: "flex-end" }} container>
                    <Grid item xs={1.5}>
                      <Avatar
                        style={{
                          backgroundColor:
                            colors[Math.floor(Math.random() * 6)],
                        }}
                        className="mr-8 w-32 h-32"
                      >
                        {preMeetFeedback.attendee.charAt(0).toUpperCase()}
                      </Avatar>
                    </Grid>
                    <Grid
                      style={{ paddingTop: "5px", paddingLeft: "5px" }}
                      item
                      xs={1.5}
                    >
                      {preMeetFeedback.attendee}
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            );
          }
        );
      }
    });

    let preMeetVisibleOnlyHostAttendee =
    meetingDetails &&
    meetingDetails.preMeetingFeedback.length > 0 &&
    meetingDetails.preMeetingFeedback.map((preMeetFeedback) => {
      if (preMeetFeedback.feedbackVisibleOnlyHost.length > 0 && preMeetFeedback.attendee === userData.email) {
        return preMeetFeedback.feedbackVisibleOnlyHost.map(
          (visibleOnlyHost) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  <b>{visibleOnlyHost}</b>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Grid style={{ justifyContent: "flex-end" }} container>
                    <Grid item xs={1.5}>
                      <Avatar
                        style={{
                          backgroundColor:
                            colors[Math.floor(Math.random() * 6)],
                        }}
                        className="mr-8 w-32 h-32"
                      >
                        {preMeetFeedback.attendee.charAt(0).toUpperCase()}
                      </Avatar>
                    </Grid>
                    <Grid
                      style={{ paddingTop: "5px", paddingLeft: "5px" }}
                      item
                      xs={1.5}
                    >
                      {preMeetFeedback.attendee}
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            );
          }
        );
      }
    });


  let preMeetAnonymousVisibleOnlyHost =
    meetingDetails &&
    meetingDetails.preMeetingFeedback.length > 0 &&
    meetingDetails.preMeetingFeedback.map((preMeetFeedback) => {
      if (preMeetFeedback.feedbackAnonymousVisibleOnlyHost.length > 0) {
        return preMeetFeedback.feedbackAnonymousVisibleOnlyHost.map(
          (AnonymousVisibleOnlyHost) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  <b>{AnonymousVisibleOnlyHost}</b>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Grid style={{ justifyContent: "flex-end" }} container>
                    <Grid item xs={1.5}>
                      <Avatar
                        className="w-32 h-32"
                        src="assets/images/avatars/profile.jpg"
                      />
                    </Grid>
                    <Grid
                      style={{ paddingTop: "5px", paddingLeft: "5px" }}
                      item
                      xs={1.5}
                    >
                      Anonymous
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            );
          }
        );
      }
    });

    

    let preMeetAnonymousVisibleOnlyHostAttendee =
    meetingDetails &&
    meetingDetails.preMeetingFeedback.length > 0 &&
    meetingDetails.preMeetingFeedback.map((preMeetFeedback) => {
      if (preMeetFeedback.feedbackAnonymousVisibleOnlyHost.length > 0 && preMeetFeedback.attendee === userData.email) {
        return preMeetFeedback.feedbackAnonymousVisibleOnlyHost.map(
          (AnonymousVisibleOnlyHost) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  <b>{AnonymousVisibleOnlyHost}</b>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Grid style={{ justifyContent: "flex-end" }} container>
                    <Grid item xs={1.5}>
                      <Avatar
                        className="w-32 h-32"
                        src="assets/images/avatars/profile.jpg"
                      />
                    </Grid>
                    <Grid
                      style={{ paddingTop: "5px", paddingLeft: "5px" }}
                      item
                      xs={1.5}
                    >
                      Anonymous
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            );
          }
        );
      }
    });

  let preMeetAnonymous =
    meetingDetails &&
    meetingDetails.preMeetingFeedback.length > 0 &&
    meetingDetails.preMeetingFeedback.map((preMeetFeedback) => {
      if (preMeetFeedback.feedbackAnonymous.length > 0) {
        console.log(
          "preMeetFeedback.feedbackAnonymous.length",
          preMeetFeedback.feedbackAnonymous.length
        );
        return preMeetFeedback.feedbackAnonymous.map((anonymous) => {
          console.log("********************** ", anonymous);
          return (
            <TableRow>
              <TableCell component="th" scope="row" align="left">
                <b>{anonymous}</b>
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                <Grid style={{ justifyContent: "flex-end" }} container>
                  <Grid item xs={1.5}>
                    <Avatar
                      className="w-32 h-32"
                      src="assets/images/avatars/profile.jpg"
                    />
                  </Grid>
                  <Grid
                    style={{ paddingTop: "5px", paddingLeft: "5px" }}
                    item
                    xs={1.5}
                  >
                    Anonymous
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          );
        });
      }
    });
  console.log("preMeetAnonymous", preMeetAnonymous);

  let postMeetVisibleAll =
    meetingDetails &&
    meetingDetails.postMeetingFeedback &&
    meetingDetails.postMeetingFeedback.length > 0 &&
    meetingDetails.postMeetingFeedback.map((postMeetFeedback) => {
      if (postMeetFeedback.feedbackVisibleAll.length > 0) {
        return postMeetFeedback.feedbackVisibleAll.map((visibleAllFeed) => {
          return (
            <TableRow>
              <TableCell component="th" scope="row" align="left">
                <b>{visibleAllFeed}</b>
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                <Grid style={{ justifyContent: "flex-end" }} container>
                  <Grid item xs={1.5}>
                    <Avatar
                      style={{
                        backgroundColor: colors[Math.floor(Math.random() * 6)],
                      }}
                      className="mr-8 w-32 h-32"
                    >
                      {postMeetFeedback.attendee.charAt(0).toUpperCase()}
                    </Avatar>
                  </Grid>
                  <Grid
                    style={{ paddingTop: "5px", paddingLeft: "5px" }}
                    item
                    xs={1.5}
                  >
                    {postMeetFeedback.attendee}
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          );
        });
      }
    });

  let postMeetVisibleOnlyHost =
    meetingDetails &&
    meetingDetails.postMeetingFeedback.length > 0 &&
    meetingDetails.postMeetingFeedback.map((postMeetFeedback) => {
      if (postMeetFeedback.feedbackVisibleOnlyHost.length > 0) {
        return postMeetFeedback.feedbackVisibleOnlyHost.map(
          (visibleOnlyHost) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  <b>{visibleOnlyHost}</b>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Grid style={{ justifyContent: "flex-end" }} container>
                    <Grid item xs={1.5}>
                      <Avatar
                        style={{
                          backgroundColor:
                            colors[Math.floor(Math.random() * 6)],
                        }}
                        className="mr-8 w-32 h-32"
                      >
                        {postMeetFeedback.attendee.charAt(0).toUpperCase()}
                      </Avatar>
                    </Grid>
                    <Grid
                      style={{ paddingTop: "5px", paddingLeft: "5px" }}
                      item
                      xs={1.5}
                    >
                      {postMeetFeedback.attendee}
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            );
          }
        );
      }
    });

    console.log("host ke feedback", postMeetVisibleOnlyHost);

    let postMeetVisibleOnlyHostAttendee =
    meetingDetails &&
    meetingDetails.postMeetingFeedback.length > 0 &&
    meetingDetails.postMeetingFeedback.map((postMeetFeedback) => {
      if (postMeetFeedback.feedbackVisibleOnlyHost.length > 0 && postMeetFeedback.attendee === userData.email) {
        return postMeetFeedback.feedbackVisibleOnlyHost.map(
          (visibleOnlyHost) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  <b>{visibleOnlyHost}</b>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Grid style={{ justifyContent: "flex-end" }} container>
                    <Grid item xs={1.5}>
                      <Avatar
                        style={{
                          backgroundColor:
                            colors[Math.floor(Math.random() * 6)],
                        }}
                        className="mr-8 w-32 h-32"
                      >
                        {postMeetFeedback.attendee.charAt(0).toUpperCase()}
                      </Avatar>
                    </Grid>
                    <Grid
                      style={{ paddingTop: "5px", paddingLeft: "5px" }}
                      item
                      xs={1.5}
                    >
                      {postMeetFeedback.attendee}
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            );
          }
        );
      }
    });
  let postMeetAnonymousVisibleOnlyHost =
    meetingDetails &&
    meetingDetails.postMeetingFeedback.length > 0 &&
    meetingDetails.postMeetingFeedback.map((postMeetFeedback) => {
      if (postMeetFeedback.feedbackAnonymousVisibleOnlyHost.length > 0) {
        return postMeetFeedback.feedbackAnonymousVisibleOnlyHost.map(
          (AnonymousVisibleOnlyHost) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  <b>{AnonymousVisibleOnlyHost}</b>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Grid style={{ justifyContent: "flex-end" }} container>
                    <Grid item xs={1.5}>
                      <Avatar
                        className="w-32 h-32"
                        src="assets/images/avatars/profile.jpg"
                      />
                    </Grid>
                    <Grid
                      style={{ paddingTop: "5px", paddingLeft: "5px" }}
                      item
                      xs={1.5}
                    >
                      Anonymous
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            );
          }
        );
      }
    });

    let postMeetAnonymousVisibleOnlyHostAttendee =
    meetingDetails &&
    meetingDetails.postMeetingFeedback.length > 0 &&
    meetingDetails.postMeetingFeedback.map((postMeetFeedback) => {
      if (postMeetFeedback.feedbackAnonymousVisibleOnlyHost.length > 0 && postMeetFeedback.attendee === userData.email) {
        return postMeetFeedback.feedbackAnonymousVisibleOnlyHost.map(
          (AnonymousVisibleOnlyHost) => {
            return (
              <TableRow>
                <TableCell component="th" scope="row" align="left">
                  <b>{AnonymousVisibleOnlyHost}</b>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <Grid style={{ justifyContent: "flex-end" }} container>
                    <Grid item xs={1.5}>
                      <Avatar
                        className="w-32 h-32"
                        src="assets/images/avatars/profile.jpg"
                      />
                    </Grid>
                    <Grid
                      style={{ paddingTop: "5px", paddingLeft: "5px" }}
                      item
                      xs={1.5}
                    >
                      Anonymous
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            );
          }
        );
      }
    });

  let postMeetAnonymous =
    meetingDetails &&
    meetingDetails.postMeetingFeedback.length > 0 &&
    meetingDetails.postMeetingFeedback.map((postMeetFeedback) => {
      if (postMeetFeedback.feedbackAnonymous.length > 0) {
        return postMeetFeedback.feedbackAnonymous.map((anonymous) => {
          return (
            <TableRow>
              <TableCell component="th" scope="row" align="left">
                <b>{anonymous}</b>
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                <Grid style={{ justifyContent: "flex-end" }} container>
                  <Grid item xs={1.5}>
                    <Avatar
                      className="w-32 h-32"
                      src="assets/images/avatars/profile.jpg"
                    />
                  </Grid>
                  <Grid
                    style={{ paddingTop: "5px", paddingLeft: "5px" }}
                    item
                    xs={1.5}
                  >
                    Anonymous
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          );
        });
      }
    });
  return (
    <FusePageSimple
      classes={
        {
          // contentWrapper: "p-0 sm:p-24 pb-80 sm:pb-80 h-full",
          // content: "flex flex-col h-full",
          // leftSidebar: "w-256 border-0",
          // header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
        }
      }
      header={<MeetingsHeader {...props} detailsPage={true} />}
      content={
        <div id="Print" className="w-full p-10 flex flex-col">
          {isLoading && (
            <div style={{ margin: "120px" }}>
              <FuseLoading />
            </div>
          )}
          {!isLoading && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {meetingDetails &&
                  meetingDetails.preMeetingFeedback.length > 0 && (
                    <div className="mt-16">
                      <Grid
                        justify="left"
                        style={{ color: `#605ea0` }}
                        container
                      >
                        <Grid
                          item
                          xs={1.5}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleToggleMenu(3);
                          }}
                        >
                          <Typography variant="h6" justify="left">
                            Pre-Meeting Feedback
                          </Typography>
                        </Grid>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleToggleMenu(3);
                          }}
                        >
                          {menuToggle[3] ? (
                            <ArrowDropDown style={{ fontSize: 35 }} />
                          ) : (
                            <ArrowDropUp style={{ fontSize: 35 }} />
                          )}
                        </span>
                      </Grid>
                      {menuToggle[3] && (
                        <div>
                          {preMeetVisibleAll.filter((a) => a != undefined)
                            .length > 0 && (
                            <div className="mt-16">
                              <Typography
                                variant="h6"
                                justify="left"
                                style={{ color: `#605ea0` }}
                              >
                                Feedback from me, visible to all
                              </Typography>
                              <Paper
                                className=" mt-2"
                                aria-labelledby="tableTitle"
                                style={{
                                  border: "2px solid",
                                  color: "lightgrey",
                                }}
                              >
                                <Table
                                  className=" mt-2"
                                  aria-labelledby="tableTitle"
                                  style={{ border: "0px", color: "white" }}
                                >
                                  <TableBody>{preMeetVisibleAll}</TableBody>
                                </Table>
                              </Paper>
                            </div>
                          )}

                          {(meetingDetails &&
                            meetingDetails.preMeetingFeedback.length > 0 &&
                            (meetingDetails.preMeetingFeedback.find(o => o.attendee === userData.email)  || meetingDetails.host ===
                              userData.email))  &&
                              (preMeetVisibleOnlyHost.filter(
                                (a) => a != undefined
                              ).length > 0) && (
                                <div className="mt-16">
                                  <Typography
                                    variant="h6"
                                    justify="left"
                                    style={{ color: `#605ea0` }}
                                  >
                                    Feedback from me, visible only to host
                                  </Typography>
                                  <Paper
                                    className=" mt-2"
                                    aria-labelledby="tableTitle"
                                    style={{
                                      border: "2px solid",
                                      color: "lightgrey",
                                    }}
                                  >
                                    <Table
                                      className=" mt-2"
                                      aria-labelledby="tableTitle"
                                      style={{ border: "0px", color: "white" }}
                                    >
                                      <TableBody>
                                        {/* {preMeetVisibleOnlyHost} */}
                                        {meetingDetails.host === userData.email ? preMeetVisibleOnlyHost: preMeetVisibleOnlyHostAttendee}

                                      </TableBody>
                                    </Table>
                                  </Paper>
                                </div>
                              )}

                          {(meetingDetails &&
                            meetingDetails.preMeetingFeedback.length > 0 &&
                            (meetingDetails.preMeetingFeedback.find(o => o.attendee === userData.email) || meetingDetails.host ===
                              userData.email))  &&
                              (preMeetAnonymousVisibleOnlyHost.filter(
                                (a) => a != undefined
                              ).length > 0) && (
                                <div className="mt-16">
                                  <Typography
                                    variant="h6"
                                    justify="left"
                                    style={{ color: `#605ea0` }}
                                  >
                                    Anonymous feedback visible only to host
                                  </Typography>
                                  <Paper
                                    className=" mt-2"
                                    aria-labelledby="tableTitle"
                                    style={{
                                      border: "2px solid",
                                      color: "lightgrey",
                                    }}
                                  >
                                    <Table
                                      className=" mt-2"
                                      aria-labelledby="tableTitle"
                                      style={{ border: "0px", color: "white" }}
                                    >
                                      <TableBody>
                                        {/* {preMeetAnonymousVisibleOnlyHost} */}
                                        {meetingDetails.host === userData.email ? preMeetAnonymousVisibleOnlyHost: preMeetAnonymousVisibleOnlyHostAttendee}
                                      </TableBody>
                                    </Table>
                                  </Paper>
                                </div>
                              )}

                          {console.log(
                            "preMeetAnonymous.length",
                            preMeetAnonymous.length
                          )}
                          {preMeetAnonymous.filter((a) => a != undefined)
                            .length > 0 && (
                            <div className="mt-16">
                              <Typography
                                variant="h6"
                                justify="left"
                                style={{ color: `#605ea0` }}
                              >
                                Anonymous feedback to all
                              </Typography>
                              <Paper
                                className=" mt-2"
                                aria-labelledby="tableTitle"
                                style={{
                                  border: "2px solid",
                                  color: "lightgrey",
                                }}
                              >
                                <Table
                                  className=" mt-2"
                                  aria-labelledby="tableTitle"
                                  style={{ border: "0px", color: "white" }}
                                >
                                  <TableBody>{preMeetAnonymous}</TableBody>
                                </Table>
                              </Paper>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                {meetingDetails &&
                  meetingDetails.postMeetingFeedback.length > 0 && (
                    <div className="mt-16">
                      <Grid
                        justify="left"
                        style={{ color: `#605ea0` }}
                        container
                      >
                        <Grid
                          item
                          xs={1.5}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleToggleMenu(4);
                          }}
                        >
                          <Typography variant="h6" justify="left">
                            Post-Meeting Feedback
                          </Typography>
                        </Grid>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleToggleMenu(4);
                          }}
                        >
                          {menuToggle[4] ? (
                            <ArrowDropDown style={{ fontSize: 35 }} />
                          ) : (
                            <ArrowDropUp style={{ fontSize: 35 }} />
                          )}
                        </span>
                      </Grid>
                      {menuToggle[4] && (
                        <div className="mt-16">
                          {postMeetVisibleAll.filter((a) => a != undefined)
                            .length > 0 && (
                            <div>
                              <Typography
                                variant="h6"
                                justify="left"
                                style={{ color: `#605ea0` }}
                              >
                                Feedback from me, visible to all
                              </Typography>
                              <Paper
                                className=" mt-2"
                                aria-labelledby="tableTitle"
                                style={{
                                  border: "2px solid",
                                  color: "lightgrey",
                                }}
                              >
                                <Table
                                  className=" mt-2"
                                  aria-labelledby="tableTitle"
                                  style={{ border: "0px", color: "white" }}
                                >
                                  <TableBody>{postMeetVisibleAll}</TableBody>
                                </Table>
                              </Paper>
                            </div>
                          )}

                          {(meetingDetails &&
                            meetingDetails.postMeetingFeedback.length > 0 &&
                            (meetingDetails.postMeetingFeedback.find(o => o.attendee === userData.email) || meetingDetails.host ===
                              userData.email)) 
                             &&
                              (postMeetVisibleOnlyHost.filter(
                                (a) => a != undefined
                              ).length > 0) && (
                                <div className="mt-16">
                                  <Typography
                                    variant="h6"
                                    justify="left"
                                    style={{ color: `#605ea0` }}
                                  >
                                    Feedback from me, visible only to host
                                  </Typography>
                                  <Paper
                                    className=" mt-2"
                                    aria-labelledby="tableTitle"
                                    style={{
                                      border: "2px solid",
                                      color: "lightgrey",
                                    }}
                                  >
                                    <Table
                                      className=" mt-2"
                                      aria-labelledby="tableTitle"
                                      style={{ border: "0px", color: "white" }}
                                    >
                                      <TableBody>
                                        {/* {postMeetVisibleOnlyHost} */}
                                        {meetingDetails.host === userData.email ? postMeetVisibleOnlyHost: postMeetVisibleOnlyHostAttendee}
                                  
                                      </TableBody>
                                    </Table>
                                  </Paper>
                                </div>
                              )}

                          {(meetingDetails &&
                            meetingDetails.postMeetingFeedback.length > 0 &&
                            (meetingDetails.postMeetingFeedback.find(o => o.attendee === userData.email) || meetingDetails.host ===
                              userData.email)) 
                             &&
                              (postMeetAnonymousVisibleOnlyHost.filter(
                                (a) => a != undefined
                              ).length > 0) && (
                                <div className="mt-16">
                                  <Typography
                                    variant="h6"
                                    justify="left"
                                    style={{ color: `#605ea0` }}
                                  >
                                    Anonymous feedback visible only to host
                                  </Typography>
                                  <Paper
                                    className=" mt-2"
                                    aria-labelledby="tableTitle"
                                    style={{
                                      border: "2px solid",
                                      color: "lightgrey",
                                    }}
                                  >
                                    <Table
                                      className=" mt-2"
                                      aria-labelledby="tableTitle"
                                      style={{ border: "0px", color: "white" }}
                                    >
                                      <TableBody>
                                        {/* {postMeetAnonymousVisibleOnlyHost} */}
                                        {meetingDetails.host === userData.email ? postMeetAnonymousVisibleOnlyHost: postMeetAnonymousVisibleOnlyHostAttendee}
                                      </TableBody>
                                    </Table>
                                  </Paper>
                                </div>
                              )}

                          {postMeetAnonymous.filter((a) => a != undefined)
                            .length > 0 && (
                            <div className="mt-16">
                              <Typography
                                variant="h6"
                                justify="left"
                                style={{ color: `#605ea0` }}
                              >
                                Anonymous feedback to all
                              </Typography>
                              <Paper
                                className=" mt-2"
                                aria-labelledby="tableTitle"
                                style={{
                                  border: "2px solid",
                                  color: "lightgrey",
                                }}
                              >
                                <Table
                                  className=" mt-2"
                                  aria-labelledby="tableTitle"
                                  style={{ border: "0px", color: "white" }}
                                >
                                  <TableBody>{postMeetAnonymous}</TableBody>
                                </Table>
                              </Paper>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                {meetingDetails &&
                  meetingDetails.solicitInitialFeedback.length > 0 && (
                    <div className="mt-16">
                      <Grid
                        justify="left"
                        style={{ color: `#605ea0` }}
                        container
                      >
                        <Grid
                          item
                          xs={1.5}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleToggleMenu(6);
                          }}
                        >
                          <Typography variant="h6" justify="left">
                            Solicit Initial Feedback
                          </Typography>
                        </Grid>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleToggleMenu(6);
                          }}
                        >
                          {menuToggle[6] ? (
                            <ArrowDropDown style={{ fontSize: 35 }} />
                          ) : (
                            <ArrowDropUp style={{ fontSize: 35 }} />
                          )}
                        </span>
                      </Grid>
                      {menuToggle[6] && (
                        <Paper
                          className=" mt-2"
                          aria-labelledby="tableTitle"
                          style={{ border: "2px solid", color: "lightgrey" }}
                        >
                          <Table
                            className=" mt-2"
                            aria-labelledby="tableTitle"
                            style={{ border: "0px", color: "white" }}
                          >
                            <TableBody>
                              {meetingDetails &&
                                meetingDetails.solicitInitialFeedback.map(
                                  (question, index) => (
                                    <TableRow>
                                      <TableCell
                                        component="th"
                                        scope="row"
                                        align="left"
                                      >
                                        <b>{question}</b>
                                      </TableCell>
                                      <TableCell
                                        component="th"
                                        scope="row"
                                        align="right"
                                      >
                                        Question {index + 1}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                            </TableBody>
                          </Table>
                        </Paper>
                      )}
                    </div>
                  )}

                {meetingDetails && meetingDetails.publicNotes.length > 0 && (
                  <div className="mt-16">
                    <Grid justify="left" style={{ color: `#605ea0` }} container>
                      <Grid
                        item
                        xs={1.5}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleToggleMenu(2);
                        }}
                      >
                        <Typography variant="h6" justify="left">
                          Pre-alignments thoughts captured by Organizer
                        </Typography>
                      </Grid>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          handleToggleMenu(2);
                        }}
                      >
                        {menuToggle[2] ? (
                          <ArrowDropDown style={{ fontSize: 35 }} />
                        ) : (
                          <ArrowDropUp style={{ fontSize: 35 }} />
                        )}
                      </span>
                    </Grid>
                    {menuToggle[2] && (
                      <Paper
                        className=" mt-2"
                        aria-labelledby="tableTitle"
                        style={{ border: "2px solid", color: "lightgrey" }}
                      >
                        <Table
                          className=" mt-2"
                          aria-labelledby="tableTitle"
                          style={{ border: "0px", color: "white" }}
                        >
                          <TableBody>
                            {meetingDetails &&
                              meetingDetails.publicNotes.map((notes, index) => (
                                <TableRow>
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    align="left"
                                  >
                                    <b>{notes}</b>
                                  </TableCell>
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    align="right"
                                  >
                                    Note {index + 1}
                                  </TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                        </Table>
                      </Paper>
                    )}
                  </div>
                )}
                {meetingDetails &&
                  userData.email === meetingDetails.host &&
                  meetingDetails.privateNotes.length > 0 && (
                    <div className="mt-16">
                      <Grid
                        justify="left"
                        style={{ color: `#605ea0` }}
                        container
                      >
                        <Grid
                          item
                          xs={1.5}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleToggleMenu(7);
                          }}
                        >
                          <Typography variant="h6" justify="left">
                            Private Pre-alignments thoughts captured by
                            Organizer
                          </Typography>
                        </Grid>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleToggleMenu(7);
                          }}
                        >
                          {menuToggle[7] ? (
                            <ArrowDropDown style={{ fontSize: 35 }} />
                          ) : (
                            <ArrowDropUp style={{ fontSize: 35 }} />
                          )}
                        </span>
                      </Grid>
                      {menuToggle[7] && (
                        <Paper
                          className=" mt-2"
                          aria-labelledby="tableTitle"
                          style={{ border: "2px solid", color: "lightgrey" }}
                        >
                          <Table
                            className=" mt-2"
                            aria-labelledby="tableTitle"
                            style={{ border: "0px", color: "white" }}
                          >
                            <TableBody>
                              {meetingDetails &&
                                meetingDetails.privateNotes.map(
                                  (notes, index) => (
                                    <TableRow>
                                      <TableCell
                                        component="th"
                                        scope="row"
                                        align="left"
                                      >
                                        <b>{notes}</b>
                                      </TableCell>
                                      <TableCell
                                        component="th"
                                        scope="row"
                                        align="right"
                                      >
                                        Note {index + 1}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                            </TableBody>
                          </Table>
                        </Paper>
                      )}
                    </div>
                  )}

                <div className="mt-16">
                  <Grid justify="left" style={{ color: `#605ea0` }} container>
                    <Grid
                      item
                      xs={1.5}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleToggleMenu(1);
                      }}
                    >
                      <Typography variant="h6" justify="left">
                        Meeting Decisions
                      </Typography>
                    </Grid>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleToggleMenu(1);
                      }}
                    >
                      {menuToggle[1] ? (
                        <ArrowDropDown style={{ fontSize: 35 }} />
                      ) : (
                        <ArrowDropUp style={{ fontSize: 35 }} />
                      )}
                    </span>
                  </Grid>
                  {menuToggle[1] && (
                    <Paper
                      className=" mt-2"
                      aria-labelledby="tableTitle"
                      style={{ border: "2px solid", color: "lightgrey" }}
                    >
                      <Table
                        className=" mt-2"
                        aria-labelledby="tableTitle"
                        style={{ border: "0px", color: "white" }}
                      >
                        <TableBody>
                          {meetingDetails &&
                            meetingDetails.publicDecision.map(
                              (decisions, index) => (
                                <TableRow>
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    align="left"
                                  >
                                    <b>{decisions}</b>
                                  </TableCell>
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    align="right"
                                  >
                                    Decision {index + 1}
                                  </TableCell>
                                </TableRow>
                              )
                            )}
                        </TableBody>
                      </Table>
                    </Paper>
                  )}
                </div>

                {meetingDetails &&
                  userData.email === meetingDetails.host &&
                  meetingDetails.privateDecision.length > 0 && (
                    <div className="mt-16">
                      <Grid
                        justify="left"
                        style={{ color: `#605ea0` }}
                        container
                      >
                        <Grid
                          item
                          xs={1.5}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleToggleMenu(8);
                          }}
                        >
                          <Typography variant="h6" justify="left">
                            Private Meeting Decisions
                          </Typography>
                        </Grid>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleToggleMenu(8);
                          }}
                        >
                          {menuToggle[8] ? (
                            <ArrowDropDown style={{ fontSize: 35 }} />
                          ) : (
                            <ArrowDropUp style={{ fontSize: 35 }} />
                          )}
                        </span>
                      </Grid>
                      {menuToggle[8] && (
                        <Paper
                          className=" mt-2"
                          aria-labelledby="tableTitle"
                          style={{ border: "2px solid", color: "lightgrey" }}
                        >
                          <Table
                            className=" mt-2"
                            aria-labelledby="tableTitle"
                            style={{ border: "0px", color: "white" }}
                          >
                            <TableBody>
                              {meetingDetails &&
                                meetingDetails.privateDecision.map(
                                  (decisions, index) => (
                                    <TableRow>
                                      <TableCell
                                        component="th"
                                        scope="row"
                                        align="left"
                                      >
                                        <b>{decisions}</b>
                                      </TableCell>
                                      <TableCell
                                        component="th"
                                        scope="row"
                                        align="right"
                                      >
                                        Decision {index + 1}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                            </TableBody>
                          </Table>
                        </Paper>
                      )}
                    </div>
                  )}

                <div className="mt-16">
                  <Grid justify="left" style={{ color: `#605ea0` }} container>
                    <Grid
                      item
                      xs={1.5}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleToggleMenu(5);
                      }}
                    >
                      <Typography variant="h6" justify="left">
                        Initiative
                      </Typography>
                    </Grid>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleToggleMenu(5);
                      }}
                    >
                      {menuToggle[5] ? (
                        <ArrowDropDown style={{ fontSize: 35 }} />
                      ) : (
                        <ArrowDropUp style={{ fontSize: 35 }} />
                      )}
                    </span>
                  </Grid>
                  {menuToggle[5] && (
                    <Paper
                      className=" mt-2"
                      aria-labelledby="tableTitle"
                      style={{ border: "2px solid", color: "lightgrey" }}
                    >
                      <Table
                        className=" mt-2"
                        aria-labelledby="tableTitle"
                        style={{ border: "0px", color: "white" }}
                      >
                        <TableBody>
                          <TableRow>
                            <TableCell component="th" scope="row" align="left">
                              <b>{meetingDetails && meetingDetails.title}</b>
                            </TableCell>
                            <TableCell component="th" scope="row" align="right">
                              Title
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Paper>
                  )}
                </div>
                <div className="flex flex-col mt-16">
                  <Grid justify="left" style={{ color: `#605ea0` }} container>
                    <Grid
                      item
                      xs={2.7}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleToggleMenu(0);
                      }}
                    >
                      <Typography variant="h6" justify="left">
                        General Meeting Details
                      </Typography>
                    </Grid>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleToggleMenu(0);
                      }}
                    >
                      {menuToggle[0] ? (
                        <ArrowDropDown style={{ fontSize: 35 }} />
                      ) : (
                        <ArrowDropUp style={{ fontSize: 35 }} />
                      )}
                    </span>
                  </Grid>

                  {menuToggle[0] && (
                    <Paper
                      className=" mt-2"
                      aria-labelledby="tableTitle"
                      style={{ border: "2px solid", color: "lightgrey" }}
                    >
                      <Table
                        className=" mt-2"
                        aria-labelledby="tableTitle"
                        style={{ border: "0px", color: "white" }}
                      >
                        <TableBody>
                          <TableRow>
                            <TableCell component="th" scope="row" align="left">
                              <b>{meetingDetails && meetingDetails.title}</b>
                            </TableCell>
                            <TableCell component="th" scope="row" align="right">
                              Title
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell component="th" scope="row" align="left">
                              <b>Description</b>
                            </TableCell>
                            <TableCell component="th" scope="row" align="right">
                              {meetingDetails && meetingDetails.description}
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell component="th" scope="row" align="left">
                              <b>
                                {moment(
                                  meetingDetails && meetingDetails.start
                                ).format("YYYY-MM-DD hh:mm A")}
                              </b>
                            </TableCell>
                            <TableCell component="th" scope="row" align="right">
                              Start
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell component="th" scope="row" align="left">
                              <b>
                                {moment(
                                  meetingDetails && meetingDetails.end
                                ).format("YYYY-MM-DD hh:mm A")}
                              </b>
                            </TableCell>
                            <TableCell component="th" scope="row" align="right">
                              End
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <div
                        style={{ justifyContent: "center" }}
                        className="w-full flex flex-wrap mt-8 mb-2"
                      >
                        {meetingDetails &&
                          meetingDetails.attendees.map((member) => {
                            return (
                              <Tooltip title={member && member.label}>
                                <Avatar
                                  style={{
                                    backgroundColor:
                                      colors[Math.floor(Math.random() * 6)],
                                  }}
                                  className="mr-8 w-32 h-32"
                                >
                                  {" "}
                                  {member &&
                                    member.label &&
                                    member.label.charAt(0).toUpperCase()}
                                </Avatar>
                              </Tooltip>
                            );
                          })}
                      </div>
                    </Paper>
                  )}
                </div>
              </Grid>
            </Grid>
          )}
        </div>
      }
      ref={pageLayout}
      innerScroll
    />
  );
}
