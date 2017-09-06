import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import { getVisibleProducts } from "../reducers/products";
import * as Table from "reactabular-table";

class TableProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: this.getColumns()
    };
  }

  getColumns() {
    return [
      {
        property: "title",
        header: {
          label: "Title"
        },
        props: {
          style: { minWidth: 175, width: 175 }
        }
      },
      {
        property: "price",
        header: {
          label: "Price"
        },
        props: {
          style: { minWidth: 40, width: 40 }
        }
      },
      {
        property: "inventory",
        header: {
          label: "Inventory"
        },
        props: {
          style: { minWidth: 70, width: 70 }
        }
      },
      {
        property: "addtocart",
        header: {
          label: "Add to cart"
        },
        props: {
          style: { minWidth: 140, width: 140 }
        },
        cell: {
          formatters: [
            (value, { rowData }) =>
              <span
                className="remove"
                onClick={() => this.props.addToCart(rowData.id)}
                style={{ cursor: "pointer" }}
              >
                &#x271a;
              </span>
          ]
        }
      }
    ];
  }

  render() {
    const { rows } = this.props;
    const { columns } = this.state;

    const hasRows = rows.length > 0;
    if (!hasRows) {
      return null;
    }

    return (
      <Table.Provider
        className="pure-table pure-table-striped"
        columns={columns}
      >
        <Table.Header />
        <Table.Body rows={rows} rowKey="id" />
      </Table.Provider>
    );
  }
}

const mapStateToProps = state => ({
  rows: getVisibleProducts(state.products)
});

export default connect(
  mapStateToProps,
  { addToCart }
)(TableProduct);
