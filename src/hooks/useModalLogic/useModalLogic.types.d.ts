/**
 * Represents the state and actions for managing the modal logic.
 * @interface
 */
interface UseModalLogic {
  /**
   * Handles input changes in the modal form.
   * @function
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The change event.
   */
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /**
   * Handles the form submission in the modal.
   * @function
   */
  handleSubmit: () => void;
}