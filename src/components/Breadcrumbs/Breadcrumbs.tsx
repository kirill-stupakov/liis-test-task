import { FC } from 'react';
import cn from 'classnames';
import { ReactComponent as BreadcrumbSeparator } from 'assets/icons/breadcrumb-separator.svg';
import styles from './Breadcrumbs.module.scss';

interface Props {
  items: string[];
  className?: string;
}

const Breadcrumbs: FC<Props> = ({ items, className }) => {
  return (
    <ol className={cn(className, styles.breadcrumbs)}>
      {items.map((item, index) => (
        <li key={index}>
          {index > 0 && <BreadcrumbSeparator />}
          {item}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumbs;
