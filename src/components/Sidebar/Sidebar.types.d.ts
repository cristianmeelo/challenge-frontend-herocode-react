/**
 * Represents the properties for the sidebar component.
 * @interface
 */
interface SidebarProps {
  /**
   * Indicates whether the sidebar is currently open.
   * @member {boolean}
   */
  isSidebarOpen: boolean;

  /**
   * Function to toggle the visibility of the sidebar.
   * @function
   * @returns {void}
   */
  toggleSidebar: VoidFunction;

  /**
   * The label of the currently selected item in the sidebar.
   * @member {string | null}
   */
  selectedItem: string | null;

  /**
   * Callback function triggered when a sidebar item is clicked.
   * @function
   * @param {string} label - The label of the clicked sidebar item.
   * @returns {void}
   */
  handleItemClicked: (label: string) => void;
}

/**
 * Represents the styled properties derived from `SidebarProps`.
 * @interface
 */
interface StyledSidebar extends Pick<SidebarProps, 'isSidebarOpen'> {}
