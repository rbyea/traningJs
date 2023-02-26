import React from 'react';
import './App.css';
import GroupList from './components/groupList';

import api from './api'

function App() {
  const [list, setList] = React.useState(api.episodes.fetchAll().then(res => {return res}))
  const [year, setYear] = React.useState(api.episodesYear.fetchAllYear().then(res => {return res}))

  return (
    <GroupList list={list} year={year}/> 
  );
}

export default App;
