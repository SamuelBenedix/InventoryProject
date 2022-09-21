import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

import { Button, ButtonNavigation, Gap, ListSupplier } from '../../Component';
import {
  styContainer,
  styContainerBottom,
  styTitle,
  styContainerTop,
} from './styles';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setData([]);
    axios
      .get(
        `https://mobile.dev.quadrant-si.id/developertest/supplier/inquiry/1/100`
      )
      .then((res) => {
        setData(res.data.data);
      });
  }, []);

  return (
    <div className={styContainer}>
      <div className={styContainerTop}>
        <h1 className={styTitle}>Supplier </h1>
        {data ? (
          data.map((e, i) => (
            <div key={i}>
              <ListSupplier
                data={e}
                onClick={() => {
                  navigate(`/supplier/add`, {
                    state: e,
                  });
                }}
              />
              <Gap height={10} />
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
      <div>
        <div className={styContainerBottom}>
          <Button
            type="btn-plus"
            onClick={(e) => {
              console.log('test');
              navigate(`/supplier/add`);
            }}
          />
        </div>
        <ButtonNavigation location={location.pathname} />
      </div>
    </div>
  );
};

export default Home;
