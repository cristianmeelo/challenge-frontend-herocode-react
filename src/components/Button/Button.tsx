import * as S from './Button.styles'

const Button = ({ children, variant = 'contained', shape = 'square' }: ButtonProps) => {
  return (
    <S.Button variant={variant} shape={shape}>
      {children}
    </S.Button>
  )
}

export default Button
