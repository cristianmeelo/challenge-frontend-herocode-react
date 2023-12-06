import { useRecoilState } from 'recoil';
import modalState from '../../context/atoms/modalState';
import Button from '../Button/Button';
import * as S from './Header.styles';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState<boolean>(modalState);

  const toggleModalStatus= ()=> {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <S.Header>
      <Button variant={'contained'} shape={'square'} onClick={toggleModalStatus}>
        + Novo Card
      </Button>
    </S.Header>
  );
};
export default Header;
