import {ButtonProps} from './type';
import {backgroundColors, height} from './utils';

const defaultProps: ButtonProps = {
  text: 'Default',
  size: 'md',
  color: 'default',
  disabled: false,
  disableShadow: false,
  variant: 'default',
  onClick: () => {},
};

const Button = (props: ButtonProps) => {
  const generateClassName = (): string => {
    const result = [];

    result.push('rounded-md'); // border
    result.push('text-sm font-medium'); // font size
    result.push('px-4 py-2 my-4 mr-4'); // padding & margin
    result.push(height[props.size]); // height
    result.push(backgroundColors[props.color]); // background color
    if (!props.disableShadow) {
      result.push('drop-shadow'); // shadow
    }

    return result.join(' ');
  };

  return (
    <div>
      <button className={generateClassName()} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

Button.defaultProps = defaultProps;

export default Button;
