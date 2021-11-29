import React, { useState, useEffect } from 'react';
import '../styles/Table.css'

import { useSelector, useDispatch } from 'react-redux';

const RouteOptions = (props) => {
  const { selectedTransportationMode, selectedDirection, selectedStop } = props;
  const [tableData, setTableData] = useState(['table data 1', 'table data 2', 'table data 2']);
  const valuesFromRedux = useSelector((state) => state.siteVisitor.value)

  // note that this api call would need access to the selections from the dropdown menu
  console.log("****")
  console.log(selectedTransportationMode)
  console.log(selectedDirection)
  console.log(selectedStop)
  console.log("****", valuesFromRedux)




  useEffect(() => {
    const fetchRouteOptions = async () => {
        try {
          const resp = await fetch('http://mock-api-url', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'applications/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': 'true',
              'Access-Control-Allow-Methods': 'GET',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
          });
          console.log('resp', resp)
          const data = await resp.json();
          console.log('data', data)
        } catch(err) {
          console.error(err);
        }
        fetchRouteOptions();
      }
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
