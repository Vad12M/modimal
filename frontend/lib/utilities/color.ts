export const textColors = {
  white: 'text-white',
  black: 'text-black',
  mediumColor: "text-mediumColor",

  primary: 'text-primary',
  primaryDark: 'text-primaryDark',
  primaryLight: 'text-primaryLight',
  neutralGray: 'text-neutralGray',
  grayLight: 'text-grayLight',
  danger: 'text-danger',
};

export type TextColorsTypes = keyof typeof textColors;

export type TextHoverColorsTypes = keyof typeof textColors;

export const backgroundColors = {
  white: 'bg-white',
  black: 'bg-black',
  mediumColor: "bg-mediumColor",

  primary: 'bg-primary',
  primaryDark: 'bg-primaryDark',
  primaryLight: 'bg-primaryLight',
  neutralGray: 'bg-neutralGray',
  grayLight: 'bg-grayLight',
};

export type BackgroundColorsTypes = keyof typeof backgroundColors;
