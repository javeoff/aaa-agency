import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { Section } from '@components/grid/Section/Section';
import { ScreenSize } from '@common/enums/ScreenSize';
import { Flex } from '@components/grid/Flex/Flex';
import { Center } from '@components/grid/Center/Center';
import { Button } from '@components/ui/Button/Button';

interface IProps {
  showModalHandler(): void;
}

export const Slider: FC<IProps> = ({ showModalHandler }) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter((prev) => (prev < 3 ? prev + 1 : 0));
    }, 3_000);
  }, [counter]);

  return (
    <SSlider>
      <Section>
        <S1H1 isActive={counter === 0}>Продвижение</S1H1>
      </Section>
      <Section>
        <S2H1 isActive={counter === 1}>Раскрутка</S2H1>
      </Section>
      <Section>
        <S3H1 isActive={counter === 2}>Реклама</S3H1>
      </Section>
      <Section top={70}>
        <Center>
          <Flex margin={20}>
            <Button onClick={showModalHandler}>Оставить заявку</Button>
            <a href='#advantages'>
              <Button buttonType='outline'>Подробнее</Button>
            </a>
          </Flex>
        </Center>
      </Section>
    </SSlider>
  );
};

const SSlider = styled(Container)`
  text-align: center;
`;

const SH1 = styled.h1`
  color: #fff;
  font-size: 6rem;
  font-weight: 800;
  line-height: 1.1em;
  background: #fff;
  animation: 8s infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${ScreenSize.TABLET}px) {
    font-size: 4.3em;
  }
`;

const S1H1 = styled(SH1)<{ isActive: boolean }>`
  animation: animated-gradient-text_first 8s infinite;
`;

const S2H1 = styled(SH1)<{ isActive: boolean }>`
  animation: animated-gradient-text_second 8s infinite;
`;

const S3H1 = styled(SH1)<{ isActive: boolean }>`
  animation: animated-gradient-text_third 8s infinite;
`;
