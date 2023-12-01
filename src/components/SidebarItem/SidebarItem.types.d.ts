interface SidebarItemProps {
  icon: React.ReactElement
  label: string
  isSelected: boolean
  onItemClicked: (label: string) => void
}

interface StyledItem extends Pick<SidebarItemProps, 'isSelected'> {}
