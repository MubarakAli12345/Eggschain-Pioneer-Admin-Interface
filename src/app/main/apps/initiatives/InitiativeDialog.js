import React, {useCallback, useEffect} from 'react';
import {TextField, Button, Dialog,Select, MenuItem,Avatar, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar, FormControlLabel, Switch} from '@material-ui/core';
import FuseUtils from '@fuse/FuseUtils';
import {useForm} from '@fuse/hooks';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import * as Actions from './store/actions';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


const defaultFormState = {
    id    : FuseUtils.generateGUID(),
    title : '',
    allDay: true,
    start : new Date(),
    end   : new Date(),
    desc  : ''
};

function InitiativeDialog(props)
{
    const dispatch = useDispatch();
    const card = {
        'members': [
            {
                'id': '56027c1930450d8bf7b10758',
                'name': 'Alice Freeman',
                'avatar': 'assets/images/avatars/alice.jpg'
            },
            {
                'id': '26027s1930450d8bf7b10828',
                'name': 'Danielle Obrien',
                'avatar': 'assets/images/avatars/danielle.jpg'
            },
            {
                'id': '76027g1930450d8bf7b10958',
                'name': 'James Lewis',
                'avatar': 'assets/images/avatars/james.jpg'
            },
            {
                'id': '36027j1930450d8bf7b10158',
                'name': 'John Doe',
                'avatar': 'assets/images/avatars/Velazquez.jpg'
            }
        ]
    };
    let start = moment(defaultFormState.start).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);
    let end = moment(defaultFormState.end).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS);

    return (
        <Dialog open={props.MeetingForm === "New" ? true : false} onClose={props.CloseMeetingForm} fullWidth maxWidth="xs" component="form">

            <AppBar position="static">
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        {/* {props.MeetingForm === 'Edit' ? 'Edit Initiative' : 'New Initiative'} */}
                        Initiative
                    </Typography>
                </Toolbar>
            </AppBar>

            <ValidatorForm
            // onSubmit={props.handleNext}
            // onError={formError}
            // className={classes.root}
            noValidate
            autoComplete="off"
            >
                <DialogContent classes={{root: "p-16 pb-0 sm:p-24 sm:pb-0"}}>
                    <TextValidator
                        id="title"
                        label="Title"
                        className="mt-8 mb-16"
                        InputLabelProps={{
                            shrink: true
                        }}
                        name="title"
                        // value={form.title}
                        // onChange={handleChange}
                        validators={['required']}
                        errorMessages={['This field is required']}
                        variant="outlined"
                        autoFocus
                        required
                        fullWidth
                    />
                    <TextValidator
                        className="mt-8 mb-16"
                        id="desc" label="Description"
                        type="text"
                        name="desc"
                        // value={form.desc}
                        // onChange={handleChange}
                        validators={['required']}
                        errorMessages={['This field is required']}
                        multiline rows={3}
                        variant="outlined"
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Upload File
                        <input
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Button>

                    {/* <FormControlLabel
                        className="mt-8 mb-16"
                        label="All Day"
                        control={
                            <Switch
                                checked={form.allDay}
                                id="allDay"
                                name="allDay"
                                onChange={handleChange}
                            />
                        }/> */}

                    {/* <TextValidator
                        id="start"
                        name="start"
                        label="Start"
                        type="datetime-local"
                        className="mt-8 mb-16"
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={start}
                        // onChange={handleChange}
                        validators={['required']}
                        errorMessages={['This field is required']}
                        variant="outlined"
                        fullWidth
                    /> */}

                    {/* <TextValidator
                        id="end"
                        name="end"
                        label="End"
                        type="datetime-local"
                        className="mt-8 mb-16"
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={end}
                        // onChange={handleChange}
                        validators={['required']}
                        errorMessages={['This field is required']}
                        variant="outlined"
                        fullWidth
                    /> */}
                {/* <Select
                    fullWidth
                    name="Members"
                    input={<TextValidator
                        className="mb-24"
                        id="Members"
                        label="Members to include"
                        variant="outlined"
                        // value={TransportFormState && TransportFormState.SemenInformation && TransportFormState.SemenInformation.TankNumber ? TransportFormState.SemenInformation.TankNumber : null}
                        validators={['required']}
                        errorMessages={['This field is required']}
                        // onChange={handleChange('TankNumber')}
                        // disabled={Readonly}
                        fullWidth
                    />}
                >   {card.members.map((members,index)=>(
                <MenuItem key={index} value={members.name}><Avatar className="mr-8 w-32 h-32" src={members.avatar} />  <span className={"pl-5"}>{members.name}</span></MenuItem>
                ))}
                </Select> */}

                    
                </DialogContent>
                    <DialogActions className="justify-between pl-8 sm:pl-16">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            // disabled={!canBeSubmitted()}
                        >
                            Add
                        </Button>
                    </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
}

export default InitiativeDialog;
