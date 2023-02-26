import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const Qualitie = ({ _id, color, name }) => {
  const theme = createTheme({
    palette: {
      dark: {
        main: "#000",
        contrastText: "#fff",
      },
      danger: {
        main: "rgb(244, 67, 54)",
        contrastText: "#fff",
      },
      info: {
        main: "#705013",
        contrastText: "#fff",
      },
    },
  });

  return (
    <>
      <ThemeProvider key={_id} theme={theme}>
        <Button className="btn-badge" variant="contained" color={color}>
          {name}
        </Button>
      </ThemeProvider>
    </>
  );
};
Qualitie.propTypes = {
  _id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Qualitie;
