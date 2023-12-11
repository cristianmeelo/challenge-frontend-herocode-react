import useControlSidebarStatus from '@/hooks/useControlSidebarStatus/useControlSidebarStatus';
import * as S from './Timeline.styles';

export const Timeline = () => {
  const { isSidebarOpen } = useControlSidebarStatus();

  return <S.Container isSidebarOpen={isSidebarOpen}>Timeline</S.Container>;
};
export default Timeline;
