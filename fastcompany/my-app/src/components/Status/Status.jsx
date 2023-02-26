import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const Status = ({ users, mode, proffessions }) => {
  const dancePeople = `${users.length} человек тусанет с тобой сегодня`;

  console.log(proffessions.then(res => console.log(res)));

  return (
    <Box
      sx={{
        display: "inline-flex",
        padding: "10px 20px",
        marginBottom: "20px",
        borderRadius: "5px",
        color: "#fff",
        transition: "all 0.3s ease",
        backgroundColor: "info.dark",
        "&:hover": {
          backgroundColor: "info.main",
        },
      }}
      className={users.length === 0 ? "box-active" : ""}
    >
      {users.length > 4
        ? dancePeople
        : users.length === 1
          ? dancePeople
          : users.length === 0
            ? `Никто с тобой не тусанет`
            : `${users.length} человека тусанет с тобой сегодня`}
    </Box>
  );
};

Status.propTypes = {
  users: PropTypes.array.isRequired,
  mode: PropTypes.bool,
  proffessions: PropTypes.object
};

export default Status;
