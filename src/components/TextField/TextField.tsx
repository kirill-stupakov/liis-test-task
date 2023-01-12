import { forwardRef, HTMLProps, useId } from 'react';
import cn from 'classnames';
import styles from './TextField.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  error?: string;
}

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ id, label, error, className, ...props }, ref) => {
    const uniqueId = useId();
    const inputId = id || uniqueId;

    return (
      <div className={cn(className, styles.textField, error && styles.error)}>
        <label htmlFor={inputId}>{label}</label>
        <input id={inputId} ref={ref} {...props} />
        {error && <p>{error}</p>}
      </div>
    );
  },
);

export default TextField;
