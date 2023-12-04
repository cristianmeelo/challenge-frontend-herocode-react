/**
 * Represents the properties for a button component.
 * @interface
 */
interface ButtonProps {
  /**
   * The content of the button, typically provided as React nodes.
   * @member {React.ReactNode}
   */
  children: React.ReactNode;

  /**
   * The visual variant style of the button.
   * @member {ButtonVariants}
   */
  variant: ButtonVariants;

  /**
   * The shape style of the button.
   * @member {ButtonShapes}
   */
  shape: ButtonShapes;
}

/**
 * Represents the possible variants for the button.
 * @type {('contained' | 'outlined')}
 */
type ButtonVariants = 'contained' | 'outlined';

/**
 * Represents the possible shapes for the button.
 * @type {('square' | 'rounded')}
 */
type ButtonShapes = 'square' | 'rounded';
