import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: relative;
  width: fit-content;
  top: 6px;
  left: 10px;
  color: ${(props) => props.theme.colors.neutral.gray_400};
  background-color: ${(props) => props.theme.colors.neutral.white_000};
  font-size: 0.875rem;
  font-size: 11px;
  font-weight: 400;
  z-index: +999;
  pointer-events: none;
`;

export const TextArea = styled.textarea`
  height: 77px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.neutral.gray_300};
`;
