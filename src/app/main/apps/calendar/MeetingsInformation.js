import React, {useCallback, useEffect} from 'react';
import {Typography, Toolbar, AppBar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function MeetingInformation(props)
{
    const classes = useStyles();
    const eventDialog = useSelector(({calendarApp}) => calendarApp.events.eventDialog);
    console.log(eventDialog)
    return (
            <div>
                <AppBar position="static">
                    <Toolbar className="flex w-full">
                        <Typography variant="subtitle1" color="inherit">
                        Meetings
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Card className={classes.root}>
                    <CardHeader
                    title={eventDialog && eventDialog.data && eventDialog.data.title ? eventDialog.data.title : "No Meeting Scheduled" }
                    // subheader={eventDialog && eventDialog.data && eventDialog.data.start ? eventDialog.data.start : null} 
                    />

                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {/* start data: {eventDialog && eventDialog.data && eventDialog.data.start ? eventDialog.data.start : null} */}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {/* end data: {eventDialog && eventDialog.data && eventDialog.data.end ? eventDialog.data.end : null} */}
                        </Typography>
                        <Typography variant="body2" component="p">
                        All Day Event: {eventDialog && eventDialog.data && eventDialog.data.allDay ? eventDialog.data.allDay : null}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
    );
}

export default withReducer('calendarApp', reducer)(MeetingInformation);
