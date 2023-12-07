import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  position: relative;
  width: fit-content;
  top: 6px;
  left: 10px;
  color: ${(props) => props.theme.colors.neutral.gray_400};
  background-color: ${(props) => props.theme.colors.neutral.white_000};
  font-size: 0.6875rem;
  font-weight: 400;
  z-index: +999;
  text-transform: capitalize;
  pointer-events: none;
`;

export const TextFieldContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const TextField = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.neutral.gray_300};

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.neutral.gray_300};
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
