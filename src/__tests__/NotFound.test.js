import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NotFound from '../components/NotFound';


const mockStore = configureStore([]);

describe('check 404 page properties', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      siteVisitor: 'foo bar',
    });
  });


  test('check for text', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </Provider>
    );
    const titleElement = screen.getByText(/Resource Not Found/i);
    expect(titleElement).toBeInTheDocument();
  });
});
