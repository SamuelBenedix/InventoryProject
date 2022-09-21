import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
  styContainer,
  stySku,
  styInventoryName,
  styContainerPrice,
  styContainerSupplier,
  styContainerInventory,
  stySupplierName,
} from './style';
import { HeaderNavigation } from '../../Component';

const InventoryDetail = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setData([]);
    axios
      .get(
        `https://mobile.dev.quadrant-si.id/developertest/InventoryItem/${id}`
      )
      .then((res) => {
        setData(res.data);
      });
  }, [id]);

  return (
    <div className={styContainer}>
      <HeaderNavigation
        onClickFirst={() => {
          navigate(-1);
        }}
        onClickSecond={() => {
          console.log(data);
          navigate(`/inventory/update/${id}`, { state: data });
        }}
        edit
      />
      <div className={styContainerInventory}>
        <div>
          <div className={stySku}>SKU : {data.sku}</div>
          <div className={styInventoryName}>{data.name}</div>
        </div>
        <div className={styContainerPrice}>
          <div>
            <div>Cost Price : Rp {data.costPrice}</div>
            <div>Retail Price : Rp {data.retailPrice}</div>
          </div>
          <div>Qty : {data.qty}</div>
        </div>
      </div>

      {data.supplier && (
        <div className={styContainerSupplier}>
          <div>Supplier:</div>
          <div className={stySupplierName}>{data.supplier.name}</div>
          <div>{`${data.supplier.address} ${data.supplier.city} ${data.supplier.postCode}`}</div>
        </div>
      )}
    </div>
  );
};

export default InventoryDetail;
