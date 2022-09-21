import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Gap, HeaderNavigation, InputForm } from '../../Component';
import { styContainer, styTitle, styContainerForm } from './styles';

const SupplierForm = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state;

  const [data, setData] = useState({
    name: state ? state.name : '',
    address: state ? state.address : '',
    city: state ? state.city : '',
    postCode: state ? state.postCode : '',
    id: state ? state.id : '',
  });

  const [contacts, setContacts] = useState({
    name: '',
    value: '',
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const sendData = {
      ...data,
      contacts: [
        {
          name: contacts.name,
          contactType: 'mobilePhone',
          value: contacts.value,
        },
      ],
    };

    if (type === 'add') {
      axios
        .put(
          `https://mobile.dev.quadrant-si.id/developertest/Supplier/UpdateSupplier`,
          sendData
        )
        .then((response) => {
          navigate(`/`, { replace: true });
        })
        .catch((e) => {
          console.log(e.message);
        });
    } else {
      axios
        .post(
          `https://mobile.dev.quadrant-si.id/developertest/Supplier/AddSupplier`,
          sendData
        )
        .then((response) => {
          navigate(`/`, { replace: true });
        })
        .catch((e) => {
          console.log(e.message);
        });
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
      <div className={styTitle}>Tambah Supplier</div>
      <form className={styContainerForm} onSubmit={onHandleSubmit}>
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
          label="Address"
          value={data.address}
          onChange={(e) => {
            setData({ ...data, address: e });
          }}
        />
        <Gap height={12} />
        <InputForm
          label="City"
          value={data.city}
          onChange={(e) => {
            setData({ ...data, city: e });
          }}
        />
        <Gap height={12} />
        <InputForm
          label="Post Code"
          value={data.postCode}
          onChange={(e) => {
            setData({ ...data, postCode: e });
          }}
        />
        <Gap height={12} />
        <InputForm
          label="Contact Name"
          value={contacts.name}
          onChange={(e) => {
            setContacts({
              ...contacts,
              name: e,
            });
          }}
        />
        <Gap height={12} />
        <InputForm
          label="Phone Number"
          value={contacts.value}
          onChange={(e) => {
            setContacts({
              ...contacts,
              value: e,
            });
          }}
        />

        <Gap height={14} />
        <Button type="btn-submit" text="Submit" />
      </form>
    </div>
  );
};

export default SupplierForm;
