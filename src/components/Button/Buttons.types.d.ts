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

  /**
   * The color style of the button.
   * @member {ButtonsColors}
   * @default 'primary'
   */
  color?: ButtonsColors;
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

/**
 * Represents the possible colors for the button.
 * @type {('secondary' | 'success' | 'error')}
 */
type ButtonsColors = 'secondary' | 'success' | 'error';

/**
 * An example of how to use the Button component.
 * @example
 * <Button variant="contained" shape="rounded" color="success">
 *   Submit
 * </Button>
 */
