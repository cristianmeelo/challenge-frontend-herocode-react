import styled from '@emotion/styled';

export const Container = styled.main<DynamicContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-left: ${(props) => (props.isSidebarOpen ? '18.75rem' : '2rem')};
  padding-top: 5.625rem;
  background-color: ${(props) => props.theme.colors.primary.purple_200};
  transition: padding-left 0.3s ease-in-out;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary.purple_600};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.neutral.gray_400};
  font-size: 1.2rem;
  max-width: 30rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeatureIcon = styled.div`
  width: 1rem; 
  height: 3rem; 
  margin-bottom: 1rem;
`;

export const FeatureText = styled.p`
  color: ${(props) => props.theme.colors.neutral.gray_400};
  font-size: 1rem;
  text-align: center;
`;
