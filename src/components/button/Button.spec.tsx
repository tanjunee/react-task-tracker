import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const mockOnClick = jest.fn();
  it('should render successfully', () => {
    const { baseElement } = render(<Button color="green" text="Add" onClick={mockOnClick} />);

    expect(baseElement).toBeTruthy();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });
});
