import React from 'react';
import * as S from './SidebarItem.styles';

const SidebarItem = ({ icon, label, isSelected, onItemClicked }: SidebarItemProps) => {
  return (
    <S.Item isSelected={isSelected} onClick={() => onItemClicked(label)} tabIndex={0}>
      {React.cloneElement(icon, { isSelected })}
      <S.Label isSelected={isSelected}>{label}</S.Label>
    </S.Item>
  );
};

export default SidebarItem;
