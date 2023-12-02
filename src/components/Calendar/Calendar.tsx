import * as S from './Calendar.styles';

export const Calendar = ({ isSidebarOpen }: DynamicContentProps) => {
  return <S.Container isSidebarOpen={isSidebarOpen}>Calendário</S.Container>;
};
export default Calendar;
