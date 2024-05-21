import React from "react";
import "./TableStyles.css";

const TableElement = ({ tableProps }) => {
  const tableHeadStyles = tableProps?.tableHeadingDetails?.headingStyle;
  const tableCellStyles = tableProps?.tableStyle;
  console.log("Abdeali", tableCellStyles);
  return (
    <div className="te_container">
      <p className="te_heading_text" style={tableHeadStyles}>
        {tableProps?.tableHeadingDetails?.tableHeading}
      </p>
      <div className="te_content_container">
        <table className="te_table_container">
          <tbody className="te_tbbody_container" style={tableCellStyles}>
            {tableProps?.tableDetails?.tableData?.map((row_item, rowIndex) => (
              <tr
                style={tableCellStyles}
                className="te_tbbody_container"
                key={"row_item" + rowIndex.toString()}
              >
                {row_item?.map((col_item, colIndex) => (
                  <td
                    style={tableCellStyles}
                    key={"col_item" + colIndex.toString()}
                  >
                    {col_item}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableElement;
