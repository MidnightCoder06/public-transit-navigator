import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import DirectionSelection from '../components/DirectionSelection';

const mockStore = configureStore([]);

describe('direct selection tests', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      siteVisitor: 'foo bar',
    });
  });

  test('dropdown menu has the proper number of options', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DirectionSelection />
        </BrowserRouter>
      </Provider>
    );
    const directionDropDownMenu = screen.getByTestId('direction-element');
    expect(directionDropDownMenu).toBeInTheDocument();
    expect(directionDropDownMenu).toHaveLength(3);
  });

  test('renders proper dropdown menu options', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DirectionSelection />
        </BrowserRouter>
      </Provider>
    );
    const selectElementDefaultOption = screen.getByText(/Select direction/i);
    expect(selectElementDefaultOption).toBeInTheDocument();
    const selectElementNorthboundOption = screen.getByText(/Northbound/i);
    expect(selectElementNorthboundOption).toBeInTheDocument();
    const selectElementSouthboundOption = screen.getByText(/Southbound/i);
    expect(selectElementSouthboundOption).toBeInTheDocument();
  });

  test('should allow user to change the direction option', () => {
    const setIsDirectionSelected = jest.fn();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DirectionSelection setIsDirectionSelected={setIsDirectionSelected} />
        </BrowserRouter>
      </Provider>
    );
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Northbound' })
    );
    expect(screen.getByRole('option', { name: 'Northbound'}).selected).toBe(true);
  });
});
