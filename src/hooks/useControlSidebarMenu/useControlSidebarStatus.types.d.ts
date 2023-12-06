/**
 * Represents the control interface for managing the sidebar menu.
 * @interface
 */
interface ControlSidebarMenu {
  /**
   * The currently selected item in the sidebar.
   * @member {string | null}
   * @public
   */
  selectedItem: string | null;

  /**
   * Handles the click event for the sidebar item.
   * @function
   * @param {string} item - The item to be handled.
   * @returns {void}
   * @public
   */
  handleItemClicked: (item: string) => void;
}
