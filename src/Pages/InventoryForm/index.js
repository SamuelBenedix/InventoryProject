import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Button,
  Gap,
  HeaderNavigation,
  InputForm,
  Dropdown,
} from '../../Component';
import { styContainer, styTitle, styContainerForm } from './styles';

const InventoryForm = ({ type }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [supplier, setSupplier] = useState([]);

  const state = location.state;
  const [data, setData] = useState({
    name: state ? state.name : '',
    sku: state ? state.sku : '',
    costPrice: state ? state.costPrice : '',
    retailPrice: state ? state.retailPrice : '',
    qty: state ? state.qty : 0,
    marginPercentage: state ? state.marginPercentage : 0,
    supplierId: state ? state.supplier?.id : 0,
    isDeleted: true,
    id: state ? state.id : '',
  });

  useEffect(() => {
    axios
      .get(
        `https://mobile.dev.quadrant-si.id/developertest/supplier/inquiry/1/100`
      )
      .then((res) => {
        setSupplier(res.data.data);
      });
  }, [id, type]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (type === 'edit') {
      axios
        .put(
          `https://mobile.dev.quadrant-si.id/developertest/InventoryItem/UpdateItem`,
          data
        )
        .then((response) => {
          navigate(`/inventory`, { replace: true });
        });
    } else {
      axios
        .post(
          `https://mobile.dev.quadrant-si.id/developertest/InventoryItem/AddItem`,
          data
        )
        .then((response) => {
          navigate(`/inventory`, { replace: true });
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div className={styContainer}>
      <HeaderNavigation
        onClickFirst={() => {
          navigate(-1);
        }}
      />
      <Gap height={20} />
      <div className={styTitle}>
        {type === 'edit' ? 'Update Inventory' : 'Tambah Inventory'}
      </div>
      <form className={styContainerForm} onSubmit={onHandleSubmit}>
        <InputForm
          label="SKU"
          value={data.sku}
          onChange={(e) => {
            setData({ ...data, sku: e });
          }}
        />
        <Gap height={12} />
        <InputForm
          label="Name"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e });
          }}
        />
        <Gap height={12} />
        <InputForm
          label="Cost Price"
          value={data.costPrice}
          onChange={(e) => {
            setData({ ...data, costPrice: e });
          }}
          number
        />
        <Gap height={12} />
        <InputForm
          label="Retail Price"
          value={data.retailPrice}
          onChange={(e) => {
            setData({ ...data, retailPrice: e });
          }}
          number
        />
        <Gap height={12} />
        <InputForm
          label="Qty"
          value={String(data.qty)}
          onChange={(e) => {
            setData({ ...data, qty: e });
          }}
          number
        />
        <Gap height={12} />
        <InputForm
          value={String(data.marginPercentage)}
          label="Margin Percentage"
          onChange={(e) => {
            setData({ ...data, marginPercentage: e });
          }}
          number
        />
        <Gap height={12} />
        <Dropdown
          label="Supplier"
          data={supplier}
          value={data.supplierId}
          onChange={(e) => {
            setData({ ...data, supplierId: e.target.value });
          }}
        />

        <Gap height={14} />
        <Button type="btn-submit" text="Submit" />
      </form>
    </div>
  );
};

export default InventoryForm;
