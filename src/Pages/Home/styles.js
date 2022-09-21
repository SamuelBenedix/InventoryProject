import { css } from '@emotion/css';

export const styContainer = css`
  height: calc(100vh - 35px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const styContainerBottom = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  padding: 15px 20px 0px 25px;
  position: absolute;
  right: 10px;
  bottom: 80px;
`;

export const styTitle = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 35px;
`;

export const styContainerTop = css`
  padding: 15px 20px 0px 25px;
  overflow: scroll;
`;
