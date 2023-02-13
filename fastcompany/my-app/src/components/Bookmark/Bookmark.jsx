import React from 'react'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const Boockmark = ({...props}) => {

  const {boolean, handleBookmark, id, name} = props

  const style = {
    cursor: 'pointer'
  }

  return (
      <BookmarkAddedIcon style={style} onClick={() => {handleBookmark(id, name, boolean)}} color={boolean === true ? 'primary' : 'disabled'}/>
  )
}

export default Boockmark