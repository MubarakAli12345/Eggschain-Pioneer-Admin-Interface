import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { API_BASE_URL } from "app/main/api-config/api";
import apiService from "../../../helper/apiService";
import Stacks from "./Stacks";

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
  remainingCounter: {
    float: "right",
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
  const [MetaDataLimit, setMetaDataLimit] = useState(140);
  const [LocationLimit, setLocationLimit] = useState(50);

  const [MetaData, setMetaData] = useState("");
  const [LocationData, setLocationData] = useState("");
  const { CloseMeetingForm } = props;
  var showDate = new Date();
  let seconds;
  let minutes;
  // console.log(
  //   "helooooooooooooooooooooo",
  //   showDate.getSeconds().toString().length
  // );
  if (showDate.getSeconds().toString().length == 1) {
    seconds = "0" + showDate.getSeconds();
  } else {
    seconds = showDate.getSeconds();
  }
  if (showDate.getMinutes().toString().length == 1) {
    minutes = "0" + showDate.getMinutes();
  } else {
    minutes = showDate.getMinutes();
  }
  var displayTodayDate =
    showDate.getMonth() +
    1 +
    "/" +
    showDate.getDate() +
    "/" +
    showDate.getFullYear();

  if (showDate.getTimezoneOffset() <= -1) {
    var timeZoneOffset = `(UTC+${-(showDate.getTimezoneOffset() / 60)})`;
  }
  if (showDate.getTimezoneOffset() >= 1) {
    var timeZoneOffset = `(UTC-${+(showDate.getTimezoneOffset() / 60)})`;
  }
  if (showDate.getTimezoneOffset() == 0) {
    var timeZoneOffset = `(UTC)`;
  }

  var displayTime =
    showDate.getHours() + ":" + minutes + ":" + seconds + " " + timeZoneOffset;

  const { handleReload, handleFeedBackClose, meetingFeedback } = props;
  const dispatch = useDispatch();
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
  const userData = useSelector(({ auth }) => auth.user.data);
  const [MeetingInfromationForm, setMeetingInfromationForm] = useState(
    meetingFeedback ? meetingFeedback : null
  );

  async function handleSubmit() {
    // axios.post(`${API_BASE_URL}initiative/addUpdateInitiative`, Object.assign(MeetingInfromationForm, { host: userData.email }) ).then(() => {
    //     handleReload("NewMeeting");
    //     if (handleFeedBackClose)
    //         handleFeedBackClose();
    //     else
    //         props.CloseMeetingForm();

    // });
    await apiService.postApi(
      `${API_BASE_URL}initiative/addUpdateInitiative`,
      Object.assign(MeetingInfromationForm, { host: userData.email })
    );
    handleReload("NewMeeting");
    if (handleFeedBackClose) handleFeedBackClose();
    else props.CloseMeetingForm();
  }

  const handleMeetingInformationChange = (input) => (e) => {
    const MAX_CHARS = 140;
    const remaining = MAX_CHARS - e.target.value.length;
    setMetaData(e.target.value);
    setMetaDataLimit(remaining);
  };
  const handleLocationChange = (input) => (e) => {
    const MAX_CHARS = 50;
    const remaining = MAX_CHARS - e.target.value.length;
    setLocationData(e.target.value);

    setLocationLimit(remaining);
  };

  const handleFileUpload = () => (e) => {
   // console.log("EVENT", e.target);
  };

  const validateInitiative = () => {
    if (
      MeetingInfromationForm &&
      MeetingInfromationForm.title &&
      MeetingInfromationForm.description
    )
      return true;
    else return false;
  };
  const placeHolderFlag = () => {
    if (MetaDataLimit == 140) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <FusePageSimple
      content={
        <div className="p-16 sm:p-24 max-w-2xl">
          <div>
            <div>
              <ValidatorForm
                // onSubmit={handleSubmit}
                // onError={formError}
                // className={classes.root}
                noValidate
                autoComplete="off"
              >
                <div className="pt-20">
                  <TextValidator
                    id="Date"
                    label="Date"
                    className="mb-2"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    readOnly="true"
                    value={displayTodayDate}
                    variant="outlined"
                    autoFocus
                    required
                    fullWidth
                    disabled="true"
                  />
                </div>

                <div className="pt-20">
                  <TextValidator
                    id="time"
                    label="Time"
                    className="mb-2"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    readOnly="true"
                    value={displayTime}
                    variant="outlined"
                    autoFocus
                    required
                    fullWidth
                    disabled="true"
                  />
                </div>
                <div className="pt-20">
                  <TextValidator
                    className="mb-2"
                    id="loc"
                    label="Location"
                    type="text"
                    name="desc"
                    value={
                      MeetingInfromationForm &&
                      MeetingInfromationForm.description
                        ? MeetingInfromationForm.description
                        : null
                    }
                    onChange={handleLocationChange("location")}
                    required
                    multiline
                    rows={1}
                    variant="outlined"
                    fullWidth
                    inputProps={{ maxLength: 50 }}
                  />
                  <div>
                    <p className={classes.remainingCounter}>
                      {LocationLimit} characters remaining
                    </p>
                  </div>
                </div>

                <div className="pt-20">
                  <TextValidator
                    style={{ paddingTop: "15px" }}
                    className="mb-2"
                    id="desc"
                    label="Description"
                    type="text"
                    name="desc"
                    value={
                      MeetingInfromationForm &&
                      MeetingInfromationForm.description
                        ? MeetingInfromationForm.description
                        : null
                    }
                    onChange={handleMeetingInformationChange("description")}
                    required
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                    inputProps={{ maxLength: 140 }}
                  />
                  <div>
                    <p className={classes.remainingCounter}>
                      {MetaDataLimit} characters remaining
                    </p>
                  </div>
                </div>

                {/* <div className="pt-20">
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        // style={{ display: 'none' }}
                                        id="raised-button-file"
                                        multiple
                                        type="file"
                                        onChange={handleFileUpload()}
                                    />
                                     <label htmlFor="raised-button-file">
                                        <Button variant="raised" component="span" className={classes.button}>
                                            Upload
                                    </Button>
                                    </label> 
                                </div> */}
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Stacks
                    disableFlag={placeHolderFlag()}
                    date={displayTodayDate}
                    time={displayTime}
                    location={LocationData}
                    metaData={MetaData}
                    formClose={CloseMeetingForm}
                    handleFeedBackClose={handleFeedBackClose}
                    handleEntry={props.handleEntry}
                    toasterHandler={props.toasterHandler}
                  />
                </Grid>
              </ValidatorForm>
            </div>
          </div>
        </div>
      }
      innerScroll
    />
  );
}

export default withReducer("eCommerceApp", reducer)(MeetingFeedBack);
