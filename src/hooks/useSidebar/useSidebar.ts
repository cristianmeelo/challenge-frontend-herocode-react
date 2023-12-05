import { useState } from 'react';

const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar: VoidFunction = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return { isSidebarOpen, toggleSidebar };
};

export default useSidebar;
