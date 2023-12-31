import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';


const items = [
    {
      src: 'https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1704001548/6-painting_mnyipb.png',
      altText: 'Art & Design',
      caption: 'Art & Design',
      key: 1,
    },
    {
      src: 'https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1704001546/4-glyph1_qr3sw6.png',
      altText: 'Typography Glyph',
      caption: 'Typography Glyph',
      key: 2,
    },
    {
      src: 'https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1704001546/5-glyph2_mszejh.png',
      altText: 'Pixelization',
      caption: 'Pixelization',
      key: 3,
    },
    {
        src: 'https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1704001545/3-cakes-site_jyxg1c.png',
        altText: 'Cake Website',
        caption: 'Cake Website',
        key: 4,
      },
      {
        src: 'https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1704001545/2-bittersweet_ufty9z.png',
        altText: 'My First Website',
        caption: 'My First Website',
        key: 5,
      }

];

const Slider = (args) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption 
          captionText={item.caption}
        />
      </CarouselItem>
    );
  });



  return (
    <Carousel
    activeIndex={activeIndex}
    next={next}
    previous={previous}
    {...args}
  >
    <CarouselIndicators
      items={items}
      activeIndex={activeIndex}
      onClickHandler={goToIndex}
    />
    {slides}
    <CarouselControl
      direction="prev"
      directionText="Previous"
      onClickHandler={previous}
    />
    <CarouselControl
      direction="next"
      directionText="Next"
      onClickHandler={next}
    />
  </Carousel>
  )
}

export default Slider