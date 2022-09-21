import { css } from '@emotion/css';

export const styDropdownWrapper = css`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

export const stySelect = css`
  width: 90%;
  appearance: none;
  background-color: transparent;
  border: 1px solid #808080;
  border-radius: 3px;
  padding: 5px;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  &::-ms-expand {
    display: none;
  }
`;

export const styLabel = css`
  margin-bottom: 1rem;
`;
