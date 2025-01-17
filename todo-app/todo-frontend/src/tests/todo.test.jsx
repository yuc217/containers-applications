import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from '../Todos/Todo';

test('renders todo component with text and done status', () => {
  render(<Todo text="Sample todo text" done={false} />);
  const checkbox = screen.getByRole('checkbox');
  const text = screen.getByText('Sample todo text');

  expect(checkbox).not.toBeChecked();
  expect(text).toBeInTheDocument();
});
