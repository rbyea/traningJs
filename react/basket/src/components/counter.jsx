import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './styles.css'

const Counter = (props) => {

  const valueVisible = props.value === 0 ? 'пусто' : props.value
  const valueClassName = props.value === 0 ? 'active' : ''

  return (
    <Stack className="stack-buttons" spacing={3} justifyContent="flex-start" alignItems="center" direction="row">
      <div>{props.name}</div>
      <div className={`button-value ${valueClassName}`}>{valueVisible}</div>
      <Button onClick={() => props.onIncrementCount(props.id)} variant="contained">+</Button>
      <Button onClick={() => props.onDecrementCount(props.id)} className={`visible ${valueClassName}`} variant="contained">-</Button>
      <Button  variant="contained" onClick={() => props.onDelete(props.id)} color="error">Удалить</Button>
    </Stack>
  )
}

export default Counter