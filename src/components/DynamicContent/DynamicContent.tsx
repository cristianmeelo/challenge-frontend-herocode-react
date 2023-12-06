import { useRecoilValue } from 'recoil';
import selectedSidebarOptionState from '../../context/atoms/selectedSidebarOptionState';

import Board from '../Board/Board';
import Calendar from '../Calendar/Calendar';
import List from '../List/List';
import Timeline from '../Timeline/Timeline';
import Welcome from '../Welcome/Welcome';

const DynamicContent = () => {
  const selectedItem = useRecoilValue(selectedSidebarOptionState);

  switch (selectedItem) {
    case 'quadro':
      return <Board />;
    case 'lista':
      return <List />;
    case 'timeline':
      return <Timeline />;
    case 'calendário':
      return <Calendar />;
    default:
      return <Welcome />;
  }
};

export default DynamicContent;
