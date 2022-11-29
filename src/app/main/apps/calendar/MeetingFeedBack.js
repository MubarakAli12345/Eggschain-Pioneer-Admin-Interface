import React, { useEffect, useState } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
import MemberSelect from "./MemberSelect";
import axios from "axios";
import { API_BASE_URL } from "app/main/api-config/api";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import moment from "moment";
import AddIcon from "@material-ui/icons/AddCircleOutlineOutlined";
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

function MeetingFeedBack(props) {
  const { handleReload, handleFeedBackClose, meetingFeedback, initiatives } =
    props;
  console.log("Meeting Feedback", meetingFeedback);
  console.log("initiatives MeetingFeedback", initiatives);
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
  const [FeedBackQuestions, setFeedBackQuestions] = useState(
    meetingFeedback && meetingFeedback.solicitInitialFeedback
      ? [...meetingFeedback.solicitInitialFeedback]
      : [""]
  );
  const [publicNotes, setMeetingNotes] = useState(
    meetingFeedback && meetingFeedback.publicNotes
      ? [...meetingFeedback.publicNotes]
      : [""]
  );
  const [privateNotes, setMeetingNotesPrivate] = useState(
    meetingFeedback && meetingFeedback.privateNotes
      ? [...meetingFeedback.privateNotes]
      : [""]
  );
  const [publicDecision, setMeetingDecissions] = useState(
    meetingFeedback && meetingFeedback.publicDecision
      ? [...meetingFeedback.publicDecision]
      : [""]
  );
  const [privateDecision, setMeetingDecissionsPrivate] = useState(
    meetingFeedback && meetingFeedback.privateDecision
      ? [...meetingFeedback.privateDecision]
      : [""]
  );
  const { form, handleChange, setForm } = useForm(null);
  const [MeetingInfromationForm, setMeetingInfromationForm] = useState(
    meetingFeedback ? meetingFeedback : null
  );
  const [initiative, setInitiative] = useState(
    meetingFeedback && meetingFeedback.initiative != null
      ? meetingFeedback.initiative
      : null
  );
  const [personName, setPersonName] = useState(
    meetingFeedback ? [...meetingFeedback.attendees] : []
  );
  const [QuestionFromMembers, setQuestionMembers] = useState([]);
  const [attendeeMembers, setAttendeeMembers] = useState([]);
  const userData = useSelector(({ auth }) => auth.user.data);

  useEffect(() => {
    getAttendees();
  }, []);

  const getAttendees = async () => {
    let attendees;
    attendees = await apiService.getApi(`${API_BASE_URL}auth/getAttendees`);
    attendees = attendees.filter((x) => x.email != userData.email);
    setAttendeeMembers(attendees);
  };

  function handleChangeTab(event, tabValue) {
    setTabValue(tabValue);
  }

  function handleChipChange(value, name) {
    // setForm(_.set({...form}, name, value.map(item => item.value)));
  }

  function setFeaturedImage(id) {
    // setForm(_.set({...form}, 'featuredImageId', id));
  }

  function handleAddFeedbackQuestion() {
    let QuestionList = FeedBackQuestions;
    QuestionList.push("");
    setFeedBackQuestions([...QuestionList]);
  }

  function handleRemoveFeedbackQuestion() {
    let QuestionList = FeedBackQuestions;
    if (QuestionList.length > 0) {
      QuestionList.pop();
      setFeedBackQuestions([...QuestionList]);
    }
  }
  function handleAddPoint() {
    let PointList = publicNotes;
    PointList.push("");
    setMeetingNotes([...PointList]);
  }

  function handleRemovePoint() {
    let PointList = publicNotes;
    if (PointList.length > 0) {
      PointList.pop();
      setMeetingNotes([...PointList]);
    }
  }

  function handleAddPrivatePoint() {
    let PointList = privateNotes;
    PointList.push("");
    setMeetingNotesPrivate([...PointList]);
  }

  function handleRemovePrivatePoint() {
    let PointList = privateNotes;
    if (PointList.length > 0) {
      PointList.pop();
      setMeetingNotesPrivate([...PointList]);
    }
  }

  function handleAddMeetingDecisiions() {
    let MeetingDecisiions = publicDecision;
    MeetingDecisiions.push("");
    setMeetingNotes([...MeetingDecisiions]);
  }

  function handleRemoveMeetingDecisiion() {
    let MeetingDecisiions = publicDecision;
    if (MeetingDecisiions.length > 0) {
      MeetingDecisiions.pop();
      setMeetingNotes([...MeetingDecisiions]);
    }
  }

  function handleAddMeetingDecisiionsPrivate() {
    let MeetingDecisiions = privateDecision;
    MeetingDecisiions.push("");
    setMeetingNotesPrivate([...MeetingDecisiions]);
  }

  function handleRemoveMeetingDecisiionPrivate() {
    let MeetingDecisiions = privateDecision;
    if (MeetingDecisiions.length > 0) {
      MeetingDecisiions.pop();
      setMeetingNotesPrivate([...MeetingDecisiions]);
    }
  }

  async function handleSubmit() {
    // await axios
    //   .post(
    //     `${API_BASE_URL}meetings/createMeeting`,
    //     Object.assign(MeetingInfromationForm, { host: userData.email })
    //   )
    //   .then(() => {
    //     handleReload("NewMeeting");
    //     if (handleFeedBackClose) handleFeedBackClose();
    //     else props.CloseMeetingForm();
    //   });

    await apiService.postApi(
      `${API_BASE_URL}meetings/createMeeting`,
      Object.assign(MeetingInfromationForm, { host: userData.email })
    );
    handleReload("NewMeeting");
    if (handleFeedBackClose) handleFeedBackClose();
    else props.CloseMeetingForm();

    // await axios
    //   .post(`${API_BASE_URL}auth/email`, {
    //     EmailList: MeetingInfromationForm.attendees.map((item) => item.value),
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });

    await apiService.postApi(`${API_BASE_URL}auth/email`, {
      EmailList: MeetingInfromationForm.attendees.map((item) => item.value),
    });
  }

  const handleMembersChange = (value) => {
    console.log("handleMembersChange", value);
    setPersonName(value);
    let updatedMeetingFormState;
    updatedMeetingFormState = { ...MeetingInfromationForm };
    updatedMeetingFormState.attendees = [];
    updatedMeetingFormState.attendees = value;
    setMeetingInfromationForm({ ...updatedMeetingFormState });
  };

  const handleQuestionMembersChange = (event) => {
    setQuestionMembers(event.target.value);
  };

  const handleMeetingInformationChange = (input) => (e) => {
    let updatedMeetingFormState;
    if (input === "start") {
      updatedMeetingFormState = _.merge(MeetingInfromationForm, {
        ["start"]: e.target.value,
      });
      updatedMeetingFormState = _.merge(MeetingInfromationForm, {
        ["end"]: moment(e.target.value)
          .add(1, "hour")
          .format("YYYY-MM-DD[T]HH:mm:ss"),
      });
    } else
      updatedMeetingFormState = _.merge(MeetingInfromationForm, {
        [input]: e.target.value,
      });

    setMeetingInfromationForm({ ...updatedMeetingFormState });
  };

  const handleInitiativeChange = (input) => (e) => {
    console.log("Initiative Change", e.target);
    setInitiative({ _id: e.target.value, title: e.target.name });
    let updatedMeetingFormState;
    updatedMeetingFormState = _.merge(MeetingInfromationForm, {
      [input]: { _id: e.target.value, title: e.target.name },
    });
    setMeetingInfromationForm({ ...updatedMeetingFormState });
    console.log({ ...updatedMeetingFormState });
  };

  const handleListItemChange = (input, index) => (e) => {
    let updatedMeetingFormState;
    let List;

    if (input === "solicitInitialFeedback") {
      List = FeedBackQuestions;
      List[index] = e.target.value;
      updatedMeetingFormState = _.merge(MeetingInfromationForm, {
        ...MeetingInfromationForm,
        [input]: List,
      });
    } else if (input === "publicNotes") {
      List = publicNotes;
      List[index] = e.target.value;
      updatedMeetingFormState = _.merge(MeetingInfromationForm, {
        ...MeetingInfromationForm,
        [input]: List,
      });
    } else if (input === "privateNotes") {
      List = privateNotes;
      List[index] = e.target.value;
      updatedMeetingFormState = _.merge(MeetingInfromationForm, {
        ...MeetingInfromationForm,
        [input]: List,
      });
    } else if (input === "publicDecision") {
      List = publicDecision;
      List[index] = e.target.value;
      updatedMeetingFormState = _.merge(MeetingInfromationForm, {
        ...MeetingInfromationForm,
        [input]: List,
      });
    } else if (input === "privateDecision") {
      List = privateDecision;
      List[index] = e.target.value;
      updatedMeetingFormState = _.merge(MeetingInfromationForm, {
        ...MeetingInfromationForm,
        [input]: List,
      });
    }

    setMeetingInfromationForm({ ...updatedMeetingFormState });
  };

  const validateMeeting = (tab) => {
    if (tab === 0) {
      if (
        MeetingInfromationForm &&
        MeetingInfromationForm.initiative &&
        MeetingInfromationForm.title &&
        MeetingInfromationForm.description &&
        personName.length > 0 &&
        MeetingInfromationForm.start &&
        MeetingInfromationForm.end &&
        MeetingInfromationForm.attendees.length > 0
      )
        return true;
      else return false;
    }
    if (tab === 1) {
      if (
        MeetingInfromationForm &&
        MeetingInfromationForm.solicitInitialFeedback &&
        MeetingInfromationForm.solicitInitialFeedback.length > 0 &&
        MeetingInfromationForm.solicitInitialFeedback[0] != ""
      )
        return true;
      else return false;
    }
  };

  let MeetingQuestionRenderer = FeedBackQuestions.map((value, index) => {
    return (
      <div key={index} className="pt-20">
        <div>
          <TextValidator
            className="mb-2"
            type="text"
            id="meetingQuestions"
            label="Question/Suggestion"
            variant="outlined"
            multiline
            rows="2"
            value={value}
            onChange={handleListItemChange("solicitInitialFeedback", index)}
            validators={["required"]}
            errorMessages={["This field is required"]}
            autoFocus
            fullWidth
            required
          />
        </div>
      </div>
    );
  });
  let MeetingNotesRenderer = publicNotes.map((value, index) => {
    return (
      <div key={index} className="pt-20">
        <TextValidator
          className="mb-2"
          id="meetingNotes"
          label="Note"
          variant="outlined"
          multiline
          rows="2"
          value={value}
          onChange={handleListItemChange("publicNotes", index)}
          validators={["required"]}
          errorMessages={["This field is required"]}
          fullWidth
        />
      </div>
    );
  });
  let MeetingNotesRendererPrivate =
    privateNotes &&
    privateNotes.map((value, index) => {
      return (
        <div key={index} className="pt-20">
          <TextValidator
            className="mb-2"
            id="meetingNotes"
            label="Note"
            variant="outlined"
            multiline
            rows="2"
            value={value}
            onChange={handleListItemChange("privateNotes", index)}
            validators={["required"]}
            errorMessages={["This field is required"]}
            fullWidth
          />
        </div>
      );
    });
  let MeetingDecissionsRenderer =
    publicDecision &&
    publicDecision.map((value, index) => {
      return (
        <div key={index} className="pt-20">
          <TextValidator
            className="mb-2"
            id="meetingDecisions"
            label="Meeting Decisions"
            variant="outlined"
            multiline
            rows="2"
            value={value}
            onChange={handleListItemChange("publicDecision", index)}
            fullWidth
            autoFocus
          />
        </div>
      );
    });

  let MeetingDecissionsPrivateRenderer =
    privateDecision &&
    privateDecision.map((value, index) => {
      return (
        <div key={index} className="pt-20">
          <TextValidator
            className="mb-2"
            id="meetingDecisions"
            label="Meeting Decisions"
            variant="outlined"
            multiline
            rows="2"
            value={value}
            onChange={handleListItemChange("privateDecision", index)}
            fullWidth
          />
        </div>
      );
    });
  let InitiativesRender = initiatives.map((initiative, index) => {
    console.log("InitiativesRender", initiative.Id, initiative.title);
    if (meetingFeedback && meetingFeedback.initiative._id === initiative._id) {
      return (
        <MenuItem selected value={initiative._id}>
          {initiative.title}
        </MenuItem>
      );
    } else
      return <MenuItem value={initiative._id}>{initiative.title}</MenuItem>;
  });
  // InitiativesRender.push(<MenuItem selected value={-1}>Add new Initiative</MenuItem>)
  InitiativesRender.push(
    <MenuItem
      style={{ color: "blue" }}
      component={Link}
      to={{
        pathname: "/apps/initiatives",
        state: {
          openDialoge: true,
          role: "attendee",
        },
      }}
    >
      {" "}
      <AddIcon></AddIcon> Click to add New Initiative{" "}
    </MenuItem>
  );
  return (
    <FusePageSimple
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
            label="Meeting Agenda"
          />
          <Tab
            disabled={!validateMeeting(0)}
            className={clsx(classes.root, "h-64 normal-case")}
            label="Solicit Initial Feedback"
          />
          <Tab
            disabled={!validateMeeting(0) || !validateMeeting(1)}
            className={clsx(classes.root, "h-64 normal-case")}
            label="Pre-alignments thoughts captured by Organizer"
          />
          <Tab
            disabled={!validateMeeting(0) || !validateMeeting(1)}
            className={clsx(classes.root, "h-64 normal-case")}
            label="Meeting Decisions"
          />
        </Tabs>
      }
      content={
        <div className="p-16 sm:p-24 max-w-2xl">
          {tabValue === 0 && (
            <div>
              <div>
                <ValidatorForm
                  // onSubmit={props.handleNext}
                  // onError={formError}
                  // className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <div className="pt-20">
                    <Select
                      fullWidth
                      name="Initiative"
                      input={
                        <TextField
                          className="mb-24"
                          id="initiative"
                          label="Initiative"
                          variant="outlined"
                          value={initiative && initiative._id}
                          onChange={handleInitiativeChange("initiative")}
                          autoFocus
                          fullWidth
                          required
                        />
                      }
                    >
                      {InitiativesRender}
                    </Select>
                  </div>
                  <div className="pt-20">
                    <TextValidator
                      id="title"
                      label="Title"
                      className="mb-2"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="title"
                      value={
                        MeetingInfromationForm && MeetingInfromationForm.title
                          ? MeetingInfromationForm.title
                          : null
                      }
                      onChange={handleMeetingInformationChange("title")}
                      variant="outlined"
                      required
                      fullWidth
                      required
                    />
                  </div>
                  <div className="pt-20">
                    <TextValidator
                      className="mb-32"
                      id="desc"
                      label="Agenda"
                      type="text"
                      name="desc"
                      value={
                        MeetingInfromationForm &&
                        MeetingInfromationForm.description
                          ? MeetingInfromationForm.description
                          : null
                      }
                      onChange={handleMeetingInformationChange("description")}
                      multiline
                      rows={3}
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </div>
                  <div className="pt-20">
                    <TextValidator
                      id="start"
                      name="start"
                      label="Start"
                      type="datetime-local"
                      className="mb-2"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={
                        MeetingInfromationForm && MeetingInfromationForm.start
                          ? moment(MeetingInfromationForm.start).format(
                              "YYYY-MM-DD[T]HH:mm:ss"
                            )
                          : moment(new Date()).format()
                      }
                      onChange={handleMeetingInformationChange("start")}
                      validators={["required"]}
                      errorMessages={["This field is required"]}
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </div>
                  <div className="pt-20">
                    <TextValidator
                      className="mb-2"
                      id="end"
                      name="end"
                      label="End"
                      type="datetime-local"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={
                        MeetingInfromationForm && MeetingInfromationForm.end
                          ? moment(MeetingInfromationForm.end).format(
                              "YYYY-MM-DD[T]HH:mm:ss"
                            )
                          : MeetingInfromationForm &&
                            MeetingInfromationForm.start
                          ? moment(MeetingInfromationForm.start)
                              .add(1, "hour")
                              .format("YYYY-MM-DD[T]HH:mm:ss")
                          : null
                      }
                      onChange={handleMeetingInformationChange("end")}
                      validators={["required"]}
                      errorMessages={["This field is required"]}
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </div>

                  <div className="pt-20">
                    <MemberSelect
                      suggestions={attendeeMembers}
                      tags={personName}
                      handleMembersChange={handleMembersChange}
                    ></MemberSelect>
                  </div>

                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Button
                      disabled={tabValue === 0}
                      onClick={() => handleChangeTab(null, 1)}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      disabled={!validateMeeting(0)}
                      variant="contained"
                      color="secondary"
                      type="submit"
                      className={classes.button}
                      onClick={() => handleChangeTab(null, 1)}
                    >
                      Next
                    </Button>
                  </Grid>
                </ValidatorForm>
              </div>
            </div>
          )}

          {tabValue === 1 && (
            <div>
              <div>
                <ValidatorForm
                  onSubmit={handleSubmit}
                  // onError={formError}
                  // className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  {MeetingQuestionRenderer}
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
                        handleAddFeedbackQuestion();
                      }}
                      className="small"
                      color="secondary"
                    >
                      Add Feedback Question
                    </Button>
                    &nbsp;
                    <Button
                      type="button"
                      onClick={() => {
                        handleRemoveFeedbackQuestion();
                      }}
                      className="small"
                      style={{ color: "red" }}
                    >
                      Remove Feedback Question
                    </Button>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Button
                      disabled={tabValue === 0}
                      onClick={() => handleChangeTab(null, 0)}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      disabled={!validateMeeting(1)}
                      variant="contained"
                      color="secondary"
                      type="submit"
                      className={classes.button}
                      onClick={() => handleChangeTab(null, 2)}
                    >
                      Next
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
                  // onSubmit={props.handleNext}
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
                    Public Notes
                  </Typography>
                  <div>
                    <div className="pt-20">
                      <TextValidator
                        className="mb-2"
                        type="text"
                        id="topic"
                        label="Topic"
                        variant="outlined"
                        value={
                          MeetingInfromationForm &&
                          MeetingInfromationForm.publicTopic
                            ? MeetingInfromationForm.publicTopic
                            : null
                        }
                        onChange={handleMeetingInformationChange("publicTopic")}
                        validators={["required"]}
                        errorMessages={["This field is required"]}
                        autoFocus
                        fullWidth
                      />
                    </div>
                    {MeetingNotesRenderer}
                  </div>
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
                        handleAddPoint();
                      }}
                      className="small"
                      color="secondary"
                    >
                      Add Note
                    </Button>
                    &nbsp;
                    <Button
                      type="button"
                      onClick={() => {
                        handleRemovePoint();
                      }}
                      className="small"
                      style={{ color: "red" }}
                    >
                      Remove Note
                    </Button>
                  </Grid>

                  <Typography
                    variant="h6"
                    justify="left"
                    style={{ color: `#605ea0` }}
                  >
                    Private Notes
                  </Typography>
                  <div>
                    <div className="pt-20">
                      <TextValidator
                        className="mb-2"
                        type="text"
                        id="topic"
                        label="Topic"
                        variant="outlined"
                        value={
                          MeetingInfromationForm &&
                          MeetingInfromationForm.privateTopic
                            ? MeetingInfromationForm.privateTopic
                            : null
                        }
                        onChange={handleMeetingInformationChange(
                          "privateTopic"
                        )}
                        validators={["required"]}
                        errorMessages={["This field is required"]}
                        fullWidth
                      />
                    </div>
                    {MeetingNotesRendererPrivate}
                  </div>
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
                        handleAddPrivatePoint();
                      }}
                      className="small"
                      color="secondary"
                    >
                      Add Note
                    </Button>
                    &nbsp;
                    <Button
                      type="button"
                      onClick={() => {
                        handleRemovePrivatePoint();
                      }}
                      className="small"
                      style={{ color: "red" }}
                    >
                      Remove Note
                    </Button>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Button
                      disabled={tabValue === 0}
                      onClick={() => handleChangeTab(null, 1)}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      className={classes.button}
                      onClick={() => handleChangeTab(null, 3)}
                    >
                      Next
                    </Button>
                  </Grid>
                </ValidatorForm>
              </div>
            </div>
          )}
          {tabValue === 3 && (
            <div>
              <div>
                <ValidatorForm
                  // onSubmit={props.handleNext}
                  // onError={formError}
                  // className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <Typography
                      variant="h6"
                      justify="left"
                      style={{ color: `#605ea0` }}
                    >
                      Public Decisions
                    </Typography>
                    {MeetingDecissionsRenderer}
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
                          handleAddMeetingDecisiions();
                        }}
                        className="small"
                        color="secondary"
                      >
                        Add New Meeting Decision
                      </Button>
                      &nbsp;
                      <Button
                        type="button"
                        onClick={() => {
                          handleRemoveMeetingDecisiion();
                        }}
                        className="small"
                        style={{ color: "red" }}
                      >
                        Remove Meeting Decision
                      </Button>
                    </Grid>
                  </div>

                  <div>
                    <Typography
                      variant="h6"
                      justify="left"
                      style={{ color: `#605ea0` }}
                    >
                      Private Decisions
                    </Typography>
                    {MeetingDecissionsPrivateRenderer}
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
                          handleAddMeetingDecisiionsPrivate();
                        }}
                        className="small"
                        color="secondary"
                      >
                        Add New Meeting Decision
                      </Button>
                      &nbsp;
                      <Button
                        type="button"
                        onClick={() => {
                          handleRemoveMeetingDecisiionPrivate();
                        }}
                        className="small"
                        style={{ color: "red" }}
                      >
                        Remove Meeting Decision
                      </Button>
                    </Grid>
                  </div>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Button
                      disabled={tabValue === 0}
                      onClick={() => handleChangeTab(null, 2)}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      className={classes.button}
                      onClick={handleSubmit}
                    >
                      Finish
                    </Button>
                  </Grid>
                </ValidatorForm>
              </div>
            </div>
          )}
        </div>
      }
      innerScroll
    />
  );
}

export default withReducer("eCommerceApp", reducer)(MeetingFeedBack);
