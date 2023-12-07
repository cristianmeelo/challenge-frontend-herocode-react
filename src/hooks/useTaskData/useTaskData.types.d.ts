/**
 * Represents the state and actions for managing task data.
 * @interface
 */
interface UseTaskData {
  /**
   * The task data.
   * @member {Task}
   */
  taskData: Task;

  /**
   * Sets the task data to the new state.
   * @function
   * @param {Task} newTaskData - The new task data to be set.
   * @example
   * setTaskData({ id: '123', title: 'Task Title', ... });
   */
  setTaskData: (newTaskData: Task) => void;

  /**
   * Resets the task data to its initial state.
   * @function
   */
  cleanTaskData: () => void;
}
