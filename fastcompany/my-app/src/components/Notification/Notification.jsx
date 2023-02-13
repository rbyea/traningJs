import React from 'react'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = (props) => {
  const {userName, booleanBookmark, openAlertNotification} = props
  
  console.log(!booleanBookmark);

  console.log(userName);

  return (
    <Snackbar
      open={props.openAlert}
      autoHideDuration={1500}
      onClose={props.handleCloseAlert}
    >
      <Alert severity={!booleanBookmark === true ? 'success' : !booleanBookmark === 0 ? 'success' : 'error'} sx={{ width: '100%' }}>
        {
          openAlertNotification === 0 ? `${userName} удален` :
          openAlertNotification === true ? `${userName} добавлен в избранное` :
          `${userName} удален с избранного`
        }
      </Alert>
    </Snackbar>
  )
}

export default Notification