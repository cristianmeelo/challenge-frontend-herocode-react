/**
 * Represents the state and actions for managing the sidebar.
 * @interface
 */
interface SidebarState {
  /**
   * A flag indicating whether the sidebar is open or closed.
   * @member {boolean}
   */
  isSidebarOpen: boolean;

  /**
   * Toggles the status of the sidebar, either opening or closing it.
   * @function
   */
  toggleSidebar: () => void;
}