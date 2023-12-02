interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: VoidFunction;
  selectedItem: string | null;
  handleItemClicked: (label: string) => void;
}

interface StyledSidebar extends Pick<SidebarProps, 'isSidebarOpen'> {}
