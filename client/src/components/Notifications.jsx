import React from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

const Notifications = () => {
    const { answerCall, call, callAccepted} = useContext(SocketContext);
    return (
        <div>
            Notifications
        </div>
    )
}

export default Notifications;
