import styled from '@emotion/styled';

export const Priority = styled.span<TaskPriorityProps>`
  display: ${(props) => (props.isDoneColumn ? 'none' : 'flex')};
  align-items: center;
  position: relative;
  width: min-content;
  height: min-content;
  border-radius: 1.25rem;
  padding: 0.3125rem 0.9375rem;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;

  &::before {
    content: '${(props) => (props.isSelected ? '🎯' : '')}';
    display: ${(props) => (props.isSelected ? 'inline-block' : 'none')};
    position: absolute;
    top: -5px;
    left: 0;
  }

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
