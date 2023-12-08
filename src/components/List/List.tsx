import useControlSidebarStatus from '@/hooks/useControlSidebarStatus/useControlSidebarStatus';
import * as S from './List.styles';

export const List = () => {
  const { isSidebarOpen } = useControlSidebarStatus();


  return <S.Container isSidebarOpen={isSidebarOpen}>Lista</S.Container>;
};
export default List;
