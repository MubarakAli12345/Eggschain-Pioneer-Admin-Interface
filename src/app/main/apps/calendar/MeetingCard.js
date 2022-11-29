import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  Typography,
  Avatar,
  Icon,
  Divider,
  Tooltip,
} from "@material-ui/core";
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
import MeetingsList from "./MeetingsList";
import MeetingsFeedBack from "./MeetingFeedBack";
import AttendeeMeetingsFeedBack from "./AttendeeMeetingFeedBack";
import CancelIcon from "@material-ui/icons/Cancel";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "app/main/api-config/api";
import apiService from "../../../helper/apiService";

const useStyles = makeStyles((theme) => ({
  card: {
    transitionProperty: "box-shadow",
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    width: "230px",
  },
}));

function MeetingCard(props) {
  // const dispatch = useDispatch();
  // const meeting = useSelector(({scrummeetingApp}) => scrummeetingApp.meeting);
  let colors = ["orange", "pink", "blue", "red", "green", "purple"];
  const [provideFeedback, setProvideFeedback] = React.useState({
    index: null,
    provideFeedback: false,
  });
  const [showAttendees, setShowAttendees] = React.useState({
    index: null,
    showAttendees: false,
  });
  const {
    handleStatus,
    handleReload,
    initiatives,
    MeetingsData,
    initiativeTitle,
  } = props;
  console.log("Meetings Data", MeetingsData);
  console.log("initiatives MeetingCard", initiatives);
  const userRole = useSelector(({ auth }) => auth.user.role[0]);
  const userData = useSelector(({ auth }) => auth.user.data);
  console.log("User Role In MeetingCard.js", userRole);
  const [FeedBackToggler, setFeedBackToggler] = React.useState(false);
  const [meetingTitle, setMeetingTitle] = useState("");
  const [initiativePopupTitle, setInitiativePopupTitle] = useState("");
  const [role, setRole] = React.useState(userRole);
  const classes = useStyles(props);
  const { cardId, index } = props;
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
  // const checkItemsChecked = getCheckItemsChecked(card);
  // const checkItems = getCheckItems(card);
  // const commentsCount = getCommentsCount(card);
  const [meetingFeedback, setMeetingsFeedback] = React.useState(null);
  const [attendeeMembers, setAttendeeMembers] = useState();

  useEffect(() => {
    getAttendees();
  }, []);

  const getAttendees = async () => {
    let attendees;
    attendees = await apiService.getApi(`${API_BASE_URL}auth/getAttendees`);
    console.log("Attendees", attendees);
    // attendees = await axios
    //   .get(`${API_BASE_URL}auth/getAttendees`, header)
    //   .then((response) => {
    //     return response.data;
    //   });
    setAttendeeMembers(attendees);
    attendees = attendees.filter(
      (attendee) => attendee.email != userData.email
    );
  };
  function handleCardClick(ev, card) {
    ev.preventDefault();
    // dispatch(Actions.openCardDialog(card));
  }

  // function getCheckItemsChecked(card) {
  //     return _.sum(card.checklists.map(list => _.sum(list.checkItems.map(x => (x.checked ? 1 : 0)))));
  // }

  // function getCheckItems(card) {
  //     return _.sum(card.checklists.map(x => x.checkItems.length));
  // }

  // function getCommentsCount(card) {
  //     return _.sum(card.activities.map(x => (x.type === 'comment' ? 1 : 0)));
  // }
  function handleFeedBackToggler() {
    setFeedBackToggler(true);
  }
  function handleFeedBackClose() {
    setFeedBackToggler(false);
  }
  const meetingCards =
    MeetingsData && MeetingsData.length > 0 ? (
      MeetingsData.map((MeetingDetails, index) => {
        // let question = MeetingDetails && MeetingDetails.solicitInitialFeedback && MeetingDetails.solicitInitialFeedback[0].splice(' ').map((word, index) => {
        //     if(index < 3)
        //         return word + " ";
        // });
        console.log("MeetingDetails", MeetingDetails);
        return (
          <Card
            style={{
              border:
                ((MeetingDetails &&
                  MeetingDetails.preMeetingFeedback &&
                  MeetingDetails.preMeetingFeedback.length > 0 &&
                  MeetingDetails.preMeetingFeedback[0] &&
                  MeetingDetails.preMeetingFeedback[0].attendee &&
                  MeetingDetails.preMeetingFeedback[0].attendee.length > 0) ||
                  (MeetingDetails &&
                    MeetingDetails.postMeetingFeedback &&
                    MeetingDetails.postMeetingFeedback.length > 0 &&
                    MeetingDetails.postMeetingFeedback[0] &&
                    MeetingDetails.postMeetingFeedback[0].attendee &&
                    MeetingDetails.postMeetingFeedback[0].attendee.length >
                      0) ||
                  (MeetingDetails && MeetingDetails.host === userData.email)) ==
                true
                  ? "3px solid black"
                  : "3px solid red",
            }}
            onMouseEnter={() => {
              if (
                !(
                  (MeetingDetails &&
                    MeetingDetails.preMeetingFeedback &&
                    MeetingDetails.preMeetingFeedback.length > 0 &&
                    MeetingDetails.preMeetingFeedback[0] &&
                    MeetingDetails.preMeetingFeedback[0].attendee &&
                    MeetingDetails.preMeetingFeedback[0].attendee.length > 0) ||
                  (MeetingDetails &&
                    MeetingDetails.postMeetingFeedback &&
                    MeetingDetails.postMeetingFeedback.length > 0 &&
                    MeetingDetails.postMeetingFeedback[0] &&
                    MeetingDetails.postMeetingFeedback[0].attendee &&
                    MeetingDetails.postMeetingFeedback[0].attendee.length >
                      0) ||
                  (MeetingDetails && MeetingDetails.host === userData.email)
                ) == true
              )
                setProvideFeedback({ index: index, provideFeedback: true });
            }}
            onMouseLeave={() => {
              setProvideFeedback({ index: null, provideFeedback: false });
            }}
            className={clsx(
              classes.card,
              role === "Host"
                ? "m-16 rounded-4 cursor-pointer border-1"
                : "m-16 rounded-4 border-1"
            )}
          >
            {/* {meeting.settings.cardCoverImages && card.idAttachmentCover !== '' && (
                <img className="block" src={_.find(card.attachments, {id: card.idAttachmentCover}).src} alt="card cover"/>
            )} */}
            <div
              onClick={() => {
                // if (userData.email === MeetingDetails.host) {
                //   handleFeedBackToggler();
                //   setMeetingsFeedback(MeetingDetails);
                //   setRole("Host");
                // }
                props.history.push({
                  pathname: "/apps/meetings/details",
                  state: {
                    MeetingDetails: Object.assign(MeetingDetails, {
                      initiative:
                        MeetingDetails &&
                        MeetingDetails.initiative &&
                        MeetingDetails.initiative.title,
                    }),
                    attendeeMembers: attendeeMembers,
                  },
                });
              }}
            >
              <div style={{ height: "220px" }} className="p-16 pb-0">
                <div className="flex flex-wrap mb-8">
                  <span style={{ color: "black", fontSize: "18px" }}>
                    <strong>
                      {MeetingDetails &&
                        MeetingDetails.initiative &&
                        MeetingDetails.initiative.title}
                    </strong>
                  </span>
                </div>

                <div className="flex flex-wrap mb-8">
                  <span
                    style={{
                      color:
                        MeetingDetails && MeetingDetails.host === userData.email
                          ? "#32CD32"
                          : "blue",
                      fontSize: "18px",
                    }}
                  >
                    <strong>
                      {MeetingDetails && MeetingDetails.host === userData.email
                        ? "You are the organizer"
                        : "You are an attendee"}
                    </strong>
                  </span>
                </div>

                <Typography className="font-600 mb-12">
                  {MeetingDetails && MeetingDetails.title}
                </Typography>

                <div className="flex flex-wrap mb-8">
                  <span style={{ color: "blue" }}>
                    <strong>Questions</strong>
                    <br />
                    <span>
                      {MeetingDetails &&
                        MeetingDetails.solicitInitialFeedback &&
                        MeetingDetails.solicitInitialFeedback[0]
                          .split(" ", 3)
                          .join(" ")}{" "}
                      ...?
                    </span>
                  </span>
                </div>
                {provideFeedback.provideFeedback &&
                  provideFeedback.index === index && (
                    <div className="flex flex-wrap mb-8">
                      <span style={{ color: "red" }}>
                        <strong>Please provide feedback</strong>
                      </span>
                    </div>
                  )}
              </div>
            </div>
            <div className="p-16 pb-0">
              {showAttendees.showAttendees && showAttendees.index === index && (
                <div className="flex flex-wrap mb-4">
                  {MeetingDetails.attendees.map((member, index) => {
                    console.log("Member Avatar", member);
                    console.log("attendeeMembers", attendeeMembers);
                    if (index < 4) {
                      return (
                        <Tooltip title={member && member.label}>
                          {/* src={card.members.find(obj => { return obj.name === member }).avatar */}
                          {/* Math.floor(Math.random() * 6) */}
                          <Avatar
                            style={{ backgroundColor: colors[index] }}
                            className="mr-8 w-32 h-32"
                          >
                            {member && member.label.charAt(0).toUpperCase()}
                            {/* .charAt(0).toUpperCase() */}
                            {/* {member && member.label && attendeeMembers && attendeeMembers.find(obj => obj.fullName === member.value ||
                                                    obj.email === member.value
                                                ).fullName.charAt(0).toUpperCase()} */}
                          </Avatar>
                        </Tooltip>
                      );
                    }
                  })}
                  <span style={{ color: "orange", fontSize: "23px" }}>
                    <strong>
                      {MeetingDetails &&
                        MeetingDetails.attendees.length > 4 &&
                        `+${
                          MeetingDetails && MeetingDetails.attendees.length - 4
                        }`}
                    </strong>
                  </span>
                </div>
              )}
            </div>

            <div className="flex justify-between h-48 px-8 border-t-1">
              {MeetingDetails.attendees.filter(
                (e) => e.value === userData.email
              ).length > 0 && (
                <div className="flex items-center">
                  <Tooltip title="Feedback">
                    <Icon
                      style={{
                        color:
                          ((MeetingDetails &&
                            MeetingDetails.preMeetingFeedback &&
                            MeetingDetails.preMeetingFeedback.length > 0 &&
                            MeetingDetails.preMeetingFeedback[0] &&
                            MeetingDetails.preMeetingFeedback[0].attendee &&
                            MeetingDetails.preMeetingFeedback[0].attendee
                              .length > 0) ||
                            (MeetingDetails &&
                              MeetingDetails.postMeetingFeedback &&
                              MeetingDetails.postMeetingFeedback.length > 0 &&
                              MeetingDetails.postMeetingFeedback[0] &&
                              MeetingDetails.postMeetingFeedback[0].attendee &&
                              MeetingDetails.postMeetingFeedback[0].attendee
                                .length > 0)) == true
                            ? "green"
                            : "red",
                        fontSize:
                          ((MeetingDetails &&
                            MeetingDetails.preMeetingFeedback &&
                            MeetingDetails.preMeetingFeedback.length > 0 &&
                            MeetingDetails.preMeetingFeedback[0] &&
                            MeetingDetails.preMeetingFeedback[0].attendee &&
                            MeetingDetails.preMeetingFeedback[0].attendee
                              .length > 0) ||
                            (MeetingDetails &&
                              MeetingDetails.postMeetingFeedback &&
                              MeetingDetails.postMeetingFeedback.length > 0 &&
                              MeetingDetails.postMeetingFeedback[0] &&
                              MeetingDetails.postMeetingFeedback[0].attendee &&
                              MeetingDetails.postMeetingFeedback[0].attendee
                                .length > 0)) == true
                            ? "1.8 rem"
                            : "30px",
                      }}
                      className="text-18 mr-12 cursor-pointer"
                      color="action"
                      onClick={() => {
                        setMeetingsFeedback(MeetingDetails);
                        handleFeedBackToggler();
                        setRole("Attendee");
                        setMeetingTitle(MeetingDetails.title);
                        setInitiativePopupTitle(
                          MeetingDetails.initiative.title
                        );
                      }}
                    >
                      feedback
                    </Icon>
                  </Tooltip>
                </div>
              )}
              {MeetingDetails && MeetingDetails.host === userData.email && (
                <div className="flex items-center">
                  <Tooltip title="Edit">
                    <Icon
                      className="text-18 mr-12 cursor-pointer"
                      color="action"
                      onClick={() => {
                        // props.history.push({
                        //   pathname: "/apps/meetings/details",
                        //   state: {
                        //     MeetingDetails: Object.assign(MeetingDetails, {
                        //       initiative:
                        //         MeetingDetails &&
                        //         MeetingDetails.initiative &&
                        //         MeetingDetails.initiative.title,
                        //     }),
                        //     attendeeMembers: attendeeMembers,
                        //   },
                        // });
                        if (userData.email === MeetingDetails.host) {
                          handleFeedBackToggler();
                          setMeetingsFeedback(MeetingDetails);
                          setRole("Host");
                          setMeetingTitle(MeetingDetails.title);
                          setInitiativePopupTitle(
                            MeetingDetails.initiative.title
                          );
                        }
                      }}
                    >
                      edit
                    </Icon>
                  </Tooltip>
                </div>
              )}

              <div className="flex items-center">
                <Tooltip title="Attendee">
                  <Icon
                    style={{
                      color:
                        showAttendees.showAttendees &&
                        showAttendees.index === index
                          ? "green"
                          : null,
                    }}
                    className="text-18 mr-12 cursor-pointer"
                    color="action"
                    onClick={() => {
                      setShowAttendees({
                        index: index,
                        showAttendees: !showAttendees.showAttendees,
                      });
                    }}
                  >
                    people
                  </Icon>
                </Tooltip>
              </div>

              <div className="flex items-center justify-end">
                {moment(MeetingDetails.start).format("MMMM Do YYYY hh:mm A")}{" "}
                EST
              </div>
            </div>
          </Card>
        );
      })
    ) : (
      // <Typography className="mt-128 ml-256" color="textSecondary" variant="h5">
      <div className="mt-128">
        <Typography color="textSecondary" variant="h5">
          Please create your first meeting.
        </Typography>
      </div>
    );
  // </Typography>
  // <div className="mt-32 flex flex-1 items-center justify-center h-full"></div>
  return (
    <Grid container style={{ justifyContent: "center" }}>
      {meetingCards}
      {FeedBackToggler ? (
        <Dialog
          open={FeedBackToggler}
          maxWidth="lg"
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            <div className="flex justify-between h-90">
              <div className="flex items-center">
                {role === "Attendee" ? (
                  <div>
                    <b>Meeting Title:</b> {meetingTitle}
                    <br />
                    <b>Initiative Title:</b> {initiativePopupTitle}
                    <br />
                    <br />
                    Add Feedback
                  </div>
                ) : (
                  "Edit Meeting"
                )}
                {/* {role === "Attendee" ? `Add Feedback` : `Edit Meeting`} */}
              </div>

              <div className="flex justify-end">
                <CancelIcon
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={handleFeedBackClose}
                />
              </div>
            </div>
          </DialogTitle>
          <DialogContent
            style={
              role === "Attendee" ? { width: "600px", height: "800px" } : {}
            }
          >
            <DialogContentText>
              {role === "Attendee" ? (
                <AttendeeMeetingsFeedBack
                  handleReload={handleReload}
                  meetingFeedback={meetingFeedback}
                  preMeetingFeedbacks={
                    meetingFeedback &&
                    meetingFeedback.preMeetingFeedback &&
                    meetingFeedback.preMeetingFeedback.length > 0
                      ? meetingFeedback.preMeetingFeedback[0]
                      : null
                  }
                  postMeetingFeedbacks={
                    meetingFeedback &&
                    meetingFeedback.postMeetingFeedback &&
                    meetingFeedback.postMeetingFeedback.length > 0
                      ? meetingFeedback.postMeetingFeedback[0]
                      : null
                  }
                  handleStatus={handleStatus}
                  handleFeedBackClose={handleFeedBackClose}
                />
              ) : (
                <MeetingsFeedBack
                  initiatives={initiatives}
                  handleReload={handleReload}
                  meetingFeedback={meetingFeedback}
                  handleStatus={handleStatus}
                  handleFeedBackClose={handleFeedBackClose}
                />
              )}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : null}
    </Grid>
  );
}

export default MeetingCard;
