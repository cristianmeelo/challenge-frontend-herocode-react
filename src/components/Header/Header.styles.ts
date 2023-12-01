import styled from '@emotion/styled'

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 5.625rem;
  padding: 0 5.625rem;
  background-color: ${(props) => props.theme.colors.primary.purple_600};
`
