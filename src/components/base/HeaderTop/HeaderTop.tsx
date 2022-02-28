import { FC } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { Flex } from '@components/grid/Flex/Flex';
import { FlexJustifyContent } from '@components/grid/Flex/enums/FlexJustifyContent';
import { FlexAlignItems } from '@components/grid/Flex/enums/FlexAlignItems';

interface IProps {
  showModal?(): void;
}

export const HeaderTop: FC<IProps> = ({ showModal }) => (
  <SHeader>
    <Container>
      <Flex
        justifyContent={FlexJustifyContent.SPACE_BETWEEN}
        alignItems={FlexAlignItems.CENTER}
      >
        <Flex>
          <SInfo>support@3aagency.com</SInfo>
        </Flex>
        <Flex>
          <SLink onClick={showModal}>Оставить заявку</SLink>
        </Flex>
      </Flex>
    </Container>
  </SHeader>
);

const SHeader = styled.div`
  width: 100%;
  background: #000;
  padding: 5px 0;
`;

const SInfo = styled.div`
  font-weight: 500;
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.5);
`;

const SLink = styled.div`
  font-size: 0.8em;
  color: #eee;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #aaa;
  }
`;
