interface ButtonProps {
  children: React.ReactNode;
  variant: ButtonVariants;
  shape: ButtonShapes;
}

type ButtonVariants = 'contained' | 'outlined';
type ButtonShapes = 'square' | 'rounded';
