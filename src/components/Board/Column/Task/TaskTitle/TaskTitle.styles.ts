import styled from '@emotion/styled';

export const TaskTitle = styled.h1<StyledTask>`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => (props.isDoneColumn ? props.theme.colors.neutral.gray_400 : props.theme.colors.neutral.gray_400)};
  opacity: ${(props) => (props.isDoneColumn ? 0.6 : 1)};
`;
