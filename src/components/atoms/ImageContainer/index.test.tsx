import React from 'react';
import { render } from '@testing-library/react';
import { ImageContainer } from './ImageContainer';

describe('ImageContainer', () => {
  it('renders component', () => {
    const { container } = render(<ImageContainer imageSrc="https://placehold.co/600x400" alt="test image" style='gameCart'/>);
    expect(container).toBeInTheDocument();
  });

  it('displays the correct image', () => {
    const { getByAltText } = render(<ImageContainer imageSrc="https://placehold.co/600x400" alt="test image" style='gameCart'/>);
    const imgElement = getByAltText('test image');
    expect(imgElement).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fplacehold.co%2F600x400&w=3840&q=75');
  });

});