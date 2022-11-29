import React, { useEffect, useRef, useState } from 'react';
import { FusePageSimple } from '@fuse'
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Table, Paper, TableBody,Tooltip,Avatar, TableCell, TableRow, Grid } from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import InitiativeHeader from './InitiativeHeader'
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';


const useStyles = makeStyles({
    root: {
      minWidth: 150,
      marginTop: "44px"
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
export default function InitiativeDetails(props) {
    const {location} = props
    const classes = useStyles(); 
    const pageLayout = useRef(null);
    const card = {
        'members': [
            {
                'name': 'Alice Freeman',
                'avatar': 'assets/images/avatars/alice.jpg'
            },
            {
                'name': 'Danielle Obrien',
                'avatar': 'assets/images/avatars/danielle.jpg'
            },
            {
                'name': 'James Lewis',
                'avatar': 'assets/images/avatars/james.jpg'
            },
            {
                'name': 'John Doe',
                'avatar': 'assets/images/avatars/Velazquez.jpg'
            },
            {
                'name': 'Abbott',
                'avatar': 'assets/images/avatars/Abbott.jpg'
            },
            {
                'name': 'Andrew',
                'avatar': 'assets/images/avatars/andrew.jpg'
            },
            {
                'name': 'Arnold',
                'avatar': 'assets/images/avatars/Arnold.jpg'
            },
            {
                'name': 'Barrera',
                'avatar': 'assets/images/avatars/Barrera.jpg'
            },
            {
                'name': 'Blair',
                'avatar': 'assets/images/avatars/Blair.jpg'
            },
            {
                'name': 'Estes',
                'avatar': 'assets/images/avatars/Estes.jpg'
            }
        ]
    };
    let [menuToggle, setMenuToggle] = useState([true, true, true, true, true, true, true]);

    const handleToggleMenu = (i) => {
        menuToggle = menuToggle.map((menu, index) => {
            if (index === i)
                return !(menu);
            return menu;
        })
        setMenuToggle(menuToggle);
    }
    console.log(location)
    return (
        <FusePageSimple 
        classes={{
            // contentWrapper: "p-0 sm:p-24 pb-80 sm:pb-80 h-full",
            // content: "flex flex-col h-full",
            // leftSidebar: "w-256 border-0",
            // header: "min-h-72 h-72 sm:h-136 sm:min-h-136"
        }}
        header={<InitiativeHeader {...props} detailsPage={true}/>}
        content={
            <div id="Print" className="w-full p-10 flex flex-col">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className="flex flex-col">
                            <Grid justify="left" style={{ color: `#605ea0` }} container >
                                <Grid item xs={2.7} style={{ cursor: "pointer" }} onClick={() => {
                                    handleToggleMenu(0);
                                }}>
                                    <Typography variant="h6" justify="left" >
                                        General Meeting Details
                                    </Typography>
                                </Grid>
                                <span style={{ cursor: "pointer" }} onClick={() => {
                                    handleToggleMenu(0);
                                }}>
                                    {menuToggle[0] ? <ArrowDropDown style={{ fontSize: 35 }} /> : <ArrowDropUp style={{ fontSize: 35 }} />}</span>

                            </Grid>

                            {menuToggle[0] && (
                                <Paper className=" mt-2" aria-labelledby="tableTitle" style={{ border: '2px solid', color: 'lightgrey' }}>

                                    {/* <div style={{padding:"10px"}}> */}
                                    {/* <Grid container> */}
                                        
                                        <Table className=" mt-2" aria-labelledby="tableTitle" style={{ border: '0px', color: 'white' }}>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row" align="left" >
                                                    <b>Title</b>
                                                </TableCell>
                                                <TableCell component="th" scope="row" align="right">
                                                {location.state.MeetingDetails.title}
                                                </TableCell>
                                            </TableRow>
                                        
                                            <TableRow>
                                                <TableCell component="th" scope="row" align="left" >
                                                    <b>{location.state.MeetingDetails.desc ? "Description" : null}</b>
                                                </TableCell>
                                                <TableCell component="th" scope="row" align="right">
                                                    {location.state.MeetingDetails.desc}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell component="th" scope="row" align="left" >
                                                    <b>Start</b>
                                                </TableCell>
                                                <TableCell component="th" scope="row" align="right">
                                                    {moment(location.state.MeetingDetails.start).format("MM-DD-YYYY HH:MM A")} 
                                                    
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell component="th" scope="row" align="left" >
                                                    <b>End</b>
                                                </TableCell>
                                                <TableCell component="th" scope="row" align="right">
                                                    {moment(location.state.MeetingDetails.end).format("MM-DD-YYYY HH:MM A")}
                                                </TableCell>
                                            </TableRow>
                                    </TableBody>   
                                        </Table> 
                                        <div style={{justifyContent:"center"}} className="w-full flex flex-wrap mt-8 mb-2">
                                            {location.state.MeetingDetails.meetingMembers.map(member => {
                                                return (
                                                    <Tooltip title={member}>
                                                        <Avatar className="mr-8 w-32 h-32" src={card.members.find(obj => {return obj.name === member}).avatar} />
                                                    </Tooltip>
                                                )
                                            })}
                                            </div>
                                </Paper>)}
                        </div>

                        <div className="mt-16">
                            <Grid justify="left" style={{ color: `#605ea0` }} container >
                                <Grid item xs={1.5} style={{ cursor: "pointer" }} onClick={() => {
                                    handleToggleMenu(1);
                                }}>
                                    <Typography variant="h6" justify="left" >
                                        Meeting Decisions
                                    </Typography>
                                </Grid>
                                <span style={{ cursor: "pointer" }} onClick={() => {
                                    handleToggleMenu(1);
                                }}>
                                {menuToggle[1] ? <ArrowDropDown style={{ fontSize: 35 }} /> : <ArrowDropUp style={{ fontSize: 35 }} />}</span>
                            </Grid>
                            {menuToggle[1] && (
                                <Paper className=" mt-2" aria-labelledby="tableTitle" style={{ border: '2px solid', color: 'lightgrey' }}>

                                    <Table className=" mt-2" aria-labelledby="tableTitle" style={{ border: '0px', color: 'white' }}>
                                        <TableBody>
                                            {location.state.MeetingDetails.meetingDecisions.map((decisions, index) => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row" align="left" >
                                                        <b>Decision {index + 1} </b>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        {decisions}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                            }

                                        </TableBody>
                                    </Table>
                                </Paper>)}
                        </div>

                        <div className="mt-16">
                            <Grid justify="left" style={{ color: `#605ea0` }} container >
                                <Grid item xs={1.5} style={{ cursor: "pointer" }} onClick={() => {
                                    handleToggleMenu(2);
                                }}>
                                    <Typography variant="h6" justify="left" >
                                        Meeting Points
                                    </Typography>
                                </Grid>
                                <span style={{ cursor: "pointer" }} onClick={() => {
                                    handleToggleMenu(2);
                                }}>
                                {menuToggle[2] ? <ArrowDropDown style={{ fontSize: 35 }} /> : <ArrowDropUp style={{ fontSize: 35 }} />}</span>
                            </Grid>
                            {menuToggle[2] && (
                                <Paper className=" mt-2" aria-labelledby="tableTitle" style={{ border: '2px solid', color: 'lightgrey' }}>

                                    <Table className=" mt-2" aria-labelledby="tableTitle" style={{ border: '0px', color: 'white' }}>
                                        <TableBody>
                                            {location.state.MeetingDetails.meetingNotes.map((notes,index) => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row" align="left" >
                                                        <b>Note {index + 1} </b>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        {notes}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                            </Paper>)}
                        </div>

                        {location.state.MeetingDetails.preMeetingFeedback && (<div className="mt-16">
                            <Grid justify="left" style={{ color: `#605ea0` }} container >
                                <Grid item xs={1.5} style={{ cursor: "pointer" }} onClick={() => {
                                    handleToggleMenu(3);
                                }}>
                                    <Typography variant="h6" justify="left" >
                                        Pre-Meeting Feedback
                                    </Typography>
                                </Grid>
                                <span style={{ cursor: "pointer" }} onClick={() => {
                                    handleToggleMenu(2);
                                }}>
                                {menuToggle[3] ? <ArrowDropDown style={{ fontSize: 35 }} /> : <ArrowDropUp style={{ fontSize: 35 }} />}</span>
                            </Grid>
                            {menuToggle[3] &&  (
                                
                                <Paper className=" mt-2" aria-labelledby="tableTitle" style={{ border: '2px solid', color: 'lightgrey' }}>

                                    <Table className=" mt-2" aria-labelledby="tableTitle" style={{ border: '0px', color: 'white' }}>
                                        <TableBody>
                                        {location.state.MeetingDetails.preMeetingFeedback && location.state.MeetingDetails.preMeetingFeedback.feedbackVisibleAll ?
                                            location.state.MeetingDetails.preMeetingFeedback.feedbackVisibleAll.map((feedback,index) => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row" align="left" >
                                                        <Grid justify="left" container >
                                                            <Grid item xs={1.5}>
                                                                <Avatar className="w-32 h-32" src="assets/images/avatars/alice.jpg" />
                                                            </Grid>
                                                            <Grid style={{ paddingTop: '5px',paddingLeft:'5px' }} item xs={1.5}>
                                                                <b>Alice Freeman</b>
                                                            </Grid>    
                                                        </Grid>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        {feedback}
                                                    </TableCell>
                                                </TableRow>
                                            )) : null}
                                            {location.state.MeetingDetails.preMeetingFeedback && location.state.MeetingDetails.preMeetingFeedback.feedbackVisibleOnlyHost ?
                                            location.state.MeetingDetails.preMeetingFeedback.feedbackVisibleOnlyHost.map((feedback,index) => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row" align="left" >
                                                        <Grid justify="left" container >
                                                            <Grid item xs={1.5}>
                                                                <Avatar className="w-32 h-32" src="assets/images/avatars/alice.jpg" />
                                                            </Grid>
                                                            <Grid style={{ paddingTop: '5px', paddingLeft: '5px' }} item xs={1.5}>
                                                                <b>Alice Freeman</b>
                                                            </Grid>
                                                        </Grid>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        {feedback}
                                                    </TableCell>
                                                </TableRow>
                                            )) : null}
                                            {location.state.MeetingDetails.preMeetingFeedback && location.state.MeetingDetails.preMeetingFeedback.feedbackAnonymous ?
                                            location.state.MeetingDetails.preMeetingFeedback.feedbackAnonymous.map((feedback,index) => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row" align="left" >
                                                        <Grid justify="left" container >
                                                            <Grid item xs={1.5}>
                                                                <Avatar className="w-32 h-32" src="assets/images/avatars/profile.jpg" />
                                                            </Grid>
                                                            <Grid style={{ paddingTop: '5px', paddingLeft: '5px' }} item xs={1.5}>
                                                                <b>Anonymous A</b>
                                                            </Grid>
                                                        </Grid>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        {feedback}
                                                    </TableCell>
                                                </TableRow>
                                            )) : null}
                                        </TableBody>
                                    </Table>
                            </Paper>)}
                        </div>)}

                        {location.state.MeetingDetails.postMeetingFeedback && (<div className="mt-16">
                            <Grid justify="left" style={{ color: `#605ea0` }} container >
                                <Grid item xs={1.5} style={{ cursor: "pointer" }} onClick={() => {
                                    handleToggleMenu(4);
                                }}>
                                    <Typography variant="h6" justify="left" >
                                        Post-Meeting Feedback
                                    </Typography>
                                </Grid>
                                <span style={{ cursor: "pointer" }} onClick={() => {
                                    handleToggleMenu(4);
                                }}>
                                {menuToggle[4] ? <ArrowDropDown style={{ fontSize: 35 }} /> : <ArrowDropUp style={{ fontSize: 35 }} />}</span>
                            </Grid>
                            {menuToggle[4] &&  (
                                
                                <Paper className=" mt-2" aria-labelledby="tableTitle" style={{ border: '2px solid', color: 'lightgrey' }}>

                                    <Table className=" mt-2" aria-labelledby="tableTitle" style={{ border: '0px', color: 'white' }}>
                                        <TableBody>
                                        {location.state.MeetingDetails.postMeetingFeedback && location.state.MeetingDetails.postMeetingFeedback.feedbackVisibleAll ?
                                            location.state.MeetingDetails.postMeetingFeedback.feedbackVisibleAll.map((feedback,index) => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row" align="left" >
                                                        <Grid justify="left" container >
                                                            <Grid item xs={1.5}>
                                                                <Avatar className="w-32 h-32" src="assets/images/avatars/alice.jpg" />
                                                            </Grid>
                                                            <Grid style={{ paddingTop: '5px',paddingLeft:'5px' }} item xs={1.5}>
                                                                <b>Alice Freeman</b>
                                                            </Grid>    
                                                        </Grid>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        {feedback}
                                                    </TableCell>
                                                </TableRow>
                                            )) : null}
                                            {location.state.MeetingDetails.postMeetingFeedback && location.state.MeetingDetails.postMeetingFeedback.feedbackVisibleOnlyHost ?
                                            location.state.MeetingDetails.postMeetingFeedback.feedbackVisibleOnlyHost.map((feedback,index) => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row" align="left" >
                                                        <Grid justify="left" container >
                                                            <Grid item xs={1.5}>
                                                                <Avatar className="w-32 h-32" src="assets/images/avatars/alice.jpg" />
                                                            </Grid>
                                                            <Grid style={{ paddingTop: '5px', paddingLeft: '5px' }} item xs={1.5}>
                                                                <b>Alice Freeman</b>
                                                            </Grid>
                                                        </Grid>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        {feedback}
                                                    </TableCell>
                                                </TableRow>
                                            )) : null}
                                            {location.state.MeetingDetails.postMeetingFeedback && location.state.MeetingDetails.postMeetingFeedback.feedbackAnonymous ?
                                            location.state.MeetingDetails.postMeetingFeedback.feedbackAnonymous.map((feedback,index) => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row" align="left" >
                                                        <Grid justify="left" container >
                                                            <Grid item xs={1.5}>
                                                                <Avatar className="w-32 h-32" src="assets/images/avatars/profile.jpg" />
                                                            </Grid>
                                                            <Grid style={{ paddingTop: '5px', paddingLeft: '5px' }} item xs={1.5}>
                                                                <b>Anonymous A</b>
                                                            </Grid>
                                                        </Grid>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        {feedback}
                                                    </TableCell>
                                                </TableRow>
                                            )) : null}
                                        </TableBody>
                                    </Table>
                            </Paper>)}
                        </div>)}
                </Grid>
            </Grid>
        </div>


        }
        ref={pageLayout}
        innerScroll

        />

    );
}

