import Header from './Header';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header', () => {
  const mockOnAdd = jest.fn();

  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <Header onAdd={mockOnAdd} showAdd={true} />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render add button', () => {
    render(
      <Router>
        <Header onAdd={mockOnAdd} showAdd={false} />
      </Router>
    );

    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('should render close button', async () => {
    render(
      <Router>
        <Header onAdd={mockOnAdd} showAdd={true} />
      </Router>
    );

    expect(screen.getByText('Close')).toBeInTheDocument();
  });
});
