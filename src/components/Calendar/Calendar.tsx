import { useRecoilValue } from 'recoil';
import sidebarState from '@/context/atoms/sidebarState';
import * as S from './Calendar.styles';

export const Calendar = () => {
  const isSidebarOpen = useRecoilValue(sidebarState);

  return <S.Container isSidebarOpen={isSidebarOpen}>Calendário</S.Container>;
};
export default Calendar;
