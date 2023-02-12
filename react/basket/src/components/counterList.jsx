import React from "react";
import Counter from "./counter";
import Button from '@mui/material/Button';

const CounterList = () => {

  const wrapper = {
    maxWidth: '1900px',
    width: '100%',
    margin: '20px auto 0',
    padding: '0 15px',
  }

  const initialState = [
    {id: 0, value: 0, name: 'Ненужная вещь', price: "200"},
    {id: 1, value: 0, name: 'Ложка',},
    {id: 2, value: 4, name: 'Вилка',},
    {id: 3, value: 0, name: 'Тарелка',},
    {id: 4, value: 0, name: 'Набор минималиста',}
  ]

  const [counter, setCounter] = React.useState(initialState)

  const incrementCount = (index) => {
    const newCountValue = counter.map((counter) => {
      if(counter.id === index) {
        return {...counter, value: counter.value + 1}
      }
      return counter
    })

    setCounter(newCountValue)
  }

  const decrementCount = (index) => {
    const newCountValueMin = counter.map((counter) => {
      if(counter.id === index) {
        return {...counter, value: counter.value - 1}
      }
      return counter
    })

    setCounter(newCountValueMin)
  }

  const handleDelete = (id) => {
    setCounter(counter.filter(el => el.id !== id))
  }

  const handleReset = (initialState) => {
    setCounter(initialState)
  }

  return (
    <div style={wrapper}>
      
      {
        counter && counter.map(el => {
          return (
            <Counter key={el.id} onIncrementCount={incrementCount} onDecrementCount={decrementCount} onDelete={handleDelete} {...el}/>
          )
        })
      }

      <div>
        <Button variant="contained" onClick={() => handleReset(initialState)}>Сброс</Button>
      </div>

    </div>
  )
}

export default CounterList