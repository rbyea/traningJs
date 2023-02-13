import React from 'react'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = (props) => {
  const {userName, booleanBookmark, openAlertNotification} = props

  const [textAlert, setTextAlert] = React.useState('')


  React.useEffect(() => {
    if(openAlertNotification === 'boolean') {
      if(booleanBookmark) {
        setTextAlert(`${userName} удален с избранного`)
      } else {
        setTextAlert(`${userName} добавлен в избранное`)
      }
    }
  }, [openAlertNotification, booleanBookmark, userName])



  console.log(textAlert);

  return (
    <Snackbar
      open={props.openAlert}
      autoHideDuration={1500}
      onClose={props.handleCloseAlert}
    >
      <Alert severity={!booleanBookmark === true ? 'success' : !booleanBookmark === 0 ? 'success' : 'error'} sx={{ width: '100%' }}>
        {
          openAlertNotification === 0 ? `${userName} удален` :
          openAlertNotification === true ? textAlert :
          textAlert
        }
      </Alert>
    </Snackbar>
  )
}

export default Notification