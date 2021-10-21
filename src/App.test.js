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

test('should render planets division element', async () => {
  const result = render(<App />);
  const divisionElement = await result.container.querySelector('#planets')
  expect(divisionElement).toBeInTheDocument();
});

// test('should render 5 planet division element', async () => {
//   const result = render(<App />);
//   const divisionElement = await result.container.querySelector('#planets')
//   expect(divisionElement.getElementsByClassName('planet').length).toBe(1);
// });

// test('should render 5 planet division element', async () => {
//     const result = render(<App />);
//     const divisionElements = result.container.getElementsByClassName('planet')
//     expect(divisionElements.length).toBe(5);
//   });

  test('should render 5 planet division element', async () => {
    const result = render(<App />);
    const divisionElements = result.container.getElementsByClassName('planet')
    expect(divisionElements.getElementsByClassName).toBe('planet');
  });