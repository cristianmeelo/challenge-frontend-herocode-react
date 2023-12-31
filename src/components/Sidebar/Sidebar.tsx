import useControlSidebarStatus from '@/hooks/useControlSidebarStatus/useControlSidebarStatus';
import useControlSidebarMenu from '@/hooks/useControlSidebarMenu/useControlSidebarMenu';
import Logo from '@/components/Logo/Logo';
import SidebarItem from '@/components/SidebarItem/SidebarItem';
import Dashboard from '@/components/Icons/Dashboard/Dashboard';
import Timeline from '@/components/Icons/Timeline/Timeline';
import Event from '@/components/Icons/Event/Event';
import Calendar from '@/components/Icons/Calendar/Calendar';
import Arrow from '@/components/Icons/Arrow/Arrow';
import * as S from './Sidebar.styles';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebarStatus } = useControlSidebarStatus();
  const { selectedItem, handleItemClicked } = useControlSidebarMenu();

  return (
    <S.Sidebar isSidebarOpen={isSidebarOpen}>
      <S.Logo isSidebarOpen={isSidebarOpen}>
        <Logo />
      </S.Logo>

      <S.Items isSidebarOpen={isSidebarOpen}>
        <SidebarItem icon={<Dashboard />} label="quadro" isSelected={selectedItem === 'quadro'} onItemClicked={handleItemClicked} />
        <SidebarItem icon={<Event />} label="lista" isSelected={selectedItem === 'lista'} onItemClicked={handleItemClicked} />
        <SidebarItem icon={<Timeline />} label="timeline" isSelected={selectedItem === 'timeline'} onItemClicked={handleItemClicked} />
        <SidebarItem icon={<Calendar />} label="calendário" isSelected={selectedItem === 'calendário'} onItemClicked={handleItemClicked} />
      </S.Items>

      <S.ArrowContainer isSidebarOpen={isSidebarOpen} onClick={toggleSidebarStatus}>
        <Arrow isSidebarOpen={isSidebarOpen} />
      </S.ArrowContainer>
    </S.Sidebar>
  );
};

export default Sidebar;
