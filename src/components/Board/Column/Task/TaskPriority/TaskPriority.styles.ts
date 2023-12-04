import styled from '@emotion/styled';

interface TaskPriorityProps {
  priority: 'Low' | 'Medium' | 'High';
}

export const Priority = styled.span<TaskPriorityProps>`
  border-radius: 1.25rem;
  padding: 0.25rem 0.875rem;
  text-transform: uppercase;
  font-weight: bold;
  ${({ priority, theme }) => {
    switch (priority) {
      case 'Low':
        return `
          color: ${theme.colors.semantic.success.green_400};
          border: 1px solid ${theme.colors.semantic.success.green_400};


        `;
      case 'Medium':
        return `
          border: 1px solid ${theme.colors.semantic.warning.yellow_200};
          color: ${theme.colors.semantic.warning.yellow_200};
        `;
      case 'High':
        return `
          background-color: ${theme.colors.semantic.error.red_200};
          color: ${theme.colors.neutral.white_000};
        `;
      default:
        return '';
    }
  }}
`;
