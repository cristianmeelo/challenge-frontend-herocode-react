import React from "react";
import * as S from "./SidebarItem.styles";

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isSelected, onItemClicked }) => {
  return (
    <S.Item isSelected={isSelected} onClick={() => onItemClicked(label)}>
      {React.cloneElement(icon, { isSelected })}
      <S.Label isSelected={isSelected}>{label}</S.Label>
    </S.Item>
  );
};

export default SidebarItem;
