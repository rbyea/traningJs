import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const Status = ({ users }) => {
  const convertEnding = (number) => {
    if (number === 0) {
      return "Никто с тобой не тусанет";
    }
  
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;
  
    if (lastTwoDigits > 10 && lastTwoDigits < 20) {
      return `${number} человек тусанет с тобой сегодня`;
    }
  
    if (lastDigit === 1) {
      return `${number} человек тусанет с тобой сегодня`;
    }
  
    if (lastDigit >= 2 && lastDigit <= 4) {
      return `${number} человека тусанет с тобой сегодня`;
    }
  
    return `${number} человек тусанет с тобой сегодня`;
  };

  return (
    <Box
      sx={{
        display: "inline-flex",
        padding: "10px 20px",
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
      {
        convertEnding(users.length)
      }
    </Box>
  );
};

Status.propTypes = {
  users: PropTypes.array.isRequired
};

export default Status;
