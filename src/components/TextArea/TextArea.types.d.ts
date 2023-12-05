/**
 * Represents the properties for rendering a custom textarea.
 * @interface
 */
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * The label for the textarea.
   * @member {string}
   */
  label: string;
}
