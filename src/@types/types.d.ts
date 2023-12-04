/**
 * Interface for icon properties.
 * @interface
 */
interface IconProps {
  /**
   * Indicates whether the icon is selected.
   * @optional
   */
  isSelected?: boolean;

  /**
   * Indicates whether the icon is associated with an overdue situation.
   * @optional
   */
  isOverdue?: boolean;
}

/**
 * Interface for dynamic content properties.
 * @interface
 */
interface DynamicContentProps {
  /**
   * Indicates whether the sidebar is open.
   */
  isSidebarOpen: boolean;
}
