import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import PropTypes from "prop-types";

const ThemeDark = ({ mode, onHandleTheme }) => {
  return (
    <Box
      sx={{
        bgcolor: `{${mode} === ${true} ? '#fff' : '#263238'}`,
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      <IconButton sx={{ ml: 1 }} onClick={() => onHandleTheme()} color={mode === true ? "primary" : "inherit"}>
        {mode === true ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

ThemeDark.propTypes = {
  mode: PropTypes.bool.isRequired,
  onHandleTheme: PropTypes.func.isRequired
};

export default ThemeDark;
