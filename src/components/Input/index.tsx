/* eslint-disable react/prop-types */
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { InputContainer, Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, type, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container data-testid="input-container">
      <InputContainer
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
        ref={inputRef}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </Container>
  );
};

export default Input;
