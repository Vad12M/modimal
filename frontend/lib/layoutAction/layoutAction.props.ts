export interface LayoutActionProps {
  label?: string;
  type?: actionTypes;
  className?: string;
  isDisabled?: boolean;
  suffixBtn?: () => any;
  prefixBtn?: () => any;
  classSuffix?: string;
  classPrefix?: string;
  textButtonColor?: actionTextButtonColors;
  wFull?: boolean;
  size?: Sizes;
}

const types = {
  primary: 'primary',
  secondary: 'secondary',
  textButton: 'textButton',
  linkButton: 'linkButton',
};
export type actionTypes = keyof typeof types;

const sizes = {
  none: 'none',
  small: 'small',
  medium: 'medium',
  large: 'large',
};
export type Sizes = keyof typeof sizes;

const textButtonColors = {
  primaryDarker: 'primaryDarker',
  primary: 'primary',
};

export type actionTextButtonColors = keyof typeof textButtonColors;
