import React from 'react'
import api from '../../api'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './users.css'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Users = () => {
  const getUsers = api.users.fetchAll()
  const [users, setUsers] = React.useState(getUsers)
  const [openAlert, setOpenAlert] = React.useState(false)

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

  const handleDelete = (userId) => {
    setUsers(users.filter(el => el._id !== userId))
    setOpenAlert(true)
  }

  const handleCloseAlert = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false)
  }

  return (
    <section className="section section_default table">
      <div className="wrapper wrapper_large">
        <Box
          sx={{
            display: 'inline-flex',
            padding: '10px 20px',
            marginBottom: '20px',
            borderRadius: '5px',
            color: '#fff',
            transition: 'all 0.3s ease',
            backgroundColor: 'info.dark',
            '&:hover': {
              backgroundColor: 'info.main',
            },
          }}
          className={users.length === 0 ? 'box-active' : ''}
        >
          {users.length > 4 ? `${users.length} человек тусанет с тобой сегодня` 
          : users.length === 1 ? `${users.length} человек тусанет с тобой сегодня`
          : users.length === 0 ? `Никто с тобой не тусанет`
          : `${users.length} человека тусанет с тобой сегодня`}
        </Box>
        <Snackbar
          open={openAlert}
          autoHideDuration={1500}
          onClose={handleCloseAlert}
        >
          <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
            Человек удален
          </Alert>
        </Snackbar>
        {
          users.length > 0 &&
          <Paper sx={{ width: '100%' }}>
            <TableContainer sx={
              { 
                maxHeight: 'calc(100vh - 141px)',
                "&::-webkit-scrollbar": {
                  width: 7
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#ffffff"
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#DFDFDF",
                  borderRadius: 2,
                }
              }
            }>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow className="table-head">
                    <TableCell>Имя</TableCell>
                    <TableCell align="left">Качество</TableCell>
                    <TableCell align="center">Профессия</TableCell>
                    <TableCell align="center">Количество встреч</TableCell>
                    <TableCell align="center">Оценка</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    users.map(el => (
                      <TableRow key={el._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {el.name}
                        </TableCell>
                        <TableCell align="center">
                          <Stack direction="row" spacing={2}>
                            {el.qualities.map(badge => (
                              <ThemeProvider  key={badge._id} theme={theme}>
                                <Button className="btn-badge" variant="contained" color={
                                  badge.color  
                                }>
                                  {badge.name}
                                </Button>
                              </ThemeProvider>

                            ))}
                          </Stack>
                        </TableCell>
                        <TableCell align="center">{el.profession.name}</TableCell>
                        <TableCell align="center">{el.completedMeetings}</TableCell>
                        <TableCell align="center">{el.rate}</TableCell>
                        <TableCell align="center">
                          <Button variant="contained" onClick={() => handleDelete(el._id)} color="error">
                            Удалить
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  }

                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        }
      </div>
    </section>
  )
}

export default Users