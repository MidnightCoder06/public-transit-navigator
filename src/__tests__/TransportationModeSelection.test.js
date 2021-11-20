import { render, screen } from '@testing-library/react';
import TransportationModeSelection from '../components/TransportationModeSelection';

test('displays proper modes of transportation', () => {
  render(<TransportationModeSelection />);
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
