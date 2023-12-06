import { useRecoilState } from 'recoil';
import modalState from '@/context/atoms/modalState';

const useControlModalStatus = (): ModalStatus => {
  const [isModalOpen, setModalOpen] = useRecoilState<boolean>(modalState);

  const toggleModalStatus = () => {
    setModalOpen(!isModalOpen);
  };

  return {
    isModalOpen,
    toggleModalStatus,
  };
};

export default useControlModalStatus;
