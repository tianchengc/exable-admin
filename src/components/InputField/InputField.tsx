import React from 'react';
import classNames from 'classnames';
import { InputProps as AntdInputProps } from 'antd';
import { Input as AntdInput } from 'antd';
import styles from './InputField.module.css';

const InputField: React.FC<AntdInputProps> = ({
  className,
  ...props
}) => {
  return (
    <AntdInput
      className={classNames(
        styles.inputField,
        className
      )}
      {...props}
    />
  );
};

export default InputField;