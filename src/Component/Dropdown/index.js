import React from 'react';
import { stySelect, styLabel, styDropdownWrapper } from './styles';

const Dropdown = ({ label, data, onChange, value }) => {
  return (
    <div className={styDropdownWrapper}>
      <div className={styLabel}>{label}</div>
      <select className={stySelect} onChange={onChange} value={value}>
        <option disabled>Pilih Supplier</option>
        {data.map((e, i) => (
          <option key={i} value={e.id}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
