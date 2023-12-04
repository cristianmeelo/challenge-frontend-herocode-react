/**
 * Represents the properties for a sidebar item.
 * @interface
 */
interface SidebarItemProps {
  /**
   * The React element representing the icon for the sidebar item.
   * @member {React.ReactElement}
   */
  icon: React.ReactElement;

  /**
   * The label or text associated with the sidebar item.
   * @member {string}
   */
  label: string;

  /**
   * Indicates whether the sidebar item is currently selected.
   * @member {boolean}
   */
  isSelected: boolean;

  /**
   * Callback function triggered when the sidebar item is clicked.
   * @function
   * @param {string} label - The label of the clicked sidebar item.
   * @returns {void}
   */
  onItemClicked: (label: string) => void;
}

/**
 * Represents the styled properties derived from `SidebarItemProps`.
 * @interface
 */
interface StyledItem extends Pick<SidebarItemProps, 'isSelected'> {}
