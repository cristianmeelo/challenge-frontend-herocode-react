import useControlSidebarMenu from '@/hooks/useControlSidebarMenu/useControlSidebarMenu';
import Board from '@/components/Board/Board';
import Calendar from '@/components/Calendar/Calendar';
import List from '@/components/List/List';
import Timeline from '@/components/Timeline/Timeline';
import Welcome from '@/components/Welcome/Welcome';

const DynamicContent = () => {
const { selectedItem } = useControlSidebarMenu();


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
