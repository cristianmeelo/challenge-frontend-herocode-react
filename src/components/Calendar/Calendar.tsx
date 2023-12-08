import useControlSidebarStatus from '@/hooks/useControlSidebarStatus/useControlSidebarStatus';
import * as S from './Calendar.styles';

export const Calendar = () => {
  const { isSidebarOpen } = useControlSidebarStatus();


  return <S.Container isSidebarOpen={isSidebarOpen}>Calendário</S.Container>;
};
export default Calendar;
