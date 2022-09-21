import React from 'react';
import { styContainer } from './style';

const PageNumber = ({ type, onChange }) => {
  return (
    <div className={styContainer}>
      <div>{type}</div>
      <input
        onChange={onChange}
        type="number"
        min={1}
        max={10}
        pattern="[0-9]*"
        inputMode="numeric"
      />
    </div>
  );
};

export default PageNumber;
