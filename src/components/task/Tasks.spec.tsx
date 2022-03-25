import { render } from '@testing-library/react';
import { getMockTask } from '../../utils/TestUtils';
import Tasks from './Tasks';

describe('Tasks', () => {
  it('should render successfully', () => {
    const mockOnDelete = jest.fn();
    const mockOnToggle = jest.fn();

    const { baseElement } = render(
      <Tasks tasks={[getMockTask(false)]} onDelete={mockOnDelete} onToggle={mockOnToggle} />
    );

    expect(baseElement).toBeTruthy();
  });
});
