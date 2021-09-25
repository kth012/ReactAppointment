import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an h1', () => {
  const {getByText} = render(<App/>);
  const h1 = getByText(/User not found/);
  console.log(h1);
  expect(h1).toHaveTextContent(
      "User not found"
    );
});
