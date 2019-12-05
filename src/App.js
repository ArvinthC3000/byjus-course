import React from 'react';
import './App.css';
import InputSearch from './components/InputSearch'
import FilterResult from './components/FilterResult'

class App extends React.Component {
  render(){
    return (
      <div>
        <InputSearch />
        <FilterResult />
      </div>
    );
  }
}

export default App;
