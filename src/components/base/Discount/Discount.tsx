import { FC } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import { Center } from '@components/grid/Center/Center';
import { Small } from '@components/ui/Small/Small';
import { Button } from '@components/ui/Button/Button';
import { Section } from '@components/grid/Section/Section';

interface IProps {
  showModalHandler(): void;
}

export const Discount: FC<IProps> = ({ showModalHandler }) => (
  <SDiscount>
    <Container>
      <SDarkMask />
      <SCenter>
        <SH2>Успей получить скидку в 10%</SH2>
        <Small>
          Закажи услугу прямо сейчас и получи скидку в 10% на первый заказ
        </Small>
        <Section top={20}>
          <Button onClick={showModalHandler}>Заказать</Button>
        </Section>
      </SCenter>
    </Container>
  </SDiscount>
);

const SDarkMask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const SCenter = styled(Center)`
  position: relative;
  z-index: 1;
`;

const SH2 = styled.h2`
  font-size: 2.3em;
  font-weight: 700;
`;

const SDiscount = styled.div`
  background: url('image2.png');
  position: relative;
  background-position-y: 20%;
  background-size: cover;
  padding: 50px 30px;
  overflow: hidden;
`;
