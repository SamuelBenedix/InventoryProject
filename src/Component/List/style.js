import { css } from '@emotion/css';

export const styContainer = css`
  border: 1px solid #808080;
  padding: 10px;
  border-radius: 5px;
  display: block;
  text-decoration: none;
  cursor: pointer;
  :hover {
    border: 2px solid blue;
  }
`;

export const styContainerDetail = css`
  display: flex;
  justify-content: space-between;
`;

export const styTitle = css`
  font-size: 23px;
  font-weight: 600;
`;

export const stySku = css`
  font-size: 12px;
  color: #808080;
`;

export const styPriceContainer = css`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-right: 20px;
`;

export const styPrice = css`
  font-size: 15px;
`;
