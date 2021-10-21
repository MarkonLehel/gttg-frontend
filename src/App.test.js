import { render, screen } from '@testing-library/react';
import App from './App';

test('should render header division element and check by role', () => {
  render(<App />);
  const divisionElement = screen.getByRole("heading");
  expect(divisionElement).toBeInTheDocument();
});

test('should render footer division element', () => {
  const result = render(<App />);
  const divisionElement = result.container.querySelector('#footer');
  expect(divisionElement).toBeInTheDocument();
});