import { FC, useRef, WheelEventHandler } from 'react';
import image1 from 'assets/images/mock-1.jpg';
import image2 from 'assets/images/mock-2.jpg';
import image3 from 'assets/images/mock-3.jpg';
import image4 from 'assets/images/mock-4.jpg';
import styles from './Carousel.module.scss';

const images = [image1, image2, image3, image4, image1, image2, image3, image4];

interface Props {}

const Carousel: FC<Props> = () => {
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
    <ul ref={containerRef} className={styles.carousel} aria-hidden onWheel={onWheel}>
      {images.map((image, index) => (
        <li key={index}>
          <img src={image} alt='' />
        </li>
      ))}
    </ul>
  );
};

export default Carousel;
