import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: +9999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.0625rem 2.6875rem 2.625rem 2.4375rem;
  background-color: ${(props) => props.theme.colors.neutral.white_000};
  border-radius: 0.625rem;
  z-index: +9999;

  @media (min-width: 768px) {
    width: 682px;
  }
`;

export const ModalTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary.purple_600};
  font-size: 1.625rem;
  font-weight: 600;
  text-transform: capitalize;
`;

export const ModalInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.125rem 0rem 3.5rem 0rem;
  gap: 1.375rem;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.875rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.375rem;
  }
`;

export const ColCompletionDate = styled.div`
  display: flex;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ColPriority = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Label = styled.span`
  margin-left: 1.625rem;
  position: relative;
  width: fit-content;
  color: ${(props) => props.theme.colors.neutral.gray_400};
  background-color: ${(props) => props.theme.colors.neutral.white_000};
  font-size: 0.6875rem;
  font-weight: 400;
  z-index: +999;
  text-transform: capitalize;
  pointer-events: none;
`;
