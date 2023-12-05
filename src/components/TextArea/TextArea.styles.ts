import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: relative;
  top: 6px;
  left: 10px;
  color: #495057;
  background-color: #fff;
  z-index: +999;
  pointer-events: none;
  font-size: 0.875rem;

  width: fit-content;
  font-weight: 400;
  font-size: 11px;
`;

export const TextArea = styled.textarea`
  height: 77px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #1976d2;
    box-shadow: 0 0 0 0.2rem rgba(25, 118, 210, 0.25);
  }
`;
