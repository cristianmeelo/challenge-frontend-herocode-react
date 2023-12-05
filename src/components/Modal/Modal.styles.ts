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
  width: 47.43vw;
  height: 28.9375rem;
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
`;

export const ModalInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.125rem 0rem 3.5rem 0rem;
  gap: 22px;
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
`;

export const ColCompletionDate = styled.div`
  display: flex;
  width: 50%;
`;
export const ColPriority = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Label = styled.span`
  margin-left: 26px;
  position: relative;
  font-size: 0.875rem;
  color: #495057;
  background-color: #fff;
  z-index: +999;
  pointer-events: none;
  width: fit-content;

  font-weight: 400;
  font-size: 11px;
`;

export const RowPriority = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 16px;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;
