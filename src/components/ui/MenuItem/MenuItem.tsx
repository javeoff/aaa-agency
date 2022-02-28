import styled from 'styled-components';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  href: string;
}

export const MenuItem: FC<IProps> = ({ href, children }) => (
  <Link href={href} passHref={true}>
    <SMenuItem>{children}</SMenuItem>
  </Link>
);

const SMenuItem = styled.a`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.45);
  margin-right: 22px;
  padding: 3px 2px;
  cursor: pointer;
  transition: color 0.4s cubic-bezier(0, 0, 0, 1) 0s;

  &:hover {
    color: #fff;
  }
`;
