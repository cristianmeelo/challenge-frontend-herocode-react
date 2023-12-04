import React from 'react';
import Button from '../Button/Button';
import * as S from './Modal.styles';

const Modal: React.FC = () => {
  return (
    <>
      <S.Overlay />
      <S.ModalContainer>
        <S.ModalTitle>novo card</S.ModalTitle>
        <S.ModalActions>
          <Button shape="rounded" variant="outlined" color="error">
            CANCELAR
          </Button>
          <Button shape="rounded" variant="outlined" color="secondary">
            CRIAR
          </Button>
        </S.ModalActions>
      </S.ModalContainer>
    </>
  );
};

export default Modal;
