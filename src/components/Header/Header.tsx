import useControlModalStatus from '@/hooks/useControlModalStatus/useControlModalStatus';
import Button from '@/components/Button/Button';
import * as S from './Header.styles';

const Header = () => {
  const { toggleModalStatus } = useControlModalStatus();

  return (
    <S.Header>
      <Button variant={'contained'} shape={'square'} onClick={toggleModalStatus}>
        + Novo Card
      </Button>
    </S.Header>
  );
};
export default Header;
