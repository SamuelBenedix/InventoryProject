import React from 'react';
import { Link } from 'react-router-dom';
import { IcAdd } from '../../Assets';
import {
  styBtnNavigation,
  styContainerBtn,
  styBtnText,
  styBtnSubmit,
  styActiveBtn,
  styNormalBtn,
} from './style';
import { cx } from '@emotion/css';

const Button = ({ text, link, type, onClick, active }) => {
  switch (type) {
    case 'link':
      return (
        <Link
          className={
            active
              ? cx(styBtnNavigation, styActiveBtn)
              : cx(styBtnNavigation, styNormalBtn)
          }
          to={link}
        >
          {text}
        </Link>
      );
    case 'btn-plus':
      return (
        <div className={styContainerBtn} onClick={onClick}>
          <img height={35} src={IcAdd} alt="Ic-add" />
        </div>
      );
    case 'btn-text':
      return (
        <div className={styBtnText} onClick={onClick}>
          {text}
        </div>
      );
    case 'btn-submit':
      return (
        <button type="submit" className={styBtnSubmit} onClick={onClick}>
          {text}
        </button>
      );

    default:
      break;
  }
};

export default Button;
