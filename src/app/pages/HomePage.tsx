import React from "react";
import { HeroCarousel } from "../components/HeroCarousel";
import { FeaturedDishes } from "../components/FeaturedDishes";

interface HomePageProps {
  onOrderClick: () => void;
  addToCart: (item: any) => void;
  toggleFavorite: (itemId: string) => void;
  isFavorite: (itemId: string) => boolean;
}

const HomePage: React.FC<HomePageProps> = ({
  onOrderClick,
  addToCart,
  toggleFavorite,
  isFavorite,
}) => {
  return (
    <>
      <div className="pt-16 md:pt-20">
        <HeroCarousel onOrderClick={onOrderClick} />
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[var(--maroon)] mb-6">
              About Food Fun Friends
            </h2>
            <div className="w-24 h-2 bg-[var(--gold)] mx-auto mb-6"></div>
            <p className="text-[var(--charcoal)] text-lg leading-relaxed mb-4">
              Welcome to Food Fun Friends, your trusted partner for delicious
              catering and home delivery services in Howrah. We pride ourselves
              on serving authentic, homely, and traditional Indian cuisine that
              brings the taste of home to your table.
            </p>
            <p className="text-[var(--charcoal-light)] leading-relaxed">
              From traditional curries to aromatic biryanis, crispy snacks to
              sweet desserts, we offer a wide variety of dishes prepared with
              love and the finest ingredients. Our commitment is to provide you
              with a memorable culinary experience.
            </p>
          </div>
        </div>
      </section>

      <FeaturedDishes
        addToCart={addToCart}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
};

export default HomePage;
