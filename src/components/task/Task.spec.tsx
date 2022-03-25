import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getMockTask } from '../../utils/TestUtils';
import Task from './Task';

describe('Task', () => {
  const mockOnDelete = jest.fn();
  const mockOnToggle = jest.fn();

  it('should render successfully', () => {
    const { baseElement } = render(
      <Task task={getMockTask(false)} onDelete={mockOnDelete} onToggle={mockOnToggle} />
    );

    expect(baseElement).toBeTruthy();
  });

  it('should display reminder in green color for the task', () => {
    render(<Task task={getMockTask(true)} onDelete={mockOnDelete} onToggle={mockOnToggle} />);

    expect(screen.getByTestId('task')).toHaveClass('task reminder');
  });

  it('should double click and display reminder in green color for the task', () => {
    render(<Task task={getMockTask(false)} onDelete={mockOnDelete} onToggle={mockOnToggle} />);

    const task = screen.getByTestId('task');
    userEvent.dblClick(task);

    // Toggle reminder once only when double click
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  it('should delete the task', () => {
    render(<Task task={getMockTask(false)} onDelete={mockOnDelete} onToggle={mockOnToggle} />);

    const deleteIcon = screen.getByTestId('delete-icon');
    userEvent.click(deleteIcon);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });
});
