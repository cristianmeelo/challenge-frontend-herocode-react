import { useState } from 'react';
import { initialTaskData } from './constants/initial-task-data';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Board from './components/Board/Board';
import Timeline from './components/Timeline/Timeline';
import Calendar from './components/Calendar/Calendar';
import List from './components/List/List';
import Welcome from './components/Welcome/Welcome';
import Modal from './components/Modal/Modal';
import useModal from './hooks/useModal/useModal';
import useSidebar from './hooks/useSidebar/useSidebar';

export default function App() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [columns, setColumns] = useState<Column[]>(initialTaskData);
  const { isOpen, toggleModalStatus } = useModal();
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const handleItemClicked = (label: string): void => {
    setSelectedItem(label);
  };

  const DynamicContent = ({ selectedLabel }: { selectedLabel: string | null }) => {
    switch (selectedLabel) {
      case 'quadro':
        return <Board isSidebarOpen={isSidebarOpen} columns={columns} setColumns={setColumns} />;
      case 'lista':
        return <List isSidebarOpen={isSidebarOpen} />;
      case 'timeline':
        return <Timeline isSidebarOpen={isSidebarOpen} />;
      case 'calendário':
        return <Calendar isSidebarOpen={isSidebarOpen} />;
      default:
        return <Welcome />;
    }
  };

  return (
    <>
      <Header toggleModalStatus={toggleModalStatus} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} selectedItem={selectedItem} handleItemClicked={handleItemClicked} />
      <DynamicContent selectedLabel={selectedItem} />
      <Modal isOpen={isOpen} toggleModalStatus={toggleModalStatus} columns={columns} setColumns={setColumns} />
    </>
  );
}
