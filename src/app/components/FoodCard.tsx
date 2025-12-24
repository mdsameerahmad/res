import { Crown, Heart, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { MenuItem } from "../data/menuData";
import { Button } from "./ui/button";

type FoodCardProps = {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
  index: number; // Add index prop
};

export function FoodCard({
  item,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
  index,
}: FoodCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100); // Stagger animation by 100ms per card
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDelay: `${index * 50}ms` }} // Optional: further stagger with CSS transition-delay
    >
      {/* Top Seller Badge */}
      {item.isTopSeller && (
        <div className="absolute top-3 left-3 z-10 bg-[var(--gold)] text-[var(--charcoal)] px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
          <Crown className="w-3.5 h-3.5" />
          <span className="text-xs font-semibold">Top Seller</span>
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={() => onToggleFavorite(item.id)}
        className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all"
        aria-label="Add to favorites"
      >
        <Heart
          className={`w-5 h-5 ${
            isFavorite
              ? "fill-red-500 text-red-500"
              : "text-gray-600 hover:text-red-500"
          } transition-colors`}
        />
      </button>

      {/* Food Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Veg/Non-Veg Badge */}
        <div className="mb-2">
          {item.isVeg ? (
            <div className="inline-flex items-center justify-center w-5 h-5 border-2 border-green-600 rounded">
              <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-5 h-5 border-2 border-red-600 rounded">
              <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
            </div>
          )}
        </div>

        {/* Name */}
        <h3 className="text-[var(--charcoal)] mb-2 line-clamp-1">
          {item.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {item.description}
        </p>

        {/* Price and Add Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[var(--maroon)]">₹{item.price}</span>
          </div>
          <Button
            onClick={() => onAddToCart(item)}
            className="bg-[var(--maroon)] hover:bg-[var(--maroon-dark)] text-white rounded-full px-4 py-2 flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
