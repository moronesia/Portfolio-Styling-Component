import { render, screen } from '@testing-library/react';
// import App from './App';
import Bootstrap from "../src/Bootstrap";

test('renders learn react link', () => {
  render(<Bootstrap />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
