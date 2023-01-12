import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'auto' | 'fill';
}

const Button: FC<Props> = ({ className, size = 'fill', ...props }) => {
  return <button className={cn(className, styles.button, styles[size])} {...props}></button>;
};

export default Button;
