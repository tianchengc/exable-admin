import React from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import classNames from 'classnames';
import styles from './Button.module.css';

interface ButtonProps extends AntdButtonProps {
  category?: 'primary' | 'secondary' | 'danger' | 'link';
  width?: 'regular' | 'full' | 'small';
}

const Button: React.FC<ButtonProps> = ({ 
  className, 
  category = 'primary', 
  width = 'regular',
  ...props 
}) => {
  return (
    <AntdButton 
      className={classNames(
        styles.button, 
        className,
        { [styles.buttonPrimary]: category === 'primary' },
        { [styles.buttonSecondary]: category === 'secondary' },
        { [styles.buttonDanger]: category === 'danger' },
        { [styles.buttonLink]: category === 'link' },
        { [styles.buttonFull]: width === 'full' },
        { [styles.buttonSmall]: width === 'small' },
        { [styles.buttonRegular]: width === 'regular' }
      )} 
      type={category === 'link' ? 'link' : 'default'}
      shape="round"
      {...props} 
    />
  )
};

export default Button;