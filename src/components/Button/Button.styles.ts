import styled from '@emotion/styled';

export const Button = styled.button<ButtonProps>`
  padding: 1.125rem 1.375rem;
  font-size: 1.125rem;
  cursor: pointer;
  border-style: none;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s;

  ${({ shape }) => shape === 'rounded' && `border-radius: 20px;`}
  ${({ shape }) => shape === 'square' && `border-radius: 0.625rem;`}

  ${({ variant, theme }) =>
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
      color: #3498db;
      &:hover {
        background-color: #3498db;
        color: #fff;
      }
    `}
`;
