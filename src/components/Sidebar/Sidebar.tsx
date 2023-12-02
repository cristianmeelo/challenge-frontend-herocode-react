import Logo from '../Logo/Logo';
import SidebarItem from '../SidebarItem/SidebarItem';
import Dashboard from '../Icons/Dashboard/Dashboard';
import Timeline from '../Icons/Timeline/Timeline';
import Event from '../Icons/Event/Event';
import Calendar from '../Icons/Calendar/Calendar';
import Arrow from './Arrow/Arrow';
import * as S from './Sidebar.styles';

const Sidebar = ({ isSidebarOpen, toggleSidebar, selectedItem, handleItemClicked }: SidebarProps) => {
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

      <S.ArrowContainer isSidebarOpen={isSidebarOpen} onClick={toggleSidebar}>
        <Arrow isSidebarOpen={isSidebarOpen} />
      </S.ArrowContainer>
    </S.Sidebar>
  );
};

export default Sidebar;
