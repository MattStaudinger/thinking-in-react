import React, { Component } from "react";

export default class ProductRow extends Component {
  getProducts = () => {
    let products = this.props.products.filter(
      (item, i) => item.category === this.props.category
    );
    return products;
  };

  render() {
    return (
          this.getProducts().map((item,i) => (
            <tr key={i}>
              <td className={item.stocked ? null : "item-not-stocked"}>
                {item.name}
              </td>
              <td>{item.price}</td>
            </tr>
          ))
    );
  }
}
