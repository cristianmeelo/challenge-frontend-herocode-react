import { useRecoilState } from 'recoil';
import sidebarState from '@/context/atoms/sidebarState';

const useControlSidebarStatus = (): SidebarStatus => {
  const [isSidebarOpen, setSidebarOpen] = useRecoilState<boolean>(sidebarState);

  const toggleSidebarStatus = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return {
    isSidebarOpen,
    toggleSidebarStatus,
  };
};

export default useControlSidebarStatus;
