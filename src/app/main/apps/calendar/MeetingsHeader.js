import React from "react";
import {
  Icon,
  IconButton,
  Input,
  Paper,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { FuseAnimate } from "@fuse";
import Arrowback from "@material-ui/icons/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CancelIcon from "@material-ui/icons/Cancel";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import { Img } from "react-image";

function MeetingsHeader(props) {
  const { handleSearchText } = props;
  console.log("props.location", props.location);
  const dispatch = useDispatch();
  const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();
  return (
    <div className="flex flex-1 items-center justify-between p-8 sm:p-24">
      <div className="flex flex-1 items-center justify-between ">
        <div className="flex justify-start">
          {props.detailsPage && (
            <IconButton
              aria-label="Back"
              onClick={() => {
                props.history.push("/apps/meetings");
              }}
            >
              <Arrowback />
            </IconButton>
          )}
          <FuseAnimate animation="transition.slideLeftIn" delay={300}>
            <Typography variant="h6" className="hidden sm:flex mt-8">
              {props.detailsPage ? "Meeting Details" : "Meetings"}
            </Typography>
          </FuseAnimate>
        </div>
        {!props.detailsPage && (
          <div className="flex flex-1 items-center justify-center pr-8 sm:px-12">
            <ThemeProvider theme={mainTheme}>
              <Paper
                className="flex p-4 items-center w-full max-w-512 px-8 py-4"
                elevation={1}
              >
                <Icon className="mr-8" color="action">
                  search
                </Icon>

                <Input
                  placeholder="Search Meeting"
                  className="flex flex-1"
                  disableUnderline
                  fullWidth
                  inputProps={{
                    "aria-label": "Search",
                  }}
                  onChange={(ev) => {
                    handleSearchText(ev.target.value);
                  }}
                />
              </Paper>
            </ThemeProvider>
          </div>
        )}

        {!props.detailsPage && (
          <div className="flex justify-end">
            <Button
              onClick={() => {
                handleClickOpen();
              }}
              style={{ background: "white" }}
              variant="contained"
            >
              Instructions
            </Button>
          </div>
        )}
      </div>
      <div style={{ background: "white" }}>
        <Dialog
          open={open}
          maxWidth="lg"
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            style={{ background: "white", color: "black" }}
            id="responsive-dialog-title"
          >
            <div className="flex justify-between h-48">
              <div className="flex items-center">
                <Typography variant="h4">
                  <b>Instructions</b>
                </Typography>
              </div>

              <div className="flex items-center justify-end">
                <CancelIcon
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={handleClose}
                />
              </div>
            </div>
          </DialogTitle>
          <DialogContent style={{ background: "white", color: "black" }}>
            <DialogContentText style={{ background: "white", color: "black" }}>
              {/* <Grid container className="mt-16" style={{ justifyContent: "left" }}>
                                <Typography variant="h5">
                                    <b>Topic 1: How can enable Create New Meeting button ?</b><br />
                                    Step 1: You need to go to initiatives screen by clicking on Initiatives menu present on the left sidebar menu.<br />
                                    Step 2: Click on Create New button a pop window will appear. Fill out all the fields in that window.<br />
                                    Step 3: Once you complete the initiative the New Meeting button will get enabled.
                                </Typography>
                            </Grid>
                            <Grid container className="mt-16" style={{ justifyContent: "center" }}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={
                                                `assets/images/help/NewMeetings.png`
                                            }
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid> */}

              <Grid
                container
                className="mt-16"
                style={{ justifyContent: "left" }}
              >
                <Typography variant="h5">
                  <b>
                    Topic 1: How can I view the details of the
                    initiative/meeting ?
                  </b>
                  <br />
                  Click anywhere on the tile.
                  {/* <Icon className="text-18 mr-12" style={{ color: "red", fontSize: "16px" }}>remove_red_eye</Icon> */}
                </Typography>
              </Grid>
              <Grid
                container
                className="mt-16"
                style={{ justifyContent: "center" }}
              >
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={`assets/images/help/MeetingDetails.png`}
                    />
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid
                container
                className="mt-64"
                style={{ justifyContent: "left" }}
              >
                <Typography variant="h5">
                  <b>Topic 2: How can I answer the questions posted to me ?</b>
                  <br />
                  Step 1: Find the meeting card(s) with a Red Border.
                  <br />
                  Step 2: Click on the &nbsp;
                  <Icon
                    className="text-18 mr-12"
                    style={{ color: "red", fontSize: "16px" }}
                  >
                    feedback
                  </Icon>
                  Icon, a pop-up window will open up. Input your
                  answers/feedback into the spaces provided in the pop-up
                  window.
                </Typography>
              </Grid>
              <Grid
                container
                className="mt-16"
                style={{ justifyContent: "center" }}
              >
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={`assets/images/help/Feedback.png`}
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default MeetingsHeader;
