import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import CreateTodo from './CreateTodo';

const setup = () => {
  const utils = render(<CreateTodo />);
  const input = screen.getByPlaceholderText(/What/);
  return {
    input,
    ...utils,
  };
};

describe('App', () => {
  it('Should create new todo', () => {
    const { input } = setup();

    act(() => {
      fireEvent.change(input, { target: { value: 'test' } });
    });

    screen.debug();

    expect((input as HTMLInputElement).value).toBe('test');
  });
});
