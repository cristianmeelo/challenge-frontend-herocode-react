import styled from '@emotion/styled';

export const Button = styled.button<ButtonProps>`
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s;
  border-style: none;
  cursor: pointer;

  ${({ shape }) =>
    shape === 'rounded' && `border-radius: 1.25rem; height:'2.3125rem'; min-width: 11.25rem;font-size: 0.875rem;font-weight: 600; padding: 0.625rem 3.1875rem;`}
  ${({ shape }) =>
    shape === 'square' &&
    `border-radius: 0.625rem; height:'3.625rem'; min-width: 9.1875rem; font-size: 1.125rem; font-weight: 500; padding: 1.125rem 1.375rem;`}
  

 

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
      
      background-color: transparent;
      border: 2px solid ${
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
        background-color: ${
          color === 'error'
            ? theme.colors.semantic.error.red_200
            : color === 'success'
              ? theme.colors.semantic.success.green_400
              : theme.colors.primary.purple_400
        } ;
        color: ${theme.colors.primary.purple_600};
      }
    `}

@media (max-width: 768px) {
    /* padding: 10px 10px;
    font-size: 16px; */
    ${({ shape }) =>
      shape === 'rounded' && `border-radius: 1.25rem; height:'37px'; min-width: 100%; font-size: 0.75rem;font-weight: 600; padding: 0.625rem 3.1875rem;`}
    ${({ shape }) =>
      shape === 'square' && `border-radius: 0.625rem; height:'58px'; min-width: 9.1875rem; font-size: 1rem; font-weight: 500; padding: 0.9375rem 0.625rem;`}
  }
`;
