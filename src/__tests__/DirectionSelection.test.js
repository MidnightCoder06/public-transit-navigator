import { render, screen } from '@testing-library/react';
import DirectionSelection from '../components/DirectionSelection';

test('dropdown menu has the proper number of options', () => {
  render(<DirectionSelection />);
  // how to query the length of a select element
  // by test id?
  // const submitButtons = queryByTestId('app')
  // expect(submitButtons).toHaveLength(3)
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
