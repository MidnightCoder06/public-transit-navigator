import React, { useState, useEffect } from 'react';
import '../styles/Table.css'

/*
`useSelector` Allows you to extract data from the Redux store state, using a selector function.
The selector function should be pure since it is potentially executed multiple times and at arbitrary points in time.

In computer programming, a pure function is a function that has the following properties:
- The function return values are identical for identical arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams).
- The function application has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or input/output streams).
Thus a pure function is a computational analogue of a mathematical function

The selector is approximately equivalent to the `mapStateToProps argument to connect` conceptually.
The selector will be called with the entire Redux store state as its only argument.
The selector will be run whenever the function component renders
(unless its reference hasn't changed since a previous render of the component so that a cached result can be returned by the hook without re-running the selector).
useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched.

Examples:

Basic usage:

import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector((state) => state.counter)
  return <div>{counter}</div>
}

Using props via closure to determine what to extract:

import React from 'react'
import { useSelector } from 'react-redux'

export const TodoListItem = (props) => {
  const todo = useSelector((state) => state.todos[props.id])
  return <div>{todo.text}</div>
}

*/

import { useSelector, useDispatch } from 'react-redux';

const RouteOptions = (props) => {
  const [tableData, setTableData] = useState(['table data 1', 'table data 2', 'table data 2']);
  const valuesFromRedux = useSelector((state) => state.siteVisitor.value)

  // TODO: make an api call here that would need access to all the selections from the dropdown menu
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
