import Button from '../Button/Button'
import * as S from './Header.styles'

const Header = () => {
  return (
    <S.Header>
      <Button variant={'contained'} shape={'square'}>
        + Novo Card
      </Button>
    </S.Header>
  )
}
export default Header
