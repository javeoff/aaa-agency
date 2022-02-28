import styled from 'styled-components';
import { FC } from 'react';
import { Container } from 'react-bootstrap';

import { Flex } from '@components/grid/Flex/Flex';
import { ItemSub } from '@components/base/HeaderSub/components/ItemSub/ItemSub';

export interface IProps {
  className?: string;
  items?: Array<{
    title: string;
    link: string;
  }>;
}

export const HeaderSub: FC<IProps> = ({ className, items }) => (
  <SHeaderSub className={className}>
    <Container>
      <SFlex margin={30}>
        {items?.length &&
          items.map((item) => (
            <ItemSub href={item.link} active={false}>
              {item.title}
            </ItemSub>
          ))}
      </SFlex>
    </Container>
  </SHeaderSub>
);

const SFlex = styled(Flex)`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex-shrink: 0;
  }
`;

const SHeaderSub = styled.div`
  width: 100%;
  //background: rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 -1px var(--accents-2);
`;
