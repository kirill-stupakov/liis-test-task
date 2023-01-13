import cn from 'classnames';
import { FC } from 'react';
import { SortOrder } from 'types/hotel';
import styles from './SortToggle.module.scss';

interface Props {
  label?: string;
  onChange?: (newValue: SortOrder) => void;
  selected?: boolean;
  order?: SortOrder;
  className?: string;
}

const SortToggle: FC<Props> = ({ label, className, onChange, selected, order }) => {
  return (
    <div
      className={cn(className, styles.sortToggle, selected && styles.selected)}
      onClick={() => onChange?.(order === 'asc' ? 'desc' : 'asc')}
    >
      {label}
      <div className={styles.arrows}>
        <div className={cn(styles.arrow, order === 'asc' && styles.highlight)} />
        <div className={cn(styles.arrow, order === 'desc' && styles.highlight)} />
      </div>
    </div>
  );
};

export default SortToggle;
