import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Dialog } from '@material-ui/core';

const styles = {
    dialogPaper: {
        minHeight: '80vh',
        maxHeight: '80vh',
        minWidth: '80vh',
        maxWidth: '80vh'
    },
};

const Dialogue = ({ classes }) => (
    <Dialog classes={{ paper: classes.dialogPaper }}>
        <div>dialogishness</div>
    </Dialog>
);

export default withStyles(styles)(Dialogue);