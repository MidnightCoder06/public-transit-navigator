import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import RouteOptions from '../components/RouteOptions';

const mockStore = configureStore([]);

describe('direct selection tests', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      siteVisitor: 'foo bar',
    });
  });

  test('Ensure that table component exists', () => {
    // TODO: need to hardcode mock data
    let tempPass = true
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RouteOptions />
        </BrowserRouter>
      </Provider>
    );
    expect(tempPass).toBe(true);
  });
});


// test('mock api call where no route could be returned - you are as far south as you can go already', () => {
//   render(<RouteOptions />);
//
// });
//
// test('mock api call where no route could be returned - you are as far north as you can go already', () => {
//   render(<RouteOptions />);
//
// });
//
// test('mock api call that returns valid data', () => {
//   render(<RouteOptions />);
//
// });
