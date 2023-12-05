import * as S from './TextArea.styles';

const TextArea = ({ label, placeholder, ...restProps }: TextAreaProps) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.TextArea placeholder={placeholder} {...restProps} maxLength={255} />
    </S.Container>
  );
};

export default TextArea;
