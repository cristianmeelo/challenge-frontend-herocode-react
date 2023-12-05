import * as S from './Button.styles';

const Button = ({ children, variant = 'contained', shape = 'square', onClick, color }: ButtonProps) => {
  return (
    <S.Button variant={variant} shape={shape} color={color} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
