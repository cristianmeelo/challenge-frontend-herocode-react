import { useState } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Board from './components/Board/Board';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar: VoidFunction = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Board isSidebarOpen={isSidebarOpen} />
    </>
  );
}
