import styled from 'styled-components';

export const SmallLink = styled.a`
  display: block;
  font-size: 11px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  transition: color 0.4s cubic-bezier(0, 0, 0, 1) 0s;

  &:hover {
    color: #fff;
  }
`;
