// import React from "react";
// import "./TableStyles.css";
// import { removeKeyInObject } from "../utils/removeKeyInObject";

// const TableElement = ({ tableProps }) => {
//   const tableHeadStyles = tableProps?.headingStyle;
//   const tableCellStyles = tableProps?.tableStyle;
//   let heightStyle = {
//     height: tableCellStyles?.height,
//   };
//   // const heightStyle = tableCellStyles?.height
//   console.log("tableCellStyles", tableHeadStyles?.height);

//   const percentageToNumber = (percent) => parseFloat(percent?.replace("%", ""));

//   const headingHeight = percentageToNumber(tableProps?.headingStyle?.height);
//   const tableHeight = percentageToNumber(tableProps?.tableStyle?.height);
//   const remainingHeight = 100 - (headingHeight + tableHeight);
//   const totalRatio = headingHeight + tableHeight;
//   const adjustedHeadingHeight =
//     headingHeight + (remainingHeight * headingHeight) / totalRatio;
//   const adjustedTableHeight =
//     tableHeight + (remainingHeight * tableHeight) / totalRatio;

//   return (
//     <div
//       className="te_container"
//       style={tableHeadStyles}
//       // style={{
//       //   height: `calc(${
//       //     tableHeadStyles.height ||
//       //     (tableHeadStyles?.height.includes("%") ? "0%" : "0px")
//       //   } + ${
//       //     tableCellStyles.height ||
//       //     (tableCellStyles?.height.includes("%") ? "0%" : "0px")
//       //   })`,
//       // }}
//     >
//       {/* <p className="te_heading_text" style={tableHeadStyles}> */}
//       <p
//         className="te_heading_text"
//         style={{
//           ...tableHeadStyles,
//           height: tableProps?.headingStyle?.height.includes("%")
//             ? `${adjustedHeadingHeight}%`
//             : tableProps?.headingStyle?.height,
//         }}
//       >
//         {tableProps?.tableHeadingDetails?.tableHeading}
//       </p>
//       {/* <div className="te_content_container"> */}
//       {/* <table className="te_table_container" style={tableCellStyles}> */}
//       <table
//         className="te_table_container"
//         style={{
//           ...tableCellStyles,
//           height: tableProps?.tableStyle?.height.includes("%")
//             ? `${adjustedTableHeight}%`
//             : tableProps?.tableStyle?.height,
//         }}
//       >
//         <tbody className="te_tbbody_container">
//           {tableProps?.tableDetails?.tableData?.map((row_item, rowIndex) => (
//             <tr
//               style={removeKeyInObject(tableCellStyles, heightStyle)}
//               // style={tableCellStyles}
//               className="te_tbbody_container"
//               key={"row_item" + rowIndex.toString()}
//             >
//               {row_item?.map((col_item, colIndex) => (
//                 <td
//                   style={removeKeyInObject(tableCellStyles, heightStyle)}
//                   // style={tableCellStyles}
//                   key={"col_item" + colIndex.toString()}
//                 >
//                   {col_item}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* </div> */}
//     </div>
//   );
// };

// export default TableElement;

import React from "react";
import "./TableStyles.css";

const TableElement = ({ tableProps }) => {
  const tableHeadStyles = tableProps?.headingStyle;
  const tableCellStyles = tableProps?.tableStyle;
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
