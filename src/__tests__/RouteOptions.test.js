import { render, screen } from '@testing-library/react';
import RouteOptions from '../components/RouteOptions';


// need to hardcode mock data that would be passed in as props
  // before doing this look up documentation on how to test redux apps

test('Ensure that table component exists', () => {
  render(<RouteOptions />);
  // test id?
});

test('mock api call where no route could be returned - you are as far south as you can go already', () => {
  render(<RouteOptions />);

});

test('mock api call where no route could be returned - you are as far north as you can go already', () => {
  render(<RouteOptions />);

});

test('mock api call that returns valid data', () => {
  render(<RouteOptions />);

});
