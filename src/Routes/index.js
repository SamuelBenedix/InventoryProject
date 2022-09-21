import React from 'react';
import { Routes as Switch, Route, useLocation } from 'react-router-dom';
import {
  Home,
  Inventory,
  InventoryDetail,
  InventoryForm,
  SupplierForm,
} from '../Pages';
import { styContainer, styMobileView } from './styles';

const Routes = () => {
  let location = useLocation();

  return (
    <React.Fragment>
      <div className={styContainer}>
        <div className={styMobileView}>
          <Switch location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/detail/:id" element={<InventoryDetail />} />
            <Route
              path="/inventory/update/:id"
              element={<InventoryForm type="edit" />}
            />
            <Route
              path="/inventory/add/"
              element={<InventoryForm type="add" />}
            />
            <Route
              path="/supplier/add/"
              element={<SupplierForm type="add" />}
            />
            <Route
              path="/supplier/update/"
              element={<SupplierForm type="edit" />}
            />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Routes;
