import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar-container">
        <input
          className="searchbar"
          type="text"
          placeholder="Search..."
          value={this.props.searchValue}
          onChange={e => {
            this.props.handleFilterInput(e);
          }}
        />
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={e => {
            this.props.handleInStockOnly(e);
          }}
        />{" "}
        Only show products in stock
      </div>
    );
  }
}
