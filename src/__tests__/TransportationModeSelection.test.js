import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import TransportationModeSelection from '../components/TransportationModeSelection';

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
          <TransportationModeSelection />
        </BrowserRouter>
      </Provider>
    );
    const transportationDropDownMenu = screen.getByTestId('transportation-element')
    expect(transportationDropDownMenu).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBe(5);
  });

  test('displays proper modes of transportation', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TransportationModeSelection />
        </BrowserRouter>
      </Provider>
    );
    const selectElementDefaultOption = screen.getByText(/Select method of transportation/i);
    expect(selectElementDefaultOption).toBeInTheDocument();
    const selectElementBusOption = screen.getByText(/Bus/i);
    expect(selectElementBusOption).toBeInTheDocument();
    const selectCaltrainElementOption = screen.getByText(/Caltrain/i);
    expect(selectCaltrainElementOption).toBeInTheDocument();
    const selectBartElementBusOption = screen.getByText(/BART/i);
    expect(selectBartElementBusOption).toBeInTheDocument();
    const selectMuniElementBusOption = screen.getByText(/Muni/i);
  });

  test('should allow user to change the transportation option', () => {
    const setIsTransportationModeSelected = jest.fn();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <TransportationModeSelection setIsTransportationModeSelected={setIsTransportationModeSelected} />
        </BrowserRouter>
      </Provider>
    );
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'Bus' })
    );
    expect(screen.getByRole('option', { name: 'Bus' }).selected).toBe(true);
  });
});
