import React from 'react'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = (props) => {
  const {userName, booleanBookmark, openAlertNotification} = props

  const [textAlert, setTextAlert] = React.useState('')
  const [bgColor, setBgColor] = React.useState('success')

  React.useEffect(() => {
    if(openAlertNotification === 'boolean') {
      if(booleanBookmark) {
        setTextAlert(`${userName} удален с избранного`)
        setBgColor('error')
      } else {
        setTextAlert(`${userName} добавлен в избранное`)
        setBgColor('success')
      }
    } else {
      setBgColor('error')
    }
  }, [openAlertNotification, booleanBookmark, userName])

  return (
    <Snackbar
      open={props.openAlert}
      autoHideDuration={1000}
      onClose={props.handleCloseAlert}
    >
      <Alert severity={bgColor === 'success' ? bgColor : bgColor} sx={{ width: '100%' }}>
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