import React, { Component } from "react";

export default class ProductCategoryRow extends Component {
  render() {
    return (
      <div>
        <tr>
          <td className="td-category">{this.props.category}</td>
        </tr>
      </div>
    );
  }
}
