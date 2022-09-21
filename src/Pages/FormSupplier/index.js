import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { styContainer } from './styles';

const FormSupplier = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://mobile.dev.quadrant-si.id/developertest/supplier/inquiry/${page}/${size}`
      )
      .then((res) => {
        setData(res.data.data);
      });
  }, [page, size]);

  return (
    <div>
      <div className={styContainer}></div>
    </div>
  );
};

export default FormSupplier;
