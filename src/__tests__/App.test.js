/*
For unit tests, I use shallow rendering (as opposed to deep tree rendering) and the Redux-mock-store library.
For integration tests, I use mount rendering (deep tree rendering) and an actual Redux store.
*/

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'; // Redux specific testing library -> https://www.npmjs.com/package/redux-mock-store
import App from '../App';

/*
Everything you pass into mockStore will be your Redux store's initial state.
So make sure you provide everything that's needed by your connected React component to render without any problems.
*/
const mockStore = configureStore([]);

describe('top level app component test', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      siteVisitor: 'foo bar',
    });
  });

  test('renders correct title', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const titleElement = screen.getByText(/Real-time Bay Area Departures/i);
    expect(titleElement).toBeInTheDocument();
  });
});
