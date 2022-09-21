import React from 'react';
import {
  styContainer,
  styContainerDetail,
  styTitle,
  stySku,
  styPrice,
} from './style';

const List = ({ data, onClick }) => {
  return (
    <div className={styContainer} onClick={onClick}>
      <div>
        <div className={stySku}>SKU: {data.sku}</div>
        <div className={styTitle}>{data.name}</div>
      </div>

      <div className={styContainerDetail}>
        <div className={styPrice}>Cost Price : Rp {data.costPrice}</div>
        <div className={styPrice}>Retail Price : Rp {data.retailPrice}</div>
        <div className={styPrice}>qty :{data.qty}</div>
      </div>
    </div>
  );
};

export default List;
