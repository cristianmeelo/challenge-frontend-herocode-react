import styled from '@emotion/styled';
import { Label as StyledLabel } from '../TextField/TextField.styles';

export const Label = styled(StyledLabel)`
  top: -9px;
  left: 65px;

  @media (max-width: 768px) {
    left: 0;
    top: -8px;
  }
`;

export const RowPriority = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0 16px;
`;
