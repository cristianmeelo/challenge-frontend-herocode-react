import styled from '@emotion/styled';

export const Button = styled.button<ButtonProps>`
  padding: 18px 22px;
  font-size: 18px;

  ${({ shape }) => shape === 'rounded' && `border-radius: 20px; min-width: 180px;`}
  ${({ shape }) => shape === 'square' && `border-radius: 0.625rem; width: 200px;`}
  
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  border-style: none;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px 10px;
    font-size: 16px;
    ${({ shape }) => shape === 'rounded' && `border-radius: 20px; min-width: 100%;`}
  }

  ${({ variant, theme, color }) =>
    variant === 'contained'
      ? `
      background-color: ${theme.colors.primary.purple_400};
      color: ${theme.colors.neutral.white_000};

      &:hover {
        background-color: ${theme.colors.primary.purple_200};
        color: ${theme.colors.primary.purple_600};
      }
    `
      : `
      padding: 0.625rem 4.25rem;
      background-color: transparent;
      border: 1px solid ${
        color === 'error'
          ? theme.colors.semantic.error.red_200
          : color === 'success'
            ? theme.colors.semantic.success.green_400
            : theme.colors.primary.purple_600
      } ;
      color: ${
        color === 'error' ? theme.colors.semantic.error.red_200 : color === 'success' ? theme.colors.semantic.success.green_400 : theme.colors.neutral.white_000
      } ;
      background-color: ${color === 'error' ? 'transparent' : color === 'success' ? 'transparent' : theme.colors.primary.purple_600} ;
      
      &:hover {
        background-color: ${theme.colors.primary.purple_400};
        color: ${theme.colors.primary.purple_600};
      }
    `}
`;
