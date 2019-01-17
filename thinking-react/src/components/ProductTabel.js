import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTabel extends Component {
  getCategories = () => {
    let categories = [];
    this.props.products.forEach((item, i) => {
      if (!categories.includes(item.category)) categories.push(item.category);
    });
    return categories;
  };

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
                <ProductRow products={this.props.products} category={item} />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    this.getCategories();
  }
}
