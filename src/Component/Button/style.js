import { css } from '@emotion/css';

export const styBtnNavigation = css`
  text-decoration: none;
  font-weight: 500;
`;

export const styActiveBtn = css`
  color: blue;
  :hover {
    color: dark-blue;
  }
`;

export const styNormalBtn = css`
  color: #000;
  :hover {
    color: blue;
  }
`;

export const styContainerBtn = css`
  width: 50px;
  height: 50px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const styBtnText = css`
  cursor: pointer;
  font-weight: 600;
  :hover {
    color: blue;
  }
`;

export const styBtnSubmit = css`
  height: 45px;
  width: 90%;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
`;
