import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Button } from "./ui/button";

type HeroCarouselProps = {
  onOrderClick: () => void;
};

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzY2NDczMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Indian Thali Platter",
  },
  {
    url: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjY0NzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Biryani Rice",
  },
  {
    url: "https://images.unsplash.com/photo-1589301773859-bb024d3ad558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBzbmFja3xlbnwxfHx8fDE3NjY0MzEzODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Snacks and Starters",
  },
  {
    url: "https://images.unsplash.com/photo-1707387312941-ac872ffde2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZXNzZXJ0JTIwc3dlZXR8ZW58MXx8fHwxNzY2NTU4NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Indian Desserts",
  },
  {
    url: "https://images.unsplash.com/photo-1690915475414-9aaecfd3ba74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdXJyeSUyMGRpc2h8ZW58MXx8fHwxNzY2NDk2NDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Main Course Curry",
  },
];

export function HeroCarousel({ onOrderClick }: HeroCarouselProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-gray-900">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {carouselImages.map((image, index) => (
          <div key={index} className="relative h-[500px] md:h-[600px] lg:h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Food Fun Friends
            </h1>
            <p className="text-[var(--gold-light)] text-xl sm:text-2xl md:text-3xl mb-6">
              Delicious Catering & Homedelivery in Howrah
            </p>
            <Button
              onClick={onOrderClick}
              className="bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--charcoal)] px-8 py-6 text-lg"
            >
              Order Now on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Mobile Sticky Bottom Bar for HeroCarousel */}
     
    </div>
  );
}
