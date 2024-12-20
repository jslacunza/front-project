import React from 'react';
import { render } from '@testing-library/react';
import { Breadcrum } from './Breadcrum';
import { useRouter, usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('Breadcrum Component', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
    (usePathname as jest.Mock).mockReturnValue('/cart')
  })

  it('should render Breadcrum', () => {
    const { getByText } = render(<Breadcrum />)
      expect(getByText('Back to Catalog')).toBeInTheDocument()
  });
  it('should not render Breadcrum', () => {
    (usePathname as jest.Mock).mockReturnValue('/')
    const { queryByText } = render(<Breadcrum />)
    expect(queryByText('Back to Catalog')).not.toBeInTheDocument()
  });
});