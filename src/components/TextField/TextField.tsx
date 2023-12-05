import * as S from './TextField.styles';

const TextField = ({ label, placeholder, icon, ...restProps }: TextFieldProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.TextFieldContainer>
        <S.TextField placeholder={placeholder} {...restProps} maxLength={255} />
        {icon && <S.IconContainer>{icon}</S.IconContainer>}
      </S.TextFieldContainer>
    </S.Container>
  );
};

export default TextField;
