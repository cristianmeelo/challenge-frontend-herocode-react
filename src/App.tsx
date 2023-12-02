import { useState } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Board from './components/Board/Board';
import Timeline from './components/Timeline/Timeline';
import Calendar from './components/Calendar/Calendar';
import List from './components/List/List';
import Welcome from './components/Welcome/Welcome';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleSidebar: VoidFunction = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClicked = (label: string): void => {
    setSelectedItem(label);
  };

  const DynamicContent: React.FC<{ selectedLabel: string | null }> = ({ selectedLabel }) => {
    switch (selectedLabel) {
      case 'quadro':
        return <Board isSidebarOpen={isSidebarOpen} />;
      case 'lista':
        return <List isSidebarOpen={isSidebarOpen} />;
      case 'timeline':
        return <Timeline isSidebarOpen={isSidebarOpen} />;
      case 'calendário':
        return <Calendar isSidebarOpen={isSidebarOpen} />;
      default:
        return <Welcome isSidebarOpen={isSidebarOpen} />;
    }
  };

  return (
    <>
      <Header />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} selectedItem={selectedItem} handleItemClicked={handleItemClicked} />
      <DynamicContent selectedLabel={selectedItem} />
    </>
  );
}
