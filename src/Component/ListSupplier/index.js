import React from 'react';
import { styContainer, styNameSupplier, styAddress } from './style';

const ListSupplier = ({ data, onClick }) => {
  return (
    <div onClick={onClick} className={styContainer}>
      <div className={styNameSupplier}>{data.name}</div>
      <div
        className={styAddress}
      >{`${data.address} ${data.city} ${data.postCode}`}</div>
    </div>
  );
};

export default ListSupplier;
