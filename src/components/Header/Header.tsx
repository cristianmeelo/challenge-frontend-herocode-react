import Button from '../Button/Button';
import * as S from './Header.styles';

const Header = ({ toggleModalStatus }: { toggleModalStatus: () => void }) => {
  return (
    <S.Header>
      <Button variant={'contained'} shape={'square'} onClick={toggleModalStatus}>
        + Novo Card
      </Button>
    </S.Header>
  );
};
export default Header;
