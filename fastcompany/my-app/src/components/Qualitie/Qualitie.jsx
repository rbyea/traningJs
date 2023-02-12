import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Qualitie = (props) => {

  const theme = createTheme({
    palette: {
      dark: {
        main: '#000',
        contrastText: '#fff',
      },
      danger: {
        main: 'rgb(244, 67, 54)',
        contrastText: '#fff',
      },
      info: {
        main: '#705013',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider  key={props._id} theme={theme}>
      <Button className="btn-badge" variant="contained" color={
        props.color  
      }>
        {props.name}
      </Button>
    </ThemeProvider>
  )
}

export default Qualitie