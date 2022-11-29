import React from "react";
import {
  Avatar,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemText,
  Paper,
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

function InitiativeSideBarContent(props) {
  const classes = useStyles(props);
  const [MeetingForm, setMeetingForm] = React.useState("");

  function handleMeetingFormStatus(status) {
    setMeetingForm(status);
  }
  function CloseMeetingForm() {
    setMeetingForm("");
  }

  return (
    <div className="p-0 lg:p-24 lg:pr-4 mt-32">
      <FuseAnimate animation="transition.slideLeftIn" delay={200}>
        <Paper className="rounded-0 shadow-none lg:rounded-8 lg:shadow-1">
          <div className="p-16 flex items-center justify-center">
            <Fab
              variant="extended"
              aria-label="Delete"
              color="primary"
              onClick={() => {
                handleMeetingFormStatus("New");
              }}
              className={"hoverEffect"}
            >
              <Icon className="mr-8">person_add</Icon>
              Add new
            </Fab>
          </div>
          <Divider />
          {/* <List>
                        <ListItem
                            button
                            component={NavLinkAdapter}
                            to={'/apps/initiatives/all'}
                            activeClassName="active"
                            className={classes.listItem}
                            onClick={()=>{
                                props.handleStatus("All");
                                props.handlesearchParams(null);
                            }}
                        >
                            <Icon className="list-item-icon text-16" color="action">people</Icon>
                            <ListItemText className="truncate pr-0" secondary="All" disableTypography={true} />
                        </ListItem>
                        <ListItem
                            button
                            component={NavLinkAdapter}
                            to={'/apps/initiatives/today'}
                            activeClassName="active"
                            className={classes.listItem}
                            onClick={()=>{
                                props.handleStatus("Today");
                                props.handlesearchParams({
                                    "startDate": moment(new Date).format("YYYY-MM-DD"),
                                    "endDate": moment(new Date).format("YYYY-MM-DD"),
                                    "title": ""
                                })
                            }}
                        >
                            <Icon className="list-item-icon text-16" color="action">people</Icon>
                            <ListItemText className="truncate pr-0" style={{ color: "#38c172" }} secondary="Today" disableTypography={true} />
                        </ListItem>
                        <ListItem
                            button
                            component={NavLinkAdapter}
                            to={'/apps/initiatives/lastWeek'}
                            activeClassName="active"
                            className={classes.listItem}
                            onClick={()=>{
                                props.handleStatus("LastWeek");
                                props.handlesearchParams({
                                    "startDate": moment(new Date).subtract("days",7).format("YYYY-MM-DD"),
                                    "endDate": moment(new Date).format("YYYY-MM-DD"),
                                    "title": ""
                                })
                            }}
                        >
                            <Icon className="list-item-icon text-16" color="action">people</Icon>
                            <ListItemText className="truncate pr-0" style={{ color: "orange" }} secondary="This Week" disableTypography={true} />
                        </ListItem>

                    </List> */}
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
              <div className="flex items-center">Admin Log</div>

              <div className="flex items-center justify-end">
                <CancelIcon
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={CloseMeetingForm}
                />
              </div>
            </div>
          </DialogTitle>
          <DialogContent style={{ width: "600px", height: "800px" }}>
            <DialogContentText>
              <MeetingFeedBack
                handleReload={props.handleReload}
                handleStatus={props.handleStatus}
                CloseMeetingForm={CloseMeetingForm}
                handleEntry={props.handleEntry}
              />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
}

export default InitiativeSideBarContent;
