import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect } from 'vitest';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('Should render title', () => {
    const titleEl = screen.getByText(/Todo App/);

    expect(titleEl).toBeInTheDocument();
  });
});
