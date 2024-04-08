import { actionTextButtonColors, actionTypes, Sizes } from '../layoutAction/layoutAction.props';
import React from "react";

export interface ButtonProps {
  label?: string;
  isDisabled?: boolean;
  type?: actionTypes;
  textButtonColor?: actionTextButtonColors;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  rootClassName?: string;
  ariaLabel?: string;
  suffixBtn?: () => any;
  prefixBtn?: () => any;
  classSuffix?: string;
  classPrefix?: string;
  children?: React.ReactNode;
  widthFull?: boolean;
  size?: Sizes;
}


