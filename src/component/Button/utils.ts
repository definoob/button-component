type ObjectProps = {
  [index: string]: string;
};

export const backgroundColors: ObjectProps = {
  default: 'bg-default hover:bg-default-hover',
  primary: 'bg-primary hover:bg-primary-hover ',
  secondary: 'bg-secondary hover:bg-secondary-hover',
  danger: 'bg-danger hover:bg-danger-hover',
};

export const height: ObjectProps = {
  sm: 'h-sm',
  md: 'h-md',
  lg: 'h-lg',
};

export const textColor: ObjectProps = {
  default: 'text-white',
};
