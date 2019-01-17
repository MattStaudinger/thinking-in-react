import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTabel from "./ProductTabel";

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    };
  }

  handleFilterInput = (e) => {
  this.setState({
    filterText: e.target.value
  })
  }

  handleInStockOnly = (e) => {
  this.setState({
    inStockOnly: e.target.checked
  })
  }

  render() {
    const { data } = this.props;
    const { filterText, inStockOnly } = this.state;
    return (
      <div className="filterable-ProductTable">
        <SearchBar 
          handleFilterInput={this.handleFilterInput} 
          searchValue={filterText} 
          handleInStockOnly = {this.handleInStockOnly}
          checked = {inStockOnly}
        />
        <ProductTabel
          products={data}
          inStockOnly={inStockOnly}
          filterText={filterText}
        />
      </div>
    );
  }
}
