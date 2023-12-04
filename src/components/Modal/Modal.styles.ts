import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 683px;
  height: 463px;
  padding: 2rem 2.625rem 2.625rem 2.625rem;
  background-color: ${(props) => props.theme.colors.neutral.white_000};
  border-radius: 0.625rem;
  z-index: 1000;
`;

export const ModalTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary.purple_600};
  font-size: 1.625rem;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 2.125rem;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.875rem;
  background-color: pink;
`;
