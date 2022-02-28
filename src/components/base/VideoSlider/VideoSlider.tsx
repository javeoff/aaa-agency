import { FC } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { Small } from '@components/ui/Small/Small';
import { Section } from '@components/grid/Section/Section';
import { Flex } from '@components/grid/Flex/Flex';
import { Button } from '@components/ui/Button/Button';
import { ScreenSize } from '@common/enums/ScreenSize';

interface IProps {
  videoUrl: string;
  title: string;
  text: string;
  iconSrc: string;
  showModal(): void;
}

export const VideoSlider: FC<IProps> = ({
  showModal,
  videoUrl,
  title,
  text,
  iconSrc,
}) => (
  <SVideoSlider>
    <SVideo
      muted={true}
      preload='auto'
      playsInline={true}
      autoPlay={true}
      loop={true}
      src={videoUrl}
    />
    <SDarkMask />
    <SContainer>
      <STitle>{title}</STitle>
      <Section top={30}>
        <SSmall>{text}</SSmall>
      </Section>
      <Section top={30}>
        <Flex margin={20} isWrap={true}>
          <Button onClick={showModal}>Оставить заявку</Button>
          <a href='#why'>
            <Button buttonType='outline'>Подробнее</Button>
          </a>
        </Flex>
      </Section>
      <SIcon height={250} src={iconSrc} />
    </SContainer>
  </SVideoSlider>
);

const SDarkMask = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const SIcon = styled.img`
  position: absolute;
  top: 280px;
  left: 0;
`;

const SSmall = styled(Small)`
  font-size: 1.1em;
  max-width: 470px;
  width: 100%;
`;

const STitle = styled.h1`
  font-size: 5em;
  font-weight: 700;
`;

const SVideo = styled.video`
  position: absolute;
  top: -60px;
  left: 0;
  width: 100%;
  z-index: 1;

  @media (max-width: ${ScreenSize.BIG_PHONE}px) {
    top: 250px;
    height: 100%;
    width: auto;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
`;

const SContainer = styled(Container)`
  position: relative;
`;

const SVideoSlider = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  padding: 50px 0;
  overflow: hidden;

  & > * {
    z-index: 2;
  }
`;
