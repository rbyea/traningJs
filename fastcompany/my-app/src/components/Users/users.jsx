import React from 'react'

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import './users.css'
import Qualitie from '../Qualitie/Qualitie';
import Bookmark from '../Bookmark/Bookmark';

const Users = (props) => {

  return (
    <>
      <TableRow key={props._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {props.name}
        </TableCell>
        <TableCell align="center">
          <Stack direction="row" spacing={2}>
            {
              props.qualities.map(badge => (
                <Qualitie key={badge._id} {...badge} />
              ))
            }
          </Stack>
        </TableCell>
        <TableCell align="center">{props.profession.name}</TableCell>
        <TableCell align="center">{props.completedMeetings}</TableCell>
        <TableCell align="center">{props.rate}</TableCell>
        <TableCell align="center"><Bookmark id={props._id} openAlertNotification={props.openAlertNotification}  handleBookmark={props.handleBookmark} boolean={props.bookmark}/></TableCell>
        <TableCell align="center">
          <Button variant="contained" onClick={() => props.handleDelete(props._id)} color="error">
            Удалить
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Users