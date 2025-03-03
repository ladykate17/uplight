import React from 'react';

interface ButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const Button = ({ onClick, disabled }: ButtonProps) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            Generate
        </button>
    );
};

export default Button;