import React from 'react';
import { TypographyProps } from './typography.props';
import { texts } from '../utilities/fonts';
import { textColors } from '../utilities/color';

export const Typography: React.FC<TypographyProps> = ({
  text,
  html,
  textType,
  tag,
  block,
  className,
  color = 'black',
  hoverColor = 'black',
  title,
  ...props
}) => {
  if (!text && !html) {
    return null;
  }

  const CLASSNAMES = `break-words ${'group-hover:' + textColors[hoverColor]} ${textType && texts[textType]} ${
    block ? 'block' : 'inline-block'
  } ${className} ${color ? textColors[color] : ''}`;

  const elementProps: any = { ...props, className: CLASSNAMES };
  if (html) {
    text = undefined;
    elementProps.dangerouslySetInnerHTML = {
      __html: `${html}`
    };
  }

  switch (tag || textType) {
    case 'heading3':
    case 'h3':
      return (
        <h3 {...elementProps}>{text}</h3>
      );
    case 'heading5':
    case 'h5':
      return (
        <h5 {...elementProps}>{text}</h5>
      );

    default:
      return (
        <span title={title} {...elementProps}>{text}</span>
      );
  }
};

export default Typography;
