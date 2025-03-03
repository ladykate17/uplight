import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
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
 
    return (
    <div className='main-container'>
      <input
        name='phrase'
        type='text'
        value={newValues.phrase}
        onChange={onInputChange}
        placeholder='Phrase'
        />
      <input
        name='key'
        type='text'
        value={newValues.key}
        onChange={onInputChange}
        placeholder='Secret Key'
        />
      <Button onClick={() => generateEncryption()}/>
      <div>
        {newHmac}
      </div>
    </div>
    );
};

export default Generator;