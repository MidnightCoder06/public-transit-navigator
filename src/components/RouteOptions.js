import React, { useState } from 'react';
import '../styles/Table.css'

const RouteOptions = () => {
  const [tableData, setTableData] = useState([['table header 1', 'table header 2'], ['table data 1', 'table data 2']]);
  const th = tableData[0];
  const td = tableData[1];
  return (
    <div className="center-table">
      <table>
        <tbody>
          <tr>
            {
              th.map((header, idx) => {
                return (
                  <th key={idx}>{header}</th>
                );
              })
            }
          </tr>
          <tr>
            {
              td.map((data, idx) => {
                return (
                  <td key={idx}>{data}</td>
                );
              })
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RouteOptions;
