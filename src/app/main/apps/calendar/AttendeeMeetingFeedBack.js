import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Tab,
  Tabs,
  TextField,
  FormGroup,
  FormControlLabel,
  Switch,
  Avatar,
  Select,
  MenuItem,
  InputAdornment,
  Icon,
  Typography,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { FuseAnimate, FusePageCarded, FusePageSimple, FuseUtils } from "@fuse";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useForm } from "@fuse/hooks";
import { Link } from "react-router-dom";
import clsx from "clsx";
import _ from "@lodash";
import { useDispatch, useSelector } from "react-redux";
import withReducer from "app/store/withReducer";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
import Chip from "@material-ui/core/Chip";
import axios from "axios";
import { API_BASE_URL } from "app/main/api-config/api";
import moment from "moment";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import apiService from "../../../helper/apiService";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 48,
    padding: "0 30px",
  },
  productImageFeaturedStar: {
    position: "absolute",
    top: 0,
    right: 0,
    color: orange[400],
    opacity: 0,
  },
  button: {
    marginRight: theme.spacing(1),
    marginTop: "2%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  productImageUpload: {
    transitionProperty: "box-shadow",
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },
  productImageItem: {
    transitionProperty: "box-shadow",
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    "&:hover": {
      "& $productImageFeaturedStar": {
        opacity: 0.8,
      },
    },
    "&.featured": {
      pointerEvents: "none",
      boxShadow: theme.shadows[3],
      "& $productImageFeaturedStar": {
        opacity: 1,
      },
      "&:hover $productImageFeaturedStar": {
        opacity: 1,
      },
    },
  },
}));

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function AttendeeMeetingFeedBack(props) {
  const {
    handleReload,
    handleFeedBackClose,
    meetingFeedback,
    preMeetingFeedbacks,
    postMeetingFeedbacks,
  } = props;
  console.log("Meeting Feedback", meetingFeedback);
  const dispatch = useDispatch();
  const names = [
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
  ];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const classes = useStyles(props);
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const { form, handleChange, setForm } = useForm(null);
  const [MeetingInfromationForm, setMeetingInfromationForm] = useState(
    meetingFeedback ? meetingFeedback : null
  );
  const userData = useSelector(({ auth }) => auth.user.data);
  const [preMeetingFeedback, setPreFeedback] = useState(
    preMeetingFeedbacks
      ? _.merge(
          {
            feedbackVisibleAll: [""],
            feedbackVisibleOnlyHost: [],
            feedbackAnonymousVisibleOnlyHost: [],
            feedbackAnonymous: [],
          },
          preMeetingFeedbacks
        )
      : {
          feedbackVisibleAll: [""],
          feedbackVisibleOnlyHost: [],
          feedbackAnonymousVisibleOnlyHost: [],
          feedbackAnonymous: [],
        }
  );
  const [postMeetingFeedback, setPostFeedback] = useState(
    postMeetingFeedbacks
      ? _.merge(
          {
            feedbackVisibleAll: [""],
            feedbackVisibleOnlyHost: [],
            feedbackAnonymousVisibleOnlyHost: [],
            feedbackAnonymous: [],
          },
          postMeetingFeedbacks
        )
      : {
          feedbackVisibleAll: [""],
          feedbackVisibleOnlyHost: [],
          feedbackAnonymousVisibleOnlyHost: [],
          feedbackAnonymous: [],
        }
  );

  function handleChangeTab(event, tabValue) {
    setTabValue(tabValue);
  }

  async function submitFeedback(feedbackType) {
    // axios
    //   .post(
    //     `${API_BASE_URL}feedback/add${feedbackType}`,
    //     Object.assign(preMeetingFeedback, {
    //       attendee: userData.email,
    //       meetingId: MeetingInfromationForm._id,
    //     })
    //   )
    //   .then(() => {
    //     console.log("Then Part");
    //     handleReload("NewMeeting");
    //     if (handleFeedBackClose) handleFeedBackClose();
    //     else props.CloseMeetingForm();
    //   });
    await apiService.postApi(
      `${API_BASE_URL}feedback/add${feedbackType}`,
      Object.assign(preMeetingFeedback, {
        attendee: userData.email,
        meetingId: MeetingInfromationForm._id,
      })
    );
    console.log("Then Part");
    handleReload("NewMeeting");
    if (handleFeedBackClose) handleFeedBackClose();
    else props.CloseMeetingForm();
  }
  async function submitFeedbackPost(feedbackType) {
    // axios
    //   .post(
    //     `${API_BASE_URL}feedback/add${feedbackType}`,
    //     Object.assign(postMeetingFeedback, {
    //       attendee: userData.email,
    //       meetingId: MeetingInfromationForm._id,
    //     })
    //   )
    //   .then(() => {
    //     console.log("Then Part");
    //     handleReload("NewMeeting");
    //     if (handleFeedBackClose) handleFeedBackClose();
    //     else props.CloseMeetingForm();
    //   });
    await apiService.postApi(
      `${API_BASE_URL}feedback/add${feedbackType}`,
      Object.assign(postMeetingFeedback, {
        attendee: userData.email,
        meetingId: MeetingInfromationForm._id,
      })
    );
    console.log("Then Part");
    handleReload("NewMeeting");
    if (handleFeedBackClose) handleFeedBackClose();
    else props.CloseMeetingForm();
  }

  function handleAddFeedback(feedbackType) {
    let updatedMeetingFormState;
    let feedbackList = preMeetingFeedback[feedbackType];
    console.log("feedbackType", feedbackType);
    feedbackList.push("");
    console.log("feedbackList", feedbackList);
    console.log(
      "MeetingInfromationForm AttendeeMeetingFeedBack",
      MeetingInfromationForm
    );
    updatedMeetingFormState = _.merge(MeetingInfromationForm, {
      preMeetingFeedback: {
        ...preMeetingFeedback,
        [feedbackType]: feedbackList,
      },
    });

    setPreFeedback(
      _.merge(
        {
          feedbackVisibleAll: [""],
          feedbackVisibleOnlyHost: [],
          feedbackAnonymousVisibleOnlyHost: [],
          feedbackAnonymous: [],
        },
        preMeetingFeedback
      )
    );
    setMeetingInfromationForm({ ...updatedMeetingFormState });
  }

  function handleRemoveFeedback(feedbackType) {
    let updatedMeetingFormState;
    let feedbackList = preMeetingFeedback[feedbackType];
    console.log("Before", feedbackList);
    if (feedbackList.length > 0) feedbackList.pop();
    console.log("Before", feedbackList);
    MeetingInfromationForm.preMeetingFeedback[feedbackType] = [...feedbackList];

    updatedMeetingFormState = { ...MeetingInfromationForm };
    console.log("updatedMeetingFormState", updatedMeetingFormState);
    setPreFeedback(
      _.merge(
        {
          feedbackVisibleAll: [""],
          feedbackVisibleOnlyHost: [],
          feedbackAnonymousVisibleOnlyHost: [],
          feedbackAnonymous: [],
        },
        preMeetingFeedback
      )
    );
    setMeetingInfromationForm({ ...updatedMeetingFormState });
  }

  function handleAddFeedbackPost(feedbackType) {
    let updatedMeetingFormState;
    let feedbackList = postMeetingFeedback[feedbackType];
    console.log("feedbackType", feedbackType);
    feedbackList.push("");
    console.log("feedbackList", feedbackList);
    updatedMeetingFormState = _.merge(MeetingInfromationForm, {
      postMeetingFeedback: {
        ...MeetingInfromationForm.postMeetingFeedback,
        [feedbackType]: feedbackList,
      },
    });

    setPreFeedback(
      _.merge(
        {
          feedbackVisibleAll: [""],
          feedbackVisibleOnlyHost: [],
          feedbackAnonymousVisibleOnlyHost: [],
          feedbackAnonymous: [],
        },
        postMeetingFeedback
      )
    );
    setMeetingInfromationForm({ ...updatedMeetingFormState });
  }

  function handleRemoveFeedbackPost(feedbackType) {
    let updatedMeetingFormState;
    let feedbackList = postMeetingFeedback[feedbackType];
    console.log("Before", feedbackList);
    if (feedbackList.length > 0) feedbackList.pop();
    console.log("Before", feedbackList);
    MeetingInfromationForm.postMeetingFeedback[feedbackType] = [
      ...feedbackList,
    ];

    updatedMeetingFormState = { ...MeetingInfromationForm };
    console.log("updatedMeetingFormState", updatedMeetingFormState);
    setPreFeedback(
      _.merge(
        {
          feedbackVisibleAll: [""],
          feedbackVisibleOnlyHost: [],
          feedbackAnonymousVisibleOnlyHost: [],
          feedbackAnonymous: [],
        },
        postMeetingFeedback
      )
    );
    setMeetingInfromationForm({ ...updatedMeetingFormState });
  }

  const handleListItemChangePre = (input, index, feedbackType = null) => (
    e
  ) => {
    let updatedMeetingFormState;
    let List;

    if (input === "preMeetingFeedback") {
      console.log("feedback", preMeetingFeedback);
      console.log("Feedback Value Change", e.target.value);
      List = preMeetingFeedback[feedbackType];
      List[index] = e.target.value;
      updatedMeetingFormState = _.merge(MeetingInfromationForm, {
        preMeetingFeedback: {
          ...MeetingInfromationForm.preMeetingFeedback,
          [feedbackType]: List,
        },
      });
      console.log("updatedMeetingFormState", updatedMeetingFormState);
    }

    setMeetingInfromationForm({ ...updatedMeetingFormState });
  };

  const handleListItemChangePost = (input, index, feedbackType = null) => (
    e
  ) => {
    let updatedMeetingFormState;
    let List;

    if (input === "postMeetingFeedback") {
      console.log("feedback", postMeetingFeedback);
      console.log("Feedback Value Change", e.target.value);
      List = postMeetingFeedback[feedbackType];
      List[index] = e.target.value;
      updatedMeetingFormState = _.merge(MeetingInfromationForm, {
        postMeetingFeedback: {
          ...MeetingInfromationForm.postMeetingFeedback,
          [feedbackType]: List,
        },
      });
      console.log("updatedMeetingFormState", updatedMeetingFormState);
    }

    setMeetingInfromationForm({ ...updatedMeetingFormState });
  };

  let FeedbackVisibleAllRendrer =
    preMeetingFeedback &&
    preMeetingFeedback.feedbackVisibleAll &&
    preMeetingFeedback.feedbackVisibleAll.map((value, index) => {
      return (
        <div key={index} className="pt-20">
          <div>
            <TextValidator
              className="mb-2"
              type="text"
              id="feedback"
              label="Feedback"
              variant="outlined"
              multiline
              rows="2"
              value={value}
              onChange={handleListItemChangePre(
                "preMeetingFeedback",
                index,
                "feedbackVisibleAll"
              )}
              validators={["required"]}
              errorMessages={["This field is required"]}
              fullWidth
            />
          </div>
        </div>
      );
    });
  let FeedbackVisibleHostsOnlyRendrer =
    preMeetingFeedback &&
    preMeetingFeedback.feedbackVisibleOnlyHost &&
    preMeetingFeedback.feedbackVisibleOnlyHost.map((value, index) => {
      return (
        <div key={index} className="pt-20">
          <TextValidator
            className="mb-2"
            id="feedbackVisibleOnlyHost"
            label="Feedback"
            variant="outlined"
            multiline
            rows="2"
            value={value}
            onChange={handleListItemChangePre(
              "preMeetingFeedback",
              index,
              "feedbackVisibleOnlyHost"
            )}
            // validators={['required']}
            // errorMessages={['This field is required']}
            fullWidth
          />
        </div>
      );
    });

  let FeedbackAnonymousOnlyHostRendrer =
    preMeetingFeedback &&
    preMeetingFeedback.feedbackAnonymousVisibleOnlyHost &&
    preMeetingFeedback.feedbackAnonymousVisibleOnlyHost.map((value, index) => {
      return (
        <div key={index} className="pt-20">
          <TextValidator
            className="mb-2"
            id="feedbackAnonymous"
            label="Feedback"
            variant="outlined"
            multiline
            rows="2"
            value={value}
            onChange={handleListItemChangePre(
              "preMeetingFeedback",
              index,
              "feedbackAnonymousVisibleOnlyHost"
            )}
            // validators={['required']}
            // errorMessages={['This field is required']}
            fullWidth
          />
        </div>
      );
    });

  let FeedbackAnonymousRendrer =
    preMeetingFeedback &&
    preMeetingFeedback.feedbackAnonymous &&
    preMeetingFeedback.feedbackAnonymous.map((value, index) => {
      return (
        <div key={index} className="pt-20">
          <TextValidator
            className="mb-2"
            id="feedbackAnonymous"
            label="Feedback"
            variant="outlined"
            multiline
            rows="2"
            value={value}
            onChange={handleListItemChangePre(
              "preMeetingFeedback",
              index,
              "feedbackAnonymous"
            )}
            // validators={['required']}
            // errorMessages={['This field is required']}
            fullWidth
          />
        </div>
      );
    });
  let FeedbackVisibleAllRendrerPost =
    postMeetingFeedback &&
    postMeetingFeedback.feedbackVisibleAll &&
    postMeetingFeedback.feedbackVisibleAll.map((value, index) => {
      return (
        <div key={index} className="pt-20">
          <div>
            <TextValidator
              className="mb-2"
              type="text"
              id="feedback"
              label="Feedback"
              variant="outlined"
              multiline
              rows="2"
              value={value}
              onChange={handleListItemChangePost(
                "postMeetingFeedback",
                index,
                "feedbackVisibleAll"
              )}
              // validators={['required']}
              // errorMessages={['This field is required']}
              fullWidth
            />
          </div>
        </div>
      );
    });
  let FeedbackVisibleHostsOnlyRendrerPost =
    postMeetingFeedback &&
    postMeetingFeedback.feedbackVisibleOnlyHost &&
    postMeetingFeedback.feedbackVisibleOnlyHost.map((value, index) => {
      return (
        <div key={index} className="pt-20">
          <TextValidator
            className="mb-2"
            id="feedbackVisibleOnlyHost"
            label="Feedback"
            variant="outlined"
            multiline
            rows="2"
            value={value}
            onChange={handleListItemChangePost(
              "postMeetingFeedback",
              index,
              "feedbackVisibleOnlyHost"
            )}
            // validators={['required']}
            // errorMessages={['This field is required']}
            fullWidth
          />
        </div>
      );
    });

  let FeedbackAnonymousOnlyHostRendrerPost =
    postMeetingFeedback &&
    postMeetingFeedback.feedbackAnonymousVisibleOnlyHost &&
    postMeetingFeedback.feedbackAnonymousVisibleOnlyHost.map((value, index) => {
      return (
        <div key={index} className="pt-20">
          <TextValidator
            className="mb-2"
            id="feedbackAnonymous"
            label="Feedback"
            variant="outlined"
            multiline
            rows="2"
            value={value}
            onChange={handleListItemChangePost(
              "postMeetingFeedback",
              index,
              "feedbackAnonymousVisibleOnlyHost"
            )}
            // validators={['required']}
            // errorMessages={['This field is required']}
            fullWidth
          />
        </div>
      );
    });

  let FeedbackAnonymousRendrerPost =
    postMeetingFeedback &&
    postMeetingFeedback.feedbackAnonymous &&
    postMeetingFeedback.feedbackAnonymous.map((value, index) => {
      return (
        <div key={index} className="pt-20">
          <TextValidator
            className="mb-2"
            id="feedbackAnonymous"
            label="Feedback"
            variant="outlined"
            multiline
            rows="2"
            value={value}
            onChange={handleListItemChangePost(
              "postMeetingFeedback",
              index,
              "feedbackAnonymous"
            )}
            // validators={['required']}
            // errorMessages={['This field is required']}
            fullWidth
          />
        </div>
      );
    });

  let [menuToggle, setMenuToggle] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleToggleMenu = (i) => {
    menuToggle = menuToggle.map((menu, index) => {
      if (index === i) return !menu;
      return menu;
    });
    setMenuToggle(menuToggle);
  };

  return (
    <FusePageSimple
      // classes={{
      //     toolbar: "p-0",
      //     header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
      // }}

      contentToolbar={
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          classes={{ root: "w-full h-114" }}
        >
          <Tab
            className={clsx(classes.root, "h-64 normal-case")}
            label="Questions"
          />
          <Tab
            className={clsx(classes.root, "h-64 normal-case")}
            label="Pre-Meeting"
            disabled={moment(new Date()).isAfter(meetingFeedback.start)}
          />
          <Tab
            className={clsx(classes.root, "h-64 normal-case")}
            label="Post-Meeting"
            disabled={moment(new Date()).isBefore(meetingFeedback.start)}
          />
        </Tabs>
      }
      content={
        <div className="p-16 sm:p-24 max-w-2xl">
          {tabValue === 1 && (
            <div>
              <div>
                <ValidatorForm
                  // onSubmit={handleSubmit("preMeetingFeedback")}
                  // onError={formError}
                  // className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <Typography
                    variant="h6"
                    justify="left"
                    style={{ color: `#605ea0` }}
                  >
                    Feedback from me, visible to all
                  </Typography>
                  {FeedbackVisibleAllRendrer}
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className="flex pt-20"
                  >
                    <Button
                      type="button"
                      onClick={() => {
                        handleAddFeedback("feedbackVisibleAll");
                      }}
                      className="small"
                      color="secondary"
                    >
                      Add
                    </Button>
                    &nbsp;
                    <Button
                      type="button"
                      onClick={() => {
                        handleRemoveFeedback("feedbackVisibleAll");
                      }}
                      className="small"
                      style={{ color: "red" }}
                    >
                      Remove
                    </Button>
                  </Grid>
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
                        Feedback from me, visible only to host
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
                    <div>
                      {FeedbackVisibleHostsOnlyRendrer}
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="flex pt-20"
                      >
                        <Button
                          type="button"
                          onClick={() => {
                            handleAddFeedback("feedbackVisibleOnlyHost");
                          }}
                          className="small"
                          color="secondary"
                        >
                          Add
                        </Button>
                        &nbsp;
                        <Button
                          type="button"
                          onClick={() => {
                            handleRemoveFeedback("feedbackVisibleOnlyHost");
                          }}
                          className="small"
                          style={{ color: "red" }}
                        >
                          Remove
                        </Button>
                      </Grid>
                    </div>
                  )}

                  <Grid justify="left" style={{ color: `#605ea0` }} container>
                    <Grid
                      item
                      xs={2.7}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleToggleMenu(1);
                      }}
                    >
                      <Typography variant="h6" justify="left">
                        Anonymous Feedback visible only to host
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
                    <div>
                      {FeedbackAnonymousOnlyHostRendrer}
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="flex pt-20"
                      >
                        <Button
                          type="button"
                          onClick={() => {
                            handleAddFeedback(
                              "feedbackAnonymousVisibleOnlyHost"
                            );
                          }}
                          className="small"
                          color="secondary"
                        >
                          Add
                        </Button>
                        &nbsp;
                        <Button
                          type="button"
                          onClick={() => {
                            handleRemoveFeedback(
                              "feedbackAnonymousVisibleOnlyHost"
                            );
                          }}
                          className="small"
                          style={{ color: "red" }}
                        >
                          Remove
                        </Button>
                      </Grid>
                    </div>
                  )}

                  <Grid justify="left" style={{ color: `#605ea0` }} container>
                    <Grid
                      item
                      xs={2.7}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleToggleMenu(2);
                      }}
                    >
                      <Typography variant="h6" justify="left">
                        Anonymous feedback to all
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
                  {/* <h2 style={{ color: '#3C4252' }}>Anonymous feedback to all</h2> */}
                  {menuToggle[2] && (
                    <div>
                      {FeedbackAnonymousRendrer}
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="flex pt-20"
                      >
                        <Button
                          type="button"
                          onClick={() => {
                            handleAddFeedback("feedbackAnonymous");
                          }}
                          className="small"
                          color="secondary"
                        >
                          Add
                        </Button>
                        &nbsp;
                        <Button
                          type="button"
                          onClick={() => {
                            handleRemoveFeedback("feedbackAnonymous");
                          }}
                          className="small"
                          style={{ color: "red" }}
                        >
                          Remove
                        </Button>
                      </Grid>
                    </div>
                  )}

                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      onClick={() => {
                        submitFeedback("premeetingFeedback");
                      }}
                    >
                      Save Pre-Meeting Feedback
                    </Button>
                  </Grid>
                </ValidatorForm>
              </div>
            </div>
          )}

          {tabValue === 2 && (
            <div>
              <div>
                <ValidatorForm
                  // onSubmit={handleSubmit("preMeetingFeedback")}
                  // onError={formError}
                  // className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  {/* <h2 style={{ color: '#3C4252' }}></h2> */}
                  <Typography
                    variant="h6"
                    justify="left"
                    style={{ color: `#605ea0` }}
                  >
                    Feedback from me, visible to all
                  </Typography>
                  {FeedbackVisibleAllRendrerPost}
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className="flex pt-20"
                  >
                    <Button
                      type="button"
                      onClick={() => {
                        handleAddFeedbackPost("feedbackVisibleAll");
                      }}
                      className="small"
                      color="secondary"
                    >
                      Add
                    </Button>
                    &nbsp;
                    <Button
                      type="button"
                      onClick={() => {
                        handleRemoveFeedbackPost("feedbackVisibleAll");
                      }}
                      className="small"
                      style={{ color: "red" }}
                    >
                      Remove
                    </Button>
                  </Grid>
                  {/* <h2 style={{ color: '#3C4252' }}>Feedback visible only to host</h2> */}
                  <Grid justify="left" style={{ color: `#605ea0` }} container>
                    <Grid
                      item
                      xs={2.7}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleToggleMenu(3);
                      }}
                    >
                      <Typography variant="h6" justify="left">
                        Feedback from me, visible only to host
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
                      {FeedbackVisibleHostsOnlyRendrerPost}
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="flex pt-20"
                      >
                        <Button
                          type="button"
                          onClick={() => {
                            handleAddFeedbackPost("feedbackVisibleOnlyHost");
                          }}
                          className="small"
                          color="secondary"
                        >
                          Add
                        </Button>
                        &nbsp;
                        <Button
                          type="button"
                          onClick={() => {
                            handleRemoveFeedbackPost("feedbackVisibleOnlyHost");
                          }}
                          className="small"
                          style={{ color: "red" }}
                        >
                          Remove
                        </Button>
                      </Grid>
                    </div>
                  )}
                  <Grid justify="left" style={{ color: `#605ea0` }} container>
                    <Grid
                      item
                      xs={2.7}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleToggleMenu(4);
                      }}
                    >
                      <Typography variant="h6" justify="left">
                        Anonymous feedback visible only to host
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
                  {/* <h2 style={{ color: '#3C4252' }}>Anonymous feedback</h2> */}
                  {menuToggle[4] && (
                    <div>
                      {FeedbackAnonymousOnlyHostRendrerPost}
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="flex pt-20"
                      >
                        <Button
                          type="button"
                          onClick={() => {
                            handleAddFeedbackPost(
                              "feedbackAnonymousVisibleOnlyHost"
                            );
                          }}
                          className="small"
                          color="secondary"
                        >
                          Add
                        </Button>
                        &nbsp;
                        <Button
                          type="button"
                          onClick={() => {
                            handleRemoveFeedbackPost(
                              "feedbackAnonymousVisibleOnlyHost"
                            );
                          }}
                          className="small"
                          style={{ color: "red" }}
                        >
                          Remove
                        </Button>
                      </Grid>
                    </div>
                  )}
                  <Grid justify="left" style={{ color: `#605ea0` }} container>
                    <Grid
                      item
                      xs={2.7}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleToggleMenu(5);
                      }}
                    >
                      <Typography variant="h6" justify="left">
                        Anonymous feedback to all
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
                  {/* <h2 style={{ color: '#3C4252' }}>Anonymous feedback</h2> */}
                  {menuToggle[5] && (
                    <div>
                      {FeedbackAnonymousRendrerPost}
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className="flex pt-20"
                      >
                        <Button
                          type="button"
                          onClick={() => {
                            handleAddFeedbackPost("feedbackAnonymous");
                          }}
                          className="small"
                          color="secondary"
                        >
                          Add
                        </Button>
                        &nbsp;
                        <Button
                          type="button"
                          onClick={() => {
                            handleRemoveFeedbackPost("feedbackAnonymous");
                          }}
                          className="small"
                          style={{ color: "red" }}
                        >
                          Remove
                        </Button>
                      </Grid>
                    </div>
                  )}

                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      onClick={() => {
                        submitFeedbackPost("postmeetingFeedback");
                      }}
                    >
                      Save Post-Meeting Feedback
                    </Button>
                  </Grid>
                </ValidatorForm>
              </div>
            </div>
          )}
          {tabValue === 0 && (
            <div>
              <ul>
                {MeetingInfromationForm &&
                  MeetingInfromationForm.solicitInitialFeedback &&
                  MeetingInfromationForm.solicitInitialFeedback.map(
                    (question, index) => (
                      <li>
                        <b>{question}</b>
                      </li>
                    )
                  )}
              </ul>
            </div>
          )}
        </div>
      }
      innerScroll
    />
  );
}

export default withReducer("eCommerceApp", reducer)(AttendeeMeetingFeedBack);
