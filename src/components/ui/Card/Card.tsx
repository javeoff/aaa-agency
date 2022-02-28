import styled, { css } from 'styled-components';

export const CardName = styled.div`
  font-weight: 600;
`;

export const Card = styled.div<{ width?: string }>`
  padding: 30px 50px;
  background: #151515;
  box-shadow: 0 30px 60px rgb(0 0 0 / 52%);
  border-radius: 10px;
  height: 100%;

  ${({ width }) => css`
    width: ${width ?? 'auto'};
  `}
`;
