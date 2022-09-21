import React from 'react';

import { styContainer, styTextInput, styLabel } from './styles';

const InputForm = ({ label, onChange, value, number }) => {
  const onChangeText = (e) => {
    if (number) {
      const result = e.target.value.replace(/\D/g, '');
      onChange(result);
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <div className={styContainer}>
      <div className={styLabel}>{label}</div>
      <input
        className={styTextInput}
        type="text"
        onChange={onChangeText}
        value={value || ''}
      />
    </div>
  );
};

export default InputForm;
