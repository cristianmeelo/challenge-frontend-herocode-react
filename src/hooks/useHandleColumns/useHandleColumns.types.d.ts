/**
 * Represents the state and actions for managing the columns.
 * @interface
 */
interface UseHandleColumns {
  /**
   * The columns currently in use.
   * @member {Column[]}
   */
  columns: Column[];
  /**
   * Sets the columns to the new state.
   * @function
   * @param {Column[]} newColumns - The new columns to be set.
   * @example
   * setColumns([column1, column2]);
   */
  setColumns: (newColumns: Column[]) => void;
}
