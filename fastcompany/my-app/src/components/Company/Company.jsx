import React from 'react'
import api from '../../api';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Users from '../Users/Users'
import Notification from '../Notification/Notification';
import Status from '../Status/Status';

const Company = () => {

  const getUsers = api.users.fetchAll()
  const [users, setUsers] = React.useState(getUsers)
  const [openAlert, setOpenAlert] = React.useState(false)
  const [openAlertNotification, setOpenAlertNotification] = React.useState(0)
  const [booleanBookmark, setBooleanBookmark] = React.useState(false)
  const [userName, setUserName] = React.useState('')

  const handleDelete = (userId,name) => {
    setUsers(users.filter(el => el._id !== userId))
    setOpenAlert(true)
    setOpenAlertNotification(0)
    setUserName(name)
  }

  const handleCloseAlert = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false)
  }

  const handleBookmark = (index, name,boolean) => {
    const newBoolenBookmark = users.map((users) => {
      if(users._id === index) {
        return {...users, bookmark: !users.bookmark}
      }
      return users
    })

    setUserName(name)
    setBooleanBookmark(boolean)
    setUsers(newBoolenBookmark)
    setOpenAlertNotification('boolean')
    setOpenAlert(true)
  }

  return (
    <section className="section section_default table">
      <div className="wrapper wrapper_large">
        <Notification userName={userName} openAlertNotification={openAlertNotification} booleanBookmark={booleanBookmark} handleCloseAlert={handleCloseAlert} openAlert={openAlert}/>
        <Status users={users}/>
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
                      <TableCell align="center">Избранное</TableCell>
                      <TableCell align="center"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      users.map(user => (
                        <Users key={user._id} handleBookmark={handleBookmark} handleDelete={handleDelete} {...user}/>
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

export default Company