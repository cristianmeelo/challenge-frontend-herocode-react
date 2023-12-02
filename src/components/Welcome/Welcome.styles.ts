import styled from '@emotion/styled';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  width: 100vw;
  height: 100vh;
  overflow-y: visible;
  background-color: ${(props) => props.theme.colors.primary.purple_200};
  transition: padding-left 0.3s ease-in-out;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.primary.purple_600};
  font-size: 2rem;
`;
