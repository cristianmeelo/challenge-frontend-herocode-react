interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: VoidFunction;
}

interface StyledSidebar extends Pick<SidebarProps, 'isSidebarOpen'> {}
