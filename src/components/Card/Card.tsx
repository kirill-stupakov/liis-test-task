import cn from 'classnames';
import { FCWithChildren } from 'types/react';
import styles from './Card.module.scss';

interface Props {
  className?: string;
}

const Card: FCWithChildren<Props> = ({ className, children }) => {
  return <div className={cn(className, styles.card)}>{children}</div>;
};

export default Card;
