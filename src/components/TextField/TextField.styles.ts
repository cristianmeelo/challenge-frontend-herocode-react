import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  position: relative;
  font-size: 0.875rem;
  color: #495057;
  background-color: #fff;
  z-index: +999;
  pointer-events: none;
  width: fit-content;
  top: 6px;
  left: 10px;
  font-weight: 400;
  font-size: 11px;
`;

export const TextFieldContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const TextField = styled.input`
  border-radius: 4px;
  border: 1px solid #ced4da;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #1976d2;
    box-shadow: 0 0 0 0.2rem rgba(25, 118, 210, 0.25);
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
