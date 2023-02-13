import React from 'react'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = (props) => {
  console.log(props.openAlertNotification);
  return (
    <Snackbar
      open={props.openAlert}
      autoHideDuration={1500}
      onClose={props.handleCloseAlert}
    >
      <Alert onClose={props.handleCloseAlert} severity={props.openAlertNotification === true ? 'success' : props.openAlertNotification === 0 ? 'success' : 'error'} sx={{ width: '100%' }}>
        {
          props.openAlertNotification === 0 ? 'Человек удален' :
          props.openAlertNotification === true ? 'Человек добавлен в избранное' :
          'Человек удален с избранного'
        }
      </Alert>
    </Snackbar>
  )
}

export default Notification