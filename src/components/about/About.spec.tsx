import { render, screen } from '@testing-library/react';
import About from './About';
import { BrowserRouter as Router } from 'react-router-dom';

describe('About', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <About />
      </Router>
    );

    expect(baseElement).toBeTruthy();
    expect(screen.getByText('Version 1.0.0')).toBeInTheDocument();
  });
});
