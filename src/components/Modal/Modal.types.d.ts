/**
 * Represents the props for the Modal component.
 * @interface
 */

interface ModalProps {
  /**
   * A boolean indicating whether the modal is open.
   * @member {boolean}
   */
  isOpen: boolean;

  /**
   * A function to toggle the status of the modal.
   * @member {() => void}
   */
  toggleModalStatus: () => void;

  /**
   * An array of columns in the task management system.
   * @member {Column[]}
   */
  columns: Column[];

  /**
   * A function to update the state of columns in the task management system.
   * @member {React.Dispatch<React.SetStateAction<Column[]>>}
   */
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
}
