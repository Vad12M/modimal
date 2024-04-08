import React from 'react';
import { ButtonProps } from './button.props';
import LayoutAction from "@/lib/layoutAction/layoutAction.component";


export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  isDisabled = false,
  type ,
  textButtonColor ,
  buttonType = 'button' as 'button' | 'submit'| 'reset' | undefined,
  className = '',
  rootClassName = '',
  suffixBtn,
  prefixBtn,
  classSuffix,
  classPrefix,
  ariaLabel,
  children,
  widthFull,
  size= 'small'
}) => {

  return (
    <button
      type={buttonType}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${rootClassName} ${isDisabled ? 'cursor-text' : ''} ${
        widthFull ? "w-full" : "inline-flex max-w-min"
      }`}
    >
      {children ? children :
        <LayoutAction
          type={type}
          textButtonColor={textButtonColor}
          isDisabled={isDisabled}
          className={className}
          suffixBtn={suffixBtn}
          prefixBtn={prefixBtn}
          classSuffix={classSuffix}
          classPrefix={classPrefix}
          wFull={widthFull}
          label={label}
          size={size}
        />
      }
    </button>
  );
};

export default Button;
