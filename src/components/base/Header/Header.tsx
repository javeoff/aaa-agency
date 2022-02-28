import { Collapse, Container } from 'react-bootstrap';
import Hamburger from 'hamburger-react';
import { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import { Flex } from '@components/grid/Flex/Flex';
import { FlexJustifyContent } from '@components/grid/Flex/enums/FlexJustifyContent';
import { FlexAlignItems } from '@components/grid/Flex/enums/FlexAlignItems';
import { Section } from '@components/grid/Section/Section';
import { MenuItem } from '@components/ui/MenuItem/MenuItem';
import { useOnTop } from '@common/hooks/useOnTop';
import { HeaderSub } from '@components/base/HeaderSub/HeaderSub';
import { ScreenSize } from '@common/enums/ScreenSize';
import { Div } from '@components/grid/Div/Div';

interface IProps {
  subItems?: Array<{
    title: string;
    link: string;
  }>;
  hideBurger?: boolean;
}

export const Header: FC<IProps> = ({ subItems, hideBurger }) => {
  const [isOpen, setOpen] = useState(false);
  const onTop = useOnTop();

  return (
    <>
      <SHeader onTop={onTop}>
        <Div padding={[10, 20]}>
          <Container>
            <Section>
              <Flex
                justifyContent={FlexJustifyContent.SPACE_BETWEEN}
                alignItems={FlexAlignItems.CENTER}
              >
                <Flex>
                  <SSection>
                    <STitle>3A Agency</STitle>
                    {/* <img src='/icon.png' height={45} alt='1' /> */}
                  </SSection>
                </Flex>
                <SMenuSection>
                  <SMenu>
                    <Flex>
                      <SMenuItem href='/'>Главная</SMenuItem>
                      <SMenuItem href='/tiktok'>TikTok</SMenuItem>
                      <SMenuItem href='/youtube'>YouTube</SMenuItem>
                      <SMenuItem href='/telegram'>Telegram</SMenuItem>
                      <SMenuItem href='/contacts'>Контакты</SMenuItem>
                    </Flex>
                  </SMenu>
                </SMenuSection>
                <SDiv hideBurger={hideBurger}>
                  <Hamburger toggled={isOpen} toggle={setOpen} />
                </SDiv>
              </Flex>
            </Section>
          </Container>
        </Div>
        <Collapse in={isOpen}>
          <HeaderSub items={subItems} />
        </Collapse>
      </SHeader>
    </>
  );
};

const SDiv = styled(Div)<{ hideBurger?: boolean }>`
  ${({ hideBurger }) =>
    hideBurger === true &&
    css`
      cursor: default;
      opacity: 0;
    `}
`;

const SSection = styled.div`
  min-width: 126px;
`;

const STitle = styled.span`
  font-weight: 600;
  font-size: 1.5em;
  background: linear-gradient(90deg, #7928ca, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SMenu = styled(Section)`
  width: inherit;
  position: relative;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SMenuSection = styled(Section)`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${ScreenSize.TABLET}px) {
    margin-left: 10px;

    &:before {
      content: '';
      position: absolute;
      right: 0;
      height: 100%;
      width: 40px;
      background: linear-gradient(
        270deg,
        rgb(21, 21, 21) 0%,
        rgba(21, 21, 21, 0) 100%
      );
      z-index: 8;
    }
  }
`;

const SMenuItem = styled(MenuItem)``;

const SHeader = styled.div<{
  onTop: boolean;
}>`
  color: #eee;
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 100%;
  backdrop-filter: saturate(180%) blur(5px);
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  z-index: 7;

  ${(p) =>
    !p.onTop &&
    css`
      box-shadow: inset 0 -1px 0 0 rgba(255, 255, 255, 0.1);
      background: rgba(21, 21, 21, 0.8);
    `}
`;
