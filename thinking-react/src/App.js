import React, { Component } from 'react';
import './App.css';
import {dataJSON} from './data'
import FilterableProductTable from './components/FilterableProductTable'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: dataJSON
    }
  }

  render() {
    const {data} = this.state
    return (
      <div className="App">
        <FilterableProductTable data={data}/>
      </div>
    );
  }
}

export default App;
