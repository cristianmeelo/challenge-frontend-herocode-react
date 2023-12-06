import { useRecoilValue } from 'recoil';

import sidebarState from '@/context/atoms/sidebarState';
import * as S from './Timeline.styles';

export const Timeline = () => {
  const isSidebarOpen = useRecoilValue(sidebarState);

  return <S.Container isSidebarOpen={isSidebarOpen}>Timeline</S.Container>;
};
export default Timeline;
