import { FC, useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {
  faChartLine,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Header } from '@components/base/Header/Header';
import { Slider } from '@components/base/Slider/Slider';
import { Section } from '@components/grid/Section/Section';
import { HeaderTop } from '@components/base/HeaderTop/HeaderTop';
import { AdvantageSection } from '@components/base/AdvantageSection/AdvantageSection';
import { VideoCard } from '@components/base/VideoCard/VideoCard';
import { Center } from '@components/grid/Center/Center';
import { Small } from '@components/ui/Small/Small';
import { Flex } from '@components/grid/Flex/Flex';
import { FlexAlignItems } from '@components/grid/Flex/enums/FlexAlignItems';
import { FlexJustifyContent } from '@components/grid/Flex/enums/FlexJustifyContent';
import { Statistics } from '@components/base/Statistics/Statistics';
import { Button } from '@components/ui/Button/Button';
import { Realised } from '@components/base/Realised/Realised';
import { RealisedMore } from '@components/base/RealisedMore/RealisedMore';
import { Discount } from '@components/base/Discount/Discount';
import { Footer } from '@components/base/Footer/Footer';
import { FeedbackModal } from '@components/base/FeedbackModal/FeedbackModal';
import { Div } from '@components/grid/Div/Div';

const navigation: Array<{
  title: string;
  link: string;
}> = [
  {
    link: '#types',
    title: 'Виды продвижений',
  },
  {
    link: '#advantages',
    title: 'Преимущества',
  },
  {
    link: '#statistics',
    title: 'Статистика',
  },
  {
    link: '#additionals',
    title: 'Дополнительные услуги',
  },
  {
    link: '#services',
    title: 'Услуги оформления',
  },
];

const Index: FC = () => {
  const [modalFlag, setModalFlag] = useState<boolean>(false);

  const showModalHandler = () => {
    setModalFlag(!modalFlag);
  };

  return (
    <>
      <FeedbackModal onOpen={modalFlag} onClose={() => setModalFlag(false)} />

      <HeaderTop showModal={showModalHandler} />
      <Header subItems={navigation} />
      <Section top={100}>
        <Slider showModalHandler={showModalHandler} />
      </Section>
      <Section top={90}>
        <Center>
          <img src='/mouse.png' height={50} alt='check' />
        </Center>
      </Section>
      <Section top={80}>
        <Container>
          <Center>
            <Div width={630}>
              <Small>
                Мы предоставляем бизнесу возможность эффективно войти в
                современное медийное пространство используя ряд уникальных
                решений для наиболее актуальных социальных сетей.
              </Small>
            </Div>
          </Center>
        </Container>
      </Section>
      <Section id='advantages' top={120}>
        <AdvantageSection showModalHandler={showModalHandler} />
      </Section>
      <Section top={120}>
        <Container>
          <VideoCard />
        </Container>
      </Section>
      <Section top={80}>
        <Container>
          <Center>
            <SH1>Проснись знаменитым сегодня</SH1>
          </Center>

          <Section top={50}>
            <Flex
              isWrap={true}
              justifyContent={FlexJustifyContent.CENTER}
              alignItems={FlexAlignItems.STRETCH}
            >
              <SContent>
                <SIcon icon={faChartLine} />
                <Small>
                  Успех в которых обуславливается не количеством потраченных
                  средств на рекламу, а грамотным взаимодействием с алгоритмами
                  площадки и четким пониманием того, что сейчас находится на
                  пике актуальности.
                </Small>
              </SContent>
              <SContent>
                <SIcon icon={faTachometerAlt} />
                <Small>
                  Об экспертности с нашей стороны, хорошо говорят результаты,
                  которых мы достигли при ведении личного блога на YouTube.
                </Small>
              </SContent>
              <Section fluid={true}>
                <Center>
                  <Button onClick={showModalHandler}>Оставить заявку</Button>
                </Center>
              </Section>
            </Flex>
          </Section>
        </Container>
      </Section>
      <Section top={50}>
        <Statistics />
      </Section>
      <Section top={50}>
        <Realised showModalHandler={showModalHandler} />
      </Section>
      <Section top={50}>
        <Discount showModalHandler={showModalHandler} />
      </Section>
      <Section top={50}>
        <RealisedMore showModalHandler={showModalHandler} />
      </Section>
      <Section top={50}>
        <Footer navigation={navigation} />
      </Section>
    </>
  );
};

const SIcon = styled(FontAwesomeIcon)`
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 80px;
  margin-bottom: 20px;
`;

const SContent = styled.div`
  max-width: 525px;
  margin: 0 10px 50px 10px;
`;

const SH1 = styled.h1`
  font-weight: 700;
`;

export { Index as default };
