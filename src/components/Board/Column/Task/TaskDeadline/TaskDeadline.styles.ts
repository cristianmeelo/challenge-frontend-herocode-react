import styled from '@emotion/styled';

export const Deadline = styled.div<DeadlineProps>`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) =>
    props.isDoneColumn
      ? props.theme.colors.semantic.success.green_400
      : props.isOverdue
        ? props.theme.colors.semantic.error.red_200
        : props.theme.colors.neutral.gray_400};
`;
