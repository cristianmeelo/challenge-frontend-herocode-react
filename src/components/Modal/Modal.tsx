import Button from '../Button/Button';
import * as S from './Modal.styles';

const Modal = ({ isOpen, toggleModalStatus }: { isOpen: boolean; toggleModalStatus: () => void }) => {
  return (
    <div>
      {isOpen && (
        <>
          <S.Overlay />
          <S.ModalContainer>
            <S.ModalTitle>novo card</S.ModalTitle>
            <S.ModalActions>
              <Button shape="rounded" variant="outlined" color="error" onClick={toggleModalStatus}>
                CANCELAR
              </Button>
              <Button shape="rounded" variant="outlined" color="secondary">
                CRIAR
              </Button>
            </S.ModalActions>
          </S.ModalContainer>
        </>
      )}
    </div>
  );
};

export default Modal;
