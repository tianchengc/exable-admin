import React from 'react';
import classNames from 'classnames';
import { TextAreaProps as AntdTextAreaProps } from 'antd/es/input';
import { Input } from 'antd';
import styles from './Textarea.module.css';

const { TextArea: AntdTextArea } = Input;

const Textarea: React.FC<AntdTextAreaProps> = ({
  className,
  ...props
}) => {
  return (
    <AntdTextArea
      className={classNames(
        styles.textarea,
        className
      )}
      {...props}
    />
  );
};

export default Textarea;
