import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './generator.styles.css';
import Button from '../Button/button.component.tsx';

const Generator = () => {
    const [newHmac, setNewHmac] = useState('');
    const [newValues, setNewValues] = useState({
        phrase: '',
        key: ''
    });
    
    const onInputChange = (e: any): void => {
        setNewValues({
        ...newValues,
        [e.target.name]: e.target.value
        });
    }
    
    const generateEncryption = () => {
        setNewHmac(CryptoJS.HmacSHA256(newValues.phrase, newValues.key).toString());
        setNewValues({
            phrase: '',
            key: ''
        });
    }

    const isDisabled = () => {
        return newValues.phrase === '' || newValues.key === '';
    }
 
    return (
    <div className='main-container'>
      {/* TODO: Future - Move these inputs to a separate component */}
      <input
        data-testid='phrase'
        name='phrase'
        type='text'
        value={newValues.phrase}
        onChange={onInputChange}
        placeholder='Phrase'
        />
      <input
        data-testid='key'
        name='key'
        type='text'
        value={newValues.key}
        onChange={onInputChange}
        placeholder='Secret Key'
        />
      <Button onClick={() => generateEncryption()} disabled={isDisabled()}/>
        { newHmac && 
            <>
                <h3>GENERATED RESULT</h3>
                <div className='result-container'>
                    <p>{newHmac}</p>
                </div>
            </>
        }
    </div>
    );
};

export default Generator;