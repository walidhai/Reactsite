import { render, screen } from '@testing-library/react';
import { Button } from 'bootstrap';
import App from './App';
import ButtonTest from './ButtonTest';

test('renders learn react link', () => {
  render(<ButtonTest />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
