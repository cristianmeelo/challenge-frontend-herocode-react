/**
 * Generates a random task ID with an optional prefix.
 * @param {string} prefix - The optional prefix for the task ID (default is 'task').
 * @returns {string} The generated random task ID.
 * @example
 * // Returns a random task ID like 'task-123456'
 * const taskId = generateRandomTaskId();
 *
 * // Returns a random task ID with a custom prefix like 'custom-789012'
 * const customTaskId = generateRandomTaskId('custom');
 */
const generateRandomTaskId = (prefix: string = 'task'): string => {
  const randomNumber = Math.floor(Math.random() * 1000000);
  return `${prefix}-${randomNumber}`;
};

export default generateRandomTaskId;
