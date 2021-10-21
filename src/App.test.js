import { render, screen } from '@testing-library/react';
import App from './App';

test('should render header division element', () => {
  const result = render(<App />);
  const divisionElement = result.container.querySelector('#header');
  expect(divisionElement).toBeInTheDocument();
});


/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/