import React from 'react'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = (props) => {
  console.log(props);
  return (
    <Snackbar
      open={props.openAlert}
      autoHideDuration={1500}
      onClose={props.handleCloseAlert}
    >
      <Alert onClose={props.handleCloseAlert} severity="success" sx={{ width: '100%' }}>
        Человек удален
      </Alert>
    </Snackbar>
  )
}

export default Notification