import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders correct title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Real-time Bay Area Departures/i);
  expect(titleElement).toBeInTheDocument();
});
