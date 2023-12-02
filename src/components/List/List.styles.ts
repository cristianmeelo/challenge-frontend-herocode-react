import styled from '@emotion/styled';

export const Container = styled.main<DynamicContentProps>`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-left: ${(props) => (props.isSidebarOpen ? '18.75rem' : '2rem')};
  padding-top: 5.625rem;
  background-color: ${(props) => props.theme.colors.primary.purple_200};
`;

