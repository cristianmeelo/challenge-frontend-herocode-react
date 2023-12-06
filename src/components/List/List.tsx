import { useRecoilValue } from 'recoil';
import sidebarState from '../../context/atoms/sidebarState';
import * as S from './List.styles';

export const List = () => {
  const isSidebarOpen = useRecoilValue(sidebarState);

  return <S.Container isSidebarOpen={isSidebarOpen}>Lista</S.Container>;
};
export default List;
