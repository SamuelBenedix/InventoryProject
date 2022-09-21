import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  styContainer,
  styTitle,
  styContainerTop,
  styContainerBottom,
} from './styles';

import { Button, ButtonNavigation, Gap, List } from '../../Component';

const Inventory = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setData([]);
    axios
      .get(
        `https://mobile.dev.quadrant-si.id/developertest/InventoryItem/inquiry/1/100`
      )
      .then((res) => {
        setData(res.data.data);
      });
  }, []);

  return (
    <div className={styContainer}>
      <div className={styContainerTop}>
        <h1 className={styTitle}>Inventory</h1>
        <div>
          {data.map((e, i) => (
            <div key={i}>
              <List
                data={e}
                onClick={() => {
                  navigate(`/inventory/detail/${e.id}`);
                }}
              />
              <Gap height={10} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={styContainerBottom}>
          <Button
            type="btn-plus"
            onClick={() => {
              navigate(`/inventory/add/`);
            }}
          />
        </div>
        <ButtonNavigation location={location.pathname} />
      </div>
    </div>
  );
};

export default Inventory;
