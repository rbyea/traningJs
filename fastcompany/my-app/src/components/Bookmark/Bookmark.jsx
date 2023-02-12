import React from 'react'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const Boockmark = ({...props}) => {

  const {boolean, handleBookmark, id} = props

  const style = {
    cursor: 'pointer'
  }

  return (
      <BookmarkAddedIcon style={style} onClick={() => {handleBookmark(id)}} color={boolean === true ? 'primary' : 'disabled'}/>
  )
}

export default Boockmark