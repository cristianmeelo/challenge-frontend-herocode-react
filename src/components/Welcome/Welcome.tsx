
import { features } from "../../constants/welcome-text";
import * as S from "./Welcome.styles";


const Welcome = ({ isSidebarOpen }: DynamicContentProps) => {
  return (
    <S.Container isSidebarOpen={isSidebarOpen}>
    <S.Title>Bem-vindo à Nossa Aplicação</S.Title>
    <S.Description>
      Explore os recursos e funcionalidades do nosso software. Veja como ele pode te ajudar:
    </S.Description>
    <S.FeaturesContainer>
      {features.map((feature: Feature, index:number) => (
        <S.Feature key={index}>
          <S.FeatureIcon>{feature.icon}</S.FeatureIcon>
          <S.FeatureText>{feature.text}</S.FeatureText>
        </S.Feature>
      ))}
    </S.FeaturesContainer>
  </S.Container>
  );
};

export default Welcome;
