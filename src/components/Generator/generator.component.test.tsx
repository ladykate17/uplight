import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Generator from './generator.component';

test('renders generator component', () => {
    render(<Generator />);
    const phraseInput = screen.getByPlaceholderText('Phrase');
    const keyInput = screen.getByPlaceholderText('Secret Key');
    const buttonElement = screen.getByText('Generate');
    expect(phraseInput).toBeInTheDocument();
    expect(keyInput).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});

test('renders a generated result', () => {
    render(<Generator />);
    const phraseInput: HTMLInputElement = screen.getByPlaceholderText('Phrase');
    const keyInput: HTMLInputElement  = screen.getByPlaceholderText('Secret Key');
    const buttonElement = screen.getByText('Generate');
    const phraseValue = 'Hello World';
    const keyValue = '123';
    const phraseInputValue = screen.getByTestId('phrase');
    const keyInputValue = screen.getByTestId('key');
    const resultElement = screen.queryByText('GENERATED RESULT');

    expect(phraseInput).toBeInTheDocument();
    expect(keyInput).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(phraseInputValue).toBeInTheDocument();
    expect(keyInputValue).toBeInTheDocument();
    expect(resultElement).not.toBeInTheDocument();
    
    fireEvent.change(phraseInput, { target: { value: phraseValue } });
    expect(phraseInput.value).toBe(phraseValue);

    fireEvent.change(keyInput, { target: { value: keyValue } });
    expect(keyInput.value).toBe(keyValue);

    fireEvent.click(buttonElement);
    const resultElementAfterClick = screen.getByText('GENERATED RESULT');
    expect(resultElementAfterClick).toBeInTheDocument();
});