import React from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = ({ userName, booleanBookmark, openAlertNotification, openAlert, handleCloseAlert }) => {
  const [textAlert, setTextAlert] = React.useState("");
  const [bgColor, setBgColor] = React.useState("success");

  React.useEffect(() => {
    if (openAlertNotification === "boolean") {
      if (booleanBookmark) {
        setTextAlert(`${userName} удален с избранного`);
        setBgColor("error");
      } else {
        setTextAlert(`${userName} добавлен в избранное`);
        setBgColor("success");
      }
    } else {
      setBgColor("error");
    }
  }, [openAlertNotification, booleanBookmark, userName]);

  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={1000}
      onClose={handleCloseAlert}
    >
      <Alert severity={bgColor} sx={{ width: "100%" }}>
        {openAlertNotification === 0
          ? `${userName} удален`
          : openAlertNotification === true
            ? textAlert
            : textAlert}
      </Alert>
    </Snackbar>
  );
};
Notification.propTypes = {
  userName: PropTypes.string.isRequired,
  booleanBookmark: PropTypes.bool.isRequired,
  openAlertNotification: PropTypes.number.isRequired,
  openAlert: PropTypes.bool.isRequired,
  handleCloseAlert: PropTypes.func.isRequired
};

export default Notification;
