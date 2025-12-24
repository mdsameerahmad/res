import { useEffect, useState } from "react";
import { MenuItem } from "../data/menuData";

export type CartItem = MenuItem & { quantity: number };

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("foodCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart helper
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("foodCart", JSON.stringify(newCart));
  };

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find((c) => c.id === item.id);

    if (existingItem) {
      saveCart(
        cart.map((c) =>
          c.id === item.id
            ? { ...c, quantity: c.quantity + 1 }
            : c
        )
      );
    } else {
      saveCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    saveCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    saveCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);                    // ✅ state reset
    localStorage.removeItem("foodCart"); // ✅ storage cleared
  };

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,        // ✅ exposed
    getTotalPrice,
    getTotalItems,
  };
};
