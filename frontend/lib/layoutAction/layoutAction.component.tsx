import React from 'react';
import cx from 'classnames';
import { LayoutActionProps } from './layoutAction.props';
import styles from './layoutAction.module.css';


export const LayoutAction: React.FC<LayoutActionProps> = ({
  label,
  isDisabled = false,
  type = 'primary',
  className = '',
  suffixBtn,
  prefixBtn,
  classSuffix = 'pl-2',
  classPrefix = 'pr-2',
  textButtonColor= 'darkStone',
  wFull,
  size = 'medium',
}) => {
  let classes;

  if (type === 'primary') {
    classes = cx('px-6', styles.primaryBtn, {
      [styles.primaryBtnDisabled]: isDisabled,
    });
  }

  if (type === 'secondary') {
    classes = cx('px-6', styles.secondaryBtn, {
      [styles.secondaryBtnDisabled]: isDisabled,
    });
  }

  if (type === 'textButton') {
    classes = cx(`${styles[`${textButtonColor}TextButtonColor`]}`, styles.textButton, {
      [styles.textButtonDisabled]: isDisabled,
    });
  }

  if (type === 'linkButton') {
    classes = cx(styles.linkButton, {
      [styles.linkButtonDisabled]: isDisabled,
    });
  }

  const suffixElement = suffixBtn?.();
  const prefixElement = prefixBtn?.();

  const renderSuffix = suffixElement && (
    <span className={classSuffix}>{suffixElement}</span>
  );

  const renderPrefix = prefixElement && (
    <span className={classPrefix}>{prefixElement}</span>
  );

  return (

    <span
      className={`group ${styles.container} ${classes} ${className} ${styles[`${size}Size`]} ${wFull && styles.wFull}`}
    >
      {renderPrefix}
      <span>{label}</span>
      {renderSuffix}
    </span>

  );
};

export default LayoutAction;
