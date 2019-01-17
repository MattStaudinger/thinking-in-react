import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTabel from './ProductTabel'

export default class FilterableProductTable extends Component {
  render() {
    const {data} = this.props
    return (
      <div className="filterable-ProductTable">
        <SearchBar />
        <ProductTabel products={data}/>
      </div>
    )
  }
}
