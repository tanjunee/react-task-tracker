import { render } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Router>
        <Footer />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
