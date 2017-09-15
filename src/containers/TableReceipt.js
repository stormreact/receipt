import React from "react";
import { connect } from "react-redux";
import { receiptDetail } from "../actions";
import { getVisibleReceiptDetails } from "../reducers/receipts";
import * as Table from "reactabular-table";

class TableReceipt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: this.getColumns()
    };
  }

  getColumns() {
    return [
      {
        property: "id",
        header: {
          label: "Id"
        },
        props: {
          style: { minWidth: 175, width: 175 }
        }
      },
      {
        property: "total",
        header: {
          label: "Total"
        },
        props: {
          style: { minWidth: 40, width: 40 }
        }
      },
      {
        property: "timestamp",
        header: {
          label: "Timestamp"
        },
        props: {
          style: { minWidth: 70, width: 70 }
        }
      },
      {
        property: "detail",
        header: {
          label: "Detail"
        },
        props: {
          style: { minWidth: 140, width: 140 }
        },
        cell: {
          formatters: [
            (value, { receiptData }) =>
              <span
                className="remove"
                onClick={() => this.props.receiptDetail(receiptData.id)}
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
  rows: getVisibleReceiptDetails(state.receipts)
});

export default connect(
  mapStateToProps,
  { receiptDetail }
)(TableReceipt);
