import cn from 'classnames';
import useAppSelector from 'hooks/useAppSelector';
import { FC, useRef, WheelEventHandler } from 'react';
import styles from './Carousel.module.scss';

interface Props {}

const Carousel: FC<Props> = () => {
  const { data, isLoading } = useAppSelector((state) => state.pictures);
  const containerRef = useRef<HTMLUListElement>(null);

  const onWheel: WheelEventHandler<HTMLUListElement> = (event) => {
    const container = containerRef.current;
    if (event.deltaY == 0 || !container) return;
    event.preventDefault();
    container.scrollTo({
      left: container.scrollLeft + event.deltaY,
    });
  };

  return (
    <ul
      ref={containerRef}
      className={cn(styles.carousel, isLoading && styles.loading)}
      onWheel={onWheel}
    >
      {data?.map((image, index) => (
        <li key={index}>
          <img src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
};

export default Carousel;
