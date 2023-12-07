/**
 * Represents the functions for displaying toast notifications.
 * @interface
 */
interface UseToastNotifications {
  /**
   * Displays an error notification.
   * @function
   * @param {string} message - The error message to be displayed.
   * @param {ToastOptions} [options] - Additional options for configuring the notification.
   */
  notifyError: (message: string, options?: ToastOptions) => void;

  /**
   * Displays a success notification.
   * @function
   * @param {string} message - The success message to be displayed.
   * @param {ToastOptions} [options] - Additional options for configuring the notification.
   */
  notifySuccess: (message: string, options?: ToastOptions) => void;
}
