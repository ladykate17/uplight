import React from 'react';
import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button.component';

test('renders button component', () => {    
    render(<Button onClick={() => {}} disabled={false} />);
    const buttonElement = screen.getByText('Generate');
    expect(buttonElement).toBeInTheDocument();
});