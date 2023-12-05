import { useState } from 'react';

const useModal = (): ModalState => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModalStatus = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return { isOpen, toggleModalStatus };
};

export default useModal;
