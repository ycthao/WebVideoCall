import React from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { makesStyles } from '@material-ui/core/styles';
import { CopyToClipBoard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';

import { SocketContext } from '../SocketContext';

const Options = ( { children } ) => {
    return (
        <div>
            Options
            {children}
        </div>
    )
}

export default Options;
