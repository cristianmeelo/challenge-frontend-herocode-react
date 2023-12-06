import styled from '@emotion/styled';

export const Item = styled.li<StyledItem>`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.25rem;
  line-height: 1.515rem;
  font-weight: ${(props) => (props.isSelected ? 600 : 400)};
  color: ${(props) => (props.isSelected ? props.theme.colors.primary.purple_600 : props.theme.colors.neutral.gray_400)};
`;

export const Label = styled.span<StyledItem>`
  text-transform: capitalize;
  color: ${(props) => (props.isSelected ? props.theme.colors.primary.purple_600 : props.theme.colors.neutral.gray_400)};
`;
