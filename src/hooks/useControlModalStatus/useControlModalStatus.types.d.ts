/**
 * Represents the state and actions for managing a modal.
 * @interface
 */
interface ModalStatus {
  /**
   * A flag indicating whether the modal is open or closed.
   * @member {boolean}
   */
  isModalOpen: boolean;
  /**
   * Toggles the status of the modal, either opening or closing it.
   * @function
   */
  toggleModalStatus: () => void;
}
/**
 * Custom hook for managing the state of a modal.
 * @returns {ModalStatus} The state and actions for managing a modal.
 */
