import { render } from '@testing-library/react';
import AddTask from './AddTask';

describe('Add Task', () => {
  it('should render successfully', () => {
    const mockOnAdd = jest.fn();

    const { baseElement } = render(<AddTask onAdd={mockOnAdd} />);

    expect(baseElement).toBeTruthy();
  });
});
