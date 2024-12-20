import React from 'react';
import { render } from '@testing-library/react';
import { PageTitle } from './PageTitle';

describe('PageTitle Component', () => {
  it('renders the correct title', () => {
    const { getByText } = render(<PageTitle text="Test Title" />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('render subtitle', () => {
    const { getByText } = render(<PageTitle text="Test Title" subtitle='Test Subtitle' />);
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Subtitle')).toBeInTheDocument();
  });
});