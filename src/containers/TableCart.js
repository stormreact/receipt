import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
import { getCartProducts } from "../reducers";
import * as Table from "reactabular-table";

class TableCart extends React.Component {
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
        property: "quantity",
        header: {
          label: "Quantity"
        },
        props: {
          style: { minWidth: 70, width: 70 }
        }
      },
      {
        property: "removefromcart",
        header: {
          label: "Remove from cart"
        },
        props: {
          style: { minWidth: 140, width: 140 }
        },
        cell: {
          formatters: [
            (value, { rowData }) =>
              <span
                className="remove"
                onClick={() => this.props.removeFromCart(rowData.id)}
                style={{ cursor: "pointer" }}
              >
                &#x2715;
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
  rows: getCartProducts(state)
});

export default connect(
  mapStateToProps,
  { removeFromCart }
)(TableCart);
