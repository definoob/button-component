export interface ButtonProps {
  text: string;
  size: 'sm' | 'md' | 'lg';
  color: string;
  disabled: boolean;
  disableShadow: boolean;
  variant: 'default' | 'text' | 'outline';
  startIcon?: string;
  endIcon?: string;
  onClick: () => void;
}
