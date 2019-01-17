import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTabel extends Component {

  getCategories = () => {
    let categories = [];
    this.getFilteredProducts().forEach((item, i) => {
      if (!categories.includes(item.category)) categories.push(item.category);
    });
    return categories;
  };

  getFilteredProducts = () => {
    let products = this.props.products.filter((item,i) => (
       (item.name.toLowerCase().includes(this.props.filterText.toLowerCase()) && ((this.props.inStockOnly && item.stocked) ||(!this.props.inStockOnly)))      
    ))
    return products 
  }

  render() {
    return (
      <div className="productTabel">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.getCategories().map((item, i) => (
              <React.Fragment key={i}>
                <ProductCategoryRow category={item} />
                <ProductRow products={this.getFilteredProducts()} category={item} />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }



}
