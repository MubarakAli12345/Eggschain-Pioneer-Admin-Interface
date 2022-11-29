import React from 'react';
import { Icon, IconButton, Input, Paper, Typography, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { FuseAnimate} from '@fuse';
import Arrowback from '@material-ui/icons/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';

function InitiativeHeader(props) {
    const {handleSearchText} = props;
   // console.log("props.location",props.location);
    const dispatch = useDispatch();
    const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);
    return (
        <div className="flex flex-1 items-center justify-between p-8 sm:p-24">
            <div className="flex flex-1 items-center justify-between ">
                <div className="flex justify-start">
                {props.detailsPage && (
                    <IconButton aria-label="Back" onClick={
                        ()=>{
                            props.history.push('/apps/initiatives')
                        }
                    }><Arrowback /></IconButton>)}
                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <Typography variant="h6" className="hidden sm:flex mt-8">
                            My Logs
                        </Typography>
                    </FuseAnimate>
                </div>
                {!props.detailsPage && (<div className="flex flex-1 items-center justify-center pr-8 sm:px-12">

                {/* <ThemeProvider theme={mainTheme}>
                    <Paper className="flex p-4 items-center w-full max-w-512 px-8 py-4" elevation={1}>

                            <Icon className="mr-8" color="action">search</Icon>

                            <Input
                                placeholder="Search Initiatives"
                                className="flex flex-1"
                                disableUnderline
                                fullWidth
                                inputProps={{
                                    'aria-label': 'Search'
                                }}
                                onChange={(ev) => {
                                    handleSearchText(ev.target.value)
                                }}
                            />
                    </Paper>
                </ThemeProvider> */}
            </div>)
            }
            </div>
        </div>
    );
}

export default InitiativeHeader;
