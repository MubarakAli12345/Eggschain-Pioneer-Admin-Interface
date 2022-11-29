import React, { useEffect } from "react";
import {
  Avatar,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemText,
  Paper,
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FuseAnimate, NavLinkAdapter } from "@fuse";
import Fab from "@material-ui/core/Fab";
import MeetingFeedBack from "./MeetingFeedBack";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CancelIcon from "@material-ui/icons/Cancel";
import moment from "moment";

import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  listItem: {
    color: "inherit!important",
    textDecoration: "none!important",
    height: 40,
    width: "calc(100% - 16px)",
    borderRadius: "0 20px 20px 0",
    paddingLeft: 24,
    paddingRight: 12,
    "&.active": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText + "!important",
      pointerEvents: "none",
      "& .list-item-icon": {
        color: "inherit",
      },
    },
    "& .list-item-icon": {
      marginRight: 16,
    },
  },
}));

function MeetingsSideBarContent(props) {
  const { initiatives } = props;
  const classes = useStyles(props);
  const [MeetingForm, setMeetingForm] = React.useState("");
  const [initiative, setInitiative] = React.useState({});
  const userData = useSelector(({ auth }) => auth.user.data);
  function handleMeetingFormStatus(status) {
    setMeetingForm(status);
  }
  function CloseMeetingForm() {
    setMeetingForm("");
  }

  let InitiativesRender = initiatives
    ? initiatives.map((initiative, index) => {
      
        return (
          <MenuItem value={initiative._id} name={initiative.title}>
            {initiative.title}
          </MenuItem>
        );
      })
    : null;

  const handleInitiativeChange = (e) => {
    console.log("Initiative Change", e.target);
    let initiativeId = e.target.value;
    let initiativeTitle = initiatives.filter(
      (obj) => obj._id === e.target.value
    );
    setInitiative({ _id: e.target.value, title: initiativeTitle[0].title });
    props.handlesearchParams({
      initiative: initiativeId,
      title: "",
    });
    // setInitiative({ _id: e.target.value, title: e.target.name });
    // let updatedMeetingFormState;
    // updatedMeetingFormState = _.merge(MeetingInfromationForm, {
    //   [input]: { _id: e.target.value, title: e.target.name },
    // });
    // setMeetingInfromationForm({ ...updatedMeetingFormState });
    // console.log({ ...updatedMeetingFormState });
  };

  return (
    <div className="p-0 lg:p-24 lg:pr-4 mt-32">
      <FuseAnimate animation="transition.slideLeftIn" delay={200}>
        <Paper className="rounded-0 shadow-none lg:rounded-8 lg:shadow-1">
          <div>
            <div className="p-16 flex items-center justify-center">
              <Fab
                variant="extended"
                aria-label="Delete"
                color="primary"
                disabled={initiatives && initiatives.length == 0}
                onClick={() => {
                  handleMeetingFormStatus("New");
                }}
                className={"hoverEffect"}
              >
                <Icon className="mr-8">person_add</Icon>
                Create New
              </Fab>
            </div>
            <Divider />
          </div>

          <List>
            <ListItem
              button
              component={NavLinkAdapter}
              to={"/apps/meetings/all"}
              activeClassName="active"
              className={classes.listItem}
              onClick={() => {
                props.handleStatus("All");
                props.handlesearchParams(null);
              }}
            >
              <Icon className="list-item-icon text-16" color="action">
                people
              </Icon>
              <ListItemText
                className="truncate pr-0"
                secondary="All"
                disableTypography={true}
              />
            </ListItem>
            <ListItem
              button
              component={NavLinkAdapter}
              to={"/apps/meetings/attendee"}
              activeClassName="active"
              className={classes.listItem}
              onClick={() => {
                props.handleStatus("Today");
                props.handlesearchParams({
                  // "startDate": moment(new Date).format("YYYY-MM-DD"),
                  attendee: true,
                  title: "",
                });
              }}
            >
              <Icon className="list-item-icon text-16" color="action">
                people
              </Icon>
              <ListItemText
                className="truncate pr-0"
                style={{ color: "#38c172" }}
                secondary="Attendee"
                disableTypography={true}
              />
            </ListItem>
            <ListItem
              button
              component={NavLinkAdapter}
              to={"/apps/meetings/organizer"}
              activeClassName="active"
              className={classes.listItem}
              onClick={() => {
                props.handleStatus("LastWeek");
                props.handlesearchParams({
                  organizer: true,
                  title: "",
                });
              }}
            >
              <Icon className="list-item-icon text-16" color="action">
                people
              </Icon>
              <ListItemText
                className="truncate pr-0"
                style={{ color: "orange" }}
                secondary="Organizer"
                disableTypography={true}
              />
            </ListItem>
          </List>
          <Divider />

          <div className="p-16 flex items-center justify-center">
            <Select
              input={
                <TextField
                  id="initiative"
                  label="Initiative"
                  variant="outlined"
                  value={initiative && initiative._id ? initiative._id : props.searchParams && props.searchParams.initiative ? props.searchParams.initiative : null  }
                  onChange={handleInitiativeChange}
                  fullWidth
                />
              }
            >
              {InitiativesRender}
            </Select>
          </div>
        </Paper>
      </FuseAnimate>

      {MeetingForm === "New" ? (
        // <MeetingDialog MeetingForm={MeetingForm} CloseMeetingForm={CloseMeetingForm}/>
        <Dialog
          open={MeetingForm === "New" ? true : false}
          maxWidth="lg"
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            <div className="flex justify-between h-48">
              <div className="flex items-center">New Meeting</div>

              <div className="flex items-center justify-end">
                <CancelIcon
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={CloseMeetingForm}
                />
              </div>
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <MeetingFeedBack
                initiatives={initiatives}
                handleReload={props.handleReload}
                handleStatus={props.handleStatus}
                CloseMeetingForm={CloseMeetingForm}
              />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
}

export default MeetingsSideBarContent;
