import { FC } from 'react';
import styled from 'styled-components';

import { ScreenSize } from '@common/enums/ScreenSize';

export const VideoCard: FC = () => (
  <SVideoCard>
    <SVideo
      muted={true}
      preload='auto'
      playsInline={true}
      autoPlay={true}
      loop={true}
      src='/video1.mp4'
    />
    <STitle>3A</STitle>
  </SVideoCard>
);

const STitle = styled.div`
  position: absolute;
  z-index: 2;
  font-weight: 800;
  font-size: 25em;
  background: linear-gradient(90deg, #7928ca, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  top: 200px;
`;

const SVideo = styled.video`
  width: 150%;
  top: -300px;
  left: -50px;
  position: absolute;
  z-index: 1;

  @media (max-width: ${ScreenSize.TABLET}px) {
    top: -100px;
  }
`;

const SVideoCard = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 50px;
  margin: 0 auto;
  background: #151515;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.52);
  border-radius: 15px;
  overflow: hidden;
  height: 300px;
`;
