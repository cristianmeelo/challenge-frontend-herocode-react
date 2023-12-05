/**
 * Represents the state and actions for managing a modal.
 * @interface
 */
interface ModalState {
  /**
   * A flag indicating whether the modal is open or closed.
   * @member {boolean}
   */
  isOpen: boolean;

  /**
   * Toggles the status of the modal, either opening or closing it.
   * @function
   */
  toggleModalStatus: () => void;
}

/**
 * Custom hook for managing the state of a modal.
 * @returns {ModalState} The state and actions for managing a modal.
 */