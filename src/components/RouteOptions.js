import React, { useState, useEffect } from 'react';
import '../styles/Table.css'

const RouteOptions = () => {
  const [tableData, setTableData] = useState(['table data 1', 'table data 2', 'table data 2']);

  // note that this api call would need access to the selections from the dropdown menu
  useEffect(() => {

  },[]);

  return (
    <div className="center-table">
      <table>
        <tbody>
          <tr>
            <th>Directions</th>
          </tr>
            {
              tableData.map((data, idx) => {
                return (
                  <tr key={idx}>
                    <td>{data}</td>
                  </tr>
                );
              })
            }
        </tbody>
      </table>
    </div>
  );
}

export default RouteOptions;
