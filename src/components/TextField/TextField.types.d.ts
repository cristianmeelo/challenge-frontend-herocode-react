/**
 * Represents the properties for rendering a custom text input field.
 * @interface
 */
interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label for the text input field.
   * @member {string}
   */
  label: string;

  /**
   * An optional icon to be displayed in the text input field.
   * @member {React.ReactNode}
   */
  icon?: React.ReactNode;
}
