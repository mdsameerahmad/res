import React from "react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../data/menuData";
import { FoodCard } from "./FoodCard";
import { Button } from "./ui/button";

interface FeaturedDishesProps {
  addToCart: (item: any) => void;
  toggleFavorite: (itemId: string) => void;
  isFavorite: (itemId: string) => boolean;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({
  addToCart,
  toggleFavorite,
  isFavorite,
}) => {
  const navigate = useNavigate();

  const recommendedItems = menuItems.filter((item) => item.isRecommended).slice(0, 4);
  const topSellingItems = menuItems.filter((item) => item.isTopSeller).slice(0, 4);

  const handleViewMore = () => {
    navigate("/menu");
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recommended */}
        <div id="category-recommended" className="mb-12 scroll-mt-48">
          <h3 className="text-[var(--maroon)] text-3xl font-bold mb-8 text-center">
            Chef&apos;s Special
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommendedItems.map((item, index) => (
              <FoodCard
                key={item.id}
                item={item}
                onAddToCart={addToCart}
                onToggleFavorite={toggleFavorite}
                isFavorite={isFavorite(item.id)}
                index={index}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button onClick={handleViewMore} className="bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--charcoal)]">
              View More
            </Button>
          </div>
        </div>

        {/* Top Selling */}
        <div id="category-top-selling" className="mb-12 scroll-mt-48">
          <h3 className="text-[var(--maroon)] text-3xl font-bold mb-8 text-center">
            Top Selling Dishes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topSellingItems.map((item, index) => (
              <FoodCard
                key={item.id}
                item={item}
                onAddToCart={addToCart}
                onToggleFavorite={toggleFavorite}
                isFavorite={isFavorite(item.id)}
                index={index}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button onClick={handleViewMore} className="bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--charcoal)]">
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
