import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DirectionSelection from '../components/DirectionSelection';

test('dropdown menu has the proper number of options', () => {
  render(<DirectionSelection />);
  const directionDropDownMenu = screen.getByTestId('direction-element');
  expect(directionDropDownMenu).toBeInTheDocument();
  expect(directionDropDownMenu).toHaveLength(3);
});

test('renders proper dropdown menu options', () => {
  render(<DirectionSelection />);
  const selectElementDefaultOption = screen.getByText(/Select direction/i);
  expect(selectElementDefaultOption).toBeInTheDocument();
  const selectElementNorthboundOption = screen.getByText(/Northbound/i);
  expect(selectElementNorthboundOption).toBeInTheDocument();
  const selectElementSouthboundOption = screen.getByText(/Southbound/i);
  expect(selectElementSouthboundOption).toBeInTheDocument();
});

test('should allow user to change the direction option', () => {
  const setDirectionSelected = jest.fn();
  const setIsDirectionSelected = jest.fn();
  render(<DirectionSelection setDirectionSelected={setDirectionSelected} setIsDirectionSelected={setIsDirectionSelected} />);
  userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', { name: 'Northbound' })
  );
  expect(screen.getByRole('option', { name: 'Northbound'}).selected).toBe(true);
});
