import { useRecoilState } from 'recoil';
import selectedSidebarOptionState from '@/context/atoms/selectedSidebarOptionState';

const useControlSidebarMenu = (): ControlSidebarMenu => {
  const [selectedItem, setSelectedItem] = useRecoilState(selectedSidebarOptionState);

  const handleItemClicked = (item: string): void => {
    setSelectedItem(item);
  };

  return {
    selectedItem,
    handleItemClicked,
  };
};

export default useControlSidebarMenu;
