import React from 'react';
import Button from '../Button';
import { styContainer } from './styles';

const HeaderNavigation = ({ onClickFirst, onClickSecond, edit }) => {
  return (
    <div>
      <div className={styContainer}>
        <Button type={'btn-text'} onClick={onClickFirst} text="Back" />
        {edit && (
          <Button type={'btn-text'} onClick={onClickSecond} text="Edit" />
        )}
      </div>
    </div>
  );
};

export default HeaderNavigation;
