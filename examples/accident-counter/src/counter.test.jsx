import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const resetCounter = screen.getByRole('button', { name: /reset/i });
    const decrementCounter = screen.getByRole('button', { name: /decrement/i });

    expect(resetCounter).toBeDisabled();
    expect(decrementCounter).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    const counterUnit = screen.getByTestId('counter-unit');

    expect(counterUnit).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    const counter = screen.getByTestId('counter-count'); // 0
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });

    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);

    expect(counter).toHaveTextContent('3');
  });

  it('displays "day" when the count is 1', async () => {
    const unitSpan = screen.getByTestId('counter-unit'); // 0
    const incrementButton = screen.getByRole('button', { name: /increment/i });

    await userEvent.click(incrementButton);
    expect(unitSpan).toHaveTextContent('day');
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    const counter = screen.getByTestId('counter-count'); // 0
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    const decrementButton = screen.getByRole('button', {
      name: /decrement/i,
    });

    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton); // 2 is displayed
    await userEvent.click(decrementButton); // 1 is displayed

    expect(counter).toHaveTextContent('1');
  });

  it('does not allow decrementing 0', async () => {
    const counter = screen.getByTestId('counter-count'); // 0

    const decrementButton = screen.getByRole('button', {
      name: /decrement/i,
    });
    await userEvent.click(decrementButton);

    expect(counter).toHaveTextContent('0');
    expect(decrementButton).toBeDisabled();
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    const counter = screen.getByTestId('counter-count'); // 0
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    const resetButton = screen.getByRole('button', {
      name: /reset/i,
    });

    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    await userEvent.click(resetButton);
    expect(counter).toHaveTextContent('0');
  });

  it.todo(
    'disables the "Decrement" and "Reset" buttons when the count is 0',
    () => {},
  );

  it.todo('updates the document title based on the count', async () => {});
});
