import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Selected = ({valueOp, options, handleChange, handleBtn}) => {
  return (
    <Stack spacing={2} direction="row">
      <Box sx={{ minWidth: 300 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
          <Select
            className='input-default'
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valueOp}
            label="Сортировка"
            onChange={handleChange}
          >
            {
              options &&
                options.map(el => (
                  <MenuItem 
                  key={el.value} 
                  value={el.value}
                  >
                    {el.label}
                  </MenuItem>
                ))
            }
          </Select>
        </FormControl>
      </Box>
      <Button onClick={handleBtn} variant="outlined">Сбросить сортировку</Button>
    </Stack>
  )
}

export default Selected