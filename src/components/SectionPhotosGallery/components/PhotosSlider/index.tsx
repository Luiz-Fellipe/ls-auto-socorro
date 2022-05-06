import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

//Styles
import {
  WrapperPhotosSlider,
  ImgContainerAni,
  ArrowCard,
  PhotoContainer,
  GalleryContainer,
  GalleryItem,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export function PhotosSlider() {
  interface IPhotosProps {
    id: number;
    url: string;
    alt: string;
  }

  const photos = useMemo<IPhotosProps[]>(() => {
    const result: IPhotosProps[] = [
      {
        id: 1,
        url: '/images/photos/image1.jpeg',
        alt: 'Uma foto mostrando a traseira do caminhão carregado com um carro em cima,um triciclo em baixo e um outro carro sendo arrastado',
      },
      {
        id: 2,
        url: '/images/photos/image2.png',
        alt: 'Uma foto mostrando a traseira do caminhão carregado com um carro em cima e um triciclo em baixo.',
      },
      {
        id: 3,
        url: '/images/photos/image3.png',
        alt: 'Uma foto mostrando a lateral do caminhão carregado com um carro em baixo e um carro sendo arrastado na traseira.',
      },
    ];

    return result;
  }, []);

  const [currentPosition, setCurrentPosition] = useState(0);

  const [direction, setDirection] = useState(0);

  const animationVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
          duration: 0.9,
        },
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      };
    },
  };

  const handlePaginate = useCallback(
    (value) => {
      if (
        currentPosition + value > photos.length - 1 ||
        currentPosition + value < 0
      ) {
        return;
      }

      setCurrentPosition((oldValue) => oldValue + value);
      setDirection(value);
    },
    [currentPosition, photos],
  );

  /**
   * Experimenting with distilling swipe offset and velocity into a single variable, so the
   * less distance a user has swiped, the more velocity they need to register as a swipe.
   * Should accomodate longer swipes and short flicks without having binary checks on
   * just distance thresholds and velocity > 0.
   */
  const swipeConfidenceThreshold = 100;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <WrapperPhotosSlider>
      <PhotoContainer>
        <AnimatePresence exitBeforeEnter>
          <ImgContainerAni
            key={currentPosition}
            custom={direction}
            variants={animationVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                handlePaginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                handlePaginate(-1);
              }
            }}
          >
            <Image
              src={photos[currentPosition].url}
              alt={photos[currentPosition].alt}
              layout="fill"
              objectFit="fill"
            />
          </ImgContainerAni>
        </AnimatePresence>
        {currentPosition !== 0 && (
          <ArrowCard
            className="left"
            onClick={() => handlePaginate(-1)}
            aria-label="voltar há página anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </ArrowCard>
        )}
        {currentPosition !== photos.length - 1 && (
          <ArrowCard
            className="right"
            onClick={() => handlePaginate(1)}
            aria-label="ir para próxima página"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </ArrowCard>
        )}
      </PhotoContainer>
      <GalleryContainer>
        {photos.map((photo, index) => (
          <GalleryItem
            key={photo.id}
            isActive={currentPosition === index}
            role="button"
            onClick={() => setCurrentPosition(index)}
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
            />
          </GalleryItem>
        ))}
      </GalleryContainer>
    </WrapperPhotosSlider>
  );
}
