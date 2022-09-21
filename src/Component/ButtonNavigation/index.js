import React from 'react';
import Button from '../Button';
import { styContainer } from './style';

const ButtonNavigation = ({ location }) => {
  return (
    <div className={styContainer}>
      <Button text="Supplier" link="/" type="link" active={location === '/'} />
      <Button
        text="Inventory"
        link="/inventory"
        type="link"
        active={location === '/inventory'}
      />
    </div>
  );
};

export default ButtonNavigation;
