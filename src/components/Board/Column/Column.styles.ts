import styled from '@emotion/styled';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 20.625rem;
  padding-bottom: 0.5rem;
  margin: 0rem 1.1875rem;
  margin-bottom: 10.5rem;
  background: ${(props) => props.theme.colors.neutral.gray_100};
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ColumnTitle = styled.h3`
  margin: 0.875rem 0rem 1.75rem 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutral.gray_400};
`;

export const ColumnCountTasks = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.neutral.gray_400};
`;
