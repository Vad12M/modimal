import { TextColorsTypes, TextHoverColorsTypes } from '../utilities/color';
import {  TextsTypes } from "@/lib/utilities/fonts";

export interface TypographyProps {
  onClick?: () => void;
  text?: string | number;
  html?: string | number;
  textType: TextsTypes;
  block?: boolean;
  className?: string;
  color?: TextColorsTypes | null;
  style?: React.CSSProperties;
  hoverColor?: TextHoverColorsTypes;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  title?: string;
}
