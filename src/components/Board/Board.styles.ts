import styled from '@emotion/styled';

export const Container = styled.main<DynamicContentProps>`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  padding-left: ${(props) => (props.isSidebarOpen ? '18.75rem' : '2rem')};
  padding-top: 5.625rem;
  background-color: ${(props) => props.theme.colors.primary.purple_200};
`;

export const Board = styled.div`
  display: flex;
  overflow-y: scroll;
  width: 100%;
  padding-left: 4rem;
  padding-right: 6.25rem;
  padding-top: 4rem;
`;
