import React from 'react';
import { FoodCard } from "../components/FoodCard";
import { menuItems } from "../data/menuData";
import { HeartCrack } from "lucide-react";

interface FavoritesPageProps {
  favorites: string[];
  addToCart: (item: any) => void;
  toggleFavorite: (itemId: string) => void;
  isFavorite: (itemId: string) => boolean;
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ favorites, addToCart, toggleFavorite, isFavorite }) => {
  const favoriteItems = menuItems.filter((item) => favorites.includes(item.id));

  return (
    <div className="min-h-screen bg-[var(--cream)] pt-16 md:pt-20">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[var(--maroon)] text-center mb-12">Your Favorite Dishes</h2>
          {favoriteItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteItems.map((item) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  onAddToCart={addToCart}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={isFavorite(item.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <HeartCrack className="w-24 h-24 text-[var(--gold)] mx-auto mb-6" />
              <p className="text-[var(--charcoal)] text-xl">No favorite items yet. Start adding some!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FavoritesPage;