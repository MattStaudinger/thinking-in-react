import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar-container">
        <input className="searchbar" type="text" placeholder="Search..."/>
        <input type="checkbox" /> Only show products in stock
      </div>
    )
  }
}
