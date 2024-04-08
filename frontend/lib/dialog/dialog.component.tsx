import React from 'react';
import { DialogProps } from './dialog.props';
import styles from './dialog.module.css';
import Modal from 'react-modal';
import CloseIcon from "@/icons/CloseIcon";
Modal.setAppElement('#__next');

const Dialog: React.FC<DialogProps> = ({
  showCloseIcon = true,
  className = 'py-16 px-2',
  rootClassName = '',
  animate = 'slideUp',
  bottom,
  overflowHidden = false,
  sizeScreen = false,
  overlayClassName,
  bgTransparent = false,
  fillIcon,
  onAfterOpen,
  widthScreen = false,

  ...props
}) => {
  const ua = typeof navigator !== 'undefined' && navigator.userAgent;
  const blockScroll = !ua || (!/iP(ad|od|hone)/i.test(ua) && !ua.includes('Android'));

  return (
    <Modal
      onAfterOpen={onAfterOpen}
      preventScroll={blockScroll}
      className={`${styles.modalContainer} ${rootClassName} ${bgTransparent && styles.bgTransparent} ${widthScreen && styles.widthScreen}`}
      overlayClassName={`${styles.overlayStyles}  ${animate ? ' animate-' + animate : ''} ${
        bottom ? 'items-end' : 'items-center'} ${overlayClassName} ${bgTransparent && styles.bgTransparent}`}
      closeTimeoutMS={150}
      {...props}
    >
      {showCloseIcon &&
        <button onClick={props.onRequestClose} className={`${styles.closeButton} mt-4 pl-2`} aria-label={'close modal'}>
          <CloseIcon size={32}/>
        </button>}
      <div className={`overflow-y-auto ${sizeScreen ? styles.modalContentScreen : styles.modalContent} ${className}
      ${overflowHidden ? 'md:overflow-y-hidden' : ''} ${widthScreen && styles.widthScreen}`}>
        {props.children}
      </div>
    </Modal>
  );
};

export default Dialog;
