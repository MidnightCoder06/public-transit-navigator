import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import StopSelection from '../components/StopSelection';

const mockStore = configureStore([]);

describe('direct selection tests', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      siteVisitor: 'foo bar',
    });
  });

  test('Ensure the dropdown menu exists', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <StopSelection />
        </BrowserRouter>
      </Provider>
    );
    const stopDropDownMenu = screen.getByTestId('stop-element');
    expect(stopDropDownMenu).toBeInTheDocument();
  });
});
