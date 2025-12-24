import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useCart } from "./hooks/useCart";
import { useFavorites } from "./hooks/useFavorites";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const {
    cart,
    addToCart,
    removeFromCart: onRemoveFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <Header
        cartItemsCount={getTotalItems()}
        favoritesCount={favorites.length}
        onCartOpen={() => setCartOpen(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onOrderClick={() => {
                window.open(`https://wa.me/9155649575`, "_blank");
              }}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <MenuPage
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          }
        />
      </Routes>

      <Footer />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={onRemoveFromCart}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
}