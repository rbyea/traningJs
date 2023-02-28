import React from 'react';
import Selected from './components/select';
import './App.css'
import CardItem from './components/card';
import _ from "lodash";
import axios from 'axios'

function App() {

  const sortOptions = [
    { 
      value: "priceDesc",
      label: "Цена по убыванию",
      sort: (products) => _.orderBy(products, ["price"], ["desc"])
    },
    { 
      value: "priceAsc",
      label: "Цена по возрастанию",
      sort: (products) => _.orderBy(products, ["price"], ["asc"])
    },
    { 
      value: "ratingDesc",
      label: "Рейтинг по убыванию",
      sort: (products) => _.orderBy(products, ["rating.rate"], ["desc"])
    },
    { 
      value: "ratingAsc",
      label: "Рейтинг по возрастанию",
      sort: (products) => _.orderBy(products, ["rating.rate"], ["asc"])
    },
    { 
      value: "titleAsc",
      label: "Заголовок по алфавиту",
      sort: (products) => _.orderBy(products, ["title"], ["asc"])
    },
  ];

  const [items, setItems] = React.useState([])
  const [sortProducts, setSortProducts] = React.useState([])
  const [filter, setFilter] = React.useState([])
  const [sortSign, setSortSign] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
    axios.get(apiUrl)
      .then((resp) => {
        const allPersons = resp.data;
        setItems(allPersons);
        setSortProducts(items);
        setFilter(allPersons)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(true);
      });
  },[setItems,setFilter, loading]);

  React.useEffect(() => {
    const findOption = sortOptions.find(({ value }) => value === sortSign);

    if(findOption) {
      setSortProducts(findOption.sort(items))
    } else {
      setSortProducts(items)
    }
  }, [sortSign, setSortProducts])


  const handleChange = (event) => {
    setSortSign(event.target.value);
  };

  console.log(filter);

  const years = filter.map(
    ({ category }) => category
  );

  const uniqYears = [...new Set(years)]
  console.log(uniqYears);

  const handleBtn = () => {
    setSortProducts(items)
    setSortSign("")
  }

  if(!loading) return <p>Загрузка контента...</p> 

  return (
    <div className="App">
      <Selected 
      handleChange={handleChange} 
      handleBtn={handleBtn} 
      valueOp={sortSign} 
      options={sortOptions}/>

      <div className='container-wrapper'>
        {
          sortProducts.length > 0 ?
            sortProducts.map(item => (
              <CardItem key={item.id} item={item}/>
            ))
            : <p>Загрузка продуктов...</p>
        }
      </div>
    </div>
  );
}

export default App;
