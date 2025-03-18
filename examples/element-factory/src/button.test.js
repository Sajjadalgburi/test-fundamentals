import { createButton } from './button.js';
import { screen, fireEvent } from '@testing-library/dom';
import { userEvent } from '@testing-library/user-event';

describe('createButton', () => {
  let button;

  beforeEach(() => {
    button = createButton();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should create a button element', () => {
    document.body.appendChild(button);

    const buttonInDOM = screen.getByRole('button', { name: 'Click Me' });

    expect(buttonInDOM).toBeInTheDocument();
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    document.body.appendChild(button);

    const buttonInDOM = screen.getByRole('button', { name: 'Click Me' });

    await userEvent.click(buttonInDOM);

    expect(buttonInDOM.textContent).toBe('Clicked!');
  });
});
