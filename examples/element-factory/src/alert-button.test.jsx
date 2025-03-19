import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {});

  it.only('should trigger an alert on click of the button', async () => {
    /**
     * This test should type in the input field and clcik on the button.
     * We need to mock the button click to see if after clicked it shows the alret message.
     */

    // const alertSpy = vi.spyOn(window, 'alert');
    const handleSubmit = vi.fn();

    render(<AlertButton onSubmit={handleSubmit} initialMessage="Hello" />);
    const input = screen.getByLabelText('Message');
    const button = screen.getByRole('button', { name: /trigger/i });

    await act(async () => {
      await userEvent.clear(input);
      await userEvent.type(input, 'Hello');
      await userEvent.click(button);
    });

    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledWith('Hello');
  });
});
