import { render, screen } from '@testing-library/react';
import StopSelection from '../components/StopSelection';

test('Ensure the dropdown menu exists', () => {
  render(<StopSelection />);
  const stopDropDownMenu = screen.getByTestId('stop-element');
  expect(stopDropDownMenu).toBeInTheDocument();
});
