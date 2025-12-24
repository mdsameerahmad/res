import {
  Cake,
  Coffee,
  Drumstick,
  Leaf,
  Sparkles,
  TrendingUp,
  Utensils,
  Wheat,
} from "lucide-react";
import React, { useState } from "react";
import { FoodCard } from "../components/FoodCard";
import { categories, menuItems } from "../data/menuData";

interface MenuPageProps {
  addToCart: (item: any) => void;
  toggleFavorite: (itemId: string) => void;
  isFavorite: (itemId: string) => boolean;
}

const categoryIcons: Record<string, any> = {
  Recommended: Sparkles,
  "Top Selling": TrendingUp,
  Veg: Leaf,
  "Non-Veg": Drumstick,
  "Rice & Biryani": Wheat,
  "Snacks & Starters": Utensils,
  Desserts: Cake,
  Beverages: Coffee,
};

const scrollToCategory = (category: string) => {
  const id = `category-${category.toLowerCase().replace(/\s+/g, "-")}`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const MenuPage: React.FC<MenuPageProps> = ({
  addToCart,
  toggleFavorite,
  isFavorite,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const recommendedItems = filteredMenuItems.filter(
    (item) => item.isRecommended
  );
  const topSellingItems = filteredMenuItems.filter(
    (item) => item.isTopSeller
  );

  return (
    <div className="min-h-screen bg-[var(--cream)] pt-16 md:pt-20">
      {/* 🔍 Sticky Search Bar ONLY */}
      <div className="sticky top-16 md:top-20 z-40 bg-[var(--cream)] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search dishes, biryani, desserts…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full
                sm:max-w-lg
                md:max-w-xl
                lg:max-w-2xl
                p-3 md:p-3.5
                rounded-full
                border border-gray-300
                bg-white
                text-sm md:text-base
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-[var(--maroon)]
              "
            />
          </div>
        </div>
      </div>

      {/* 📦 Categories (NORMAL SCROLL) */}
      <section className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-6
              gap-3 md:gap-4
            "
          >
            {categories.map((category) => {
              const Icon = categoryIcons[category.name];
              return (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.name)}
                  className="
                    group
                    h-10 md:h-11
                    bg-white
                    hover:bg-[var(--maroon)]
                    rounded-full
                    px-3
                    shadow-sm
                    hover:shadow-md
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <div className="w-5 h-5 flex items-center justify-center bg-[var(--cream)] group-hover:bg-white rounded-full transition-colors">
                    {Icon && (
                      <Icon className="w-4 h-4 text-[var(--maroon)]" />
                    )}
                  </div>
                  <span className="text-[11px] sm:text-xs text-[var(--charcoal)] group-hover:text-white whitespace-nowrap">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🧾 Menu Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Recommended */}
          <div id="category-recommended" className="mb-12 scroll-mt-48">
            <h3 className="text-[var(--maroon)] text-3xl font-bold mb-8 text-center">
              Chef&apos;s Special
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recommendedItems.map((item) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  onAddToCart={addToCart}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={isFavorite(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Top Selling */}
          <div id="category-top-selling" className="mb-12 scroll-mt-48">
            <h3 className="text-[var(--maroon)] text-3xl font-bold mb-8 text-center">
              Top Selling Dishes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {topSellingItems.map((item) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  onAddToCart={addToCart}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={isFavorite(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Other Categories */}
          {categories
            .filter(
              (c) => c.id !== "recommended" && c.id !== "top-selling"
            )
            .map((category) => (
              <div
                key={category.id}
                id={`category-${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="mb-12 scroll-mt-48"
              >
                <h3 className="text-[var(--maroon)] text-3xl font-bold mb-8 text-center">
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredMenuItems
                    .filter((item) => item.category === category.name)
                    .map((item, index) => (
                      <FoodCard
                        key={item.id}
                        item={item}
                        index={index}
                        onAddToCart={addToCart}
                        onToggleFavorite={toggleFavorite}
                        isFavorite={isFavorite(item.id)}
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
