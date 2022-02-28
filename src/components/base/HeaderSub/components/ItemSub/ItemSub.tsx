import styled, { css } from 'styled-components';

export const ItemSub = styled.a<{ active?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  ${({ active }) =>
    active &&
    css`
      &:before {
        content: '';
        display: block;
        position: absolute;
        height: 0;
        left: 9px;
        right: 9px;
        bottom: 0;
        border-bottom: 1px solid #f8c948;
      }
    `}
`;
