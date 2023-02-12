import React from 'react'
import Box from '@mui/material/Box';

const Status = ({...props}) => {
  const {users} = props

  const dancePeople = `${users.length} человек тусанет с тобой сегодня`

  return (
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
      {users.length > 4 ? dancePeople 
      : users.length === 1 ? dancePeople
      : users.length === 0 ? `Никто с тобой не тусанет`
      : `${users.length} человека тусанет с тобой сегодня`}
    </Box>
  )
}

export default Status