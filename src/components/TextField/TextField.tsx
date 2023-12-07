import * as S from './TextField.styles';

const TextField = ({ label, placeholder, icon, ...restProps }: TextFieldProps) => {
  const handleFocus = (event: { target: { type: string } }) => {
    if (placeholder === 'Selecione a data de entrega') event.target.type = 'date';
  };


  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.TextFieldContainer>
        <S.TextField placeholder={placeholder} onFocus={handleFocus} type="text" {...restProps} maxLength={255} />
        {icon && <S.IconContainer>{icon}</S.IconContainer>}
      </S.TextFieldContainer>
    </S.Container>
  );
};

export default TextField;
