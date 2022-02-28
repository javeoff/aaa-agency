import { FC, useRef } from 'react';
import styled from 'styled-components';
import { useClickAway } from 'react-use';
import { CSSTransition } from 'react-transition-group';

interface IProps {
  onClose(): void;
  onOpen: boolean;
}

export const FeedbackModal: FC<IProps> = ({ onClose, onOpen }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickAway(modalRef, () => {
    onClose();
  });

  return (
    <>
      <CSSTransition
        unmountOnExit={true}
        in={onOpen}
        timeout={300}
        classNames='my-node'
      >
        <SDarkMask />
      </CSSTransition>
      <CSSTransition
        unmountOnExit={true}
        in={onOpen}
        timeout={300}
        classNames='my-node'
      >
        <SModalBox ref={modalRef}>
          <div>123</div>
        </SModalBox>
      </CSSTransition>
    </>
  );
};

const SModalBox = styled.div`
  position: fixed;
  padding: 44px 40px;
  right: 0;
  max-width: 680px;
  width: 100%;
  background: #fff;

  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  top: 50%;
  height: 600px;
  overflow: scroll;
  z-index: 9;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SDarkMask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 8;
  cursor: pointer;
`;
