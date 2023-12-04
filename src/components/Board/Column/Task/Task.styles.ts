import styled from '@emotion/styled';

export const Task = styled.div`
  padding: 16px 20px 20px 20px;
  margin: 8px 16px 8px 16px;
  background-color: ${(props) => props.theme.colors.neutral.white_000};
  border-radius: 0.625rem;
  box-shadow: 0 0.625rem 0.625rem -0.625rem rgba(0, 0, 0, 0.05);
  user-select: none;
  cursor: pointer;
`;

export const TaskTitle = styled.h1<StyledTask>`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => (props.isDoneColumn ? props.theme.colors.neutral.gray_400 : props.theme.colors.neutral.gray_400)};
  opacity: ${(props) => (props.isDoneColumn ? 0.6 : 1)};
`;

export const TaskContent = styled.p`
  padding: 0.9375rem 0 1.3125rem 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  color: ${(props) => props.theme.colors.neutral.gray_400};
`;

export const TaskActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Deadline = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  font-size: 0.875rem;
  font-size: 600;
  color: ${(props) => props.theme.colors.neutral.gray_400};
`;

export const Priority = styled.span`
  border-radius: 8px;
  background-color: red;
  border: 1px solid blue;
  text-transform: uppercase;
`;
