import * as S from './Button.styles';

const Button = ({ children, variant = 'contained', shape = 'square', color }: ButtonProps) => {
  return (
    <S.Button variant={variant} shape={shape} color={color}>
      {children}
    </S.Button>
  );
};

export default Button;
