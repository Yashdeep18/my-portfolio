import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio', () => {
  render(<App />);

  expect(
    screen.getAllByRole('heading', { level: 1, name: /yashdeep yadav/i })
  ).toHaveLength(2);
  expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
});
