import { Heart, Menu, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

type HeaderProps = {
  cartItemsCount: number;
  favoritesCount: number;
  onCartOpen: () => void;
};

export function Header({
  cartItemsCount,
  favoritesCount,
  onCartOpen,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "9155649575";

  return (
    <>
      {/* FIXED HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-tight">
              <span className="text-[var(--maroon)] tracking-wide">
                Food Fun Friends
              </span>
              <span className="text-xs text-[var(--charcoal)] opacity-70">
                Caterers & Homedelivery
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? "text-[var(--maroon)]"
                      : "text-[var(--charcoal)] hover:text-[var(--maroon)]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? "text-[var(--maroon)]"
                      : "text-[var(--charcoal)] hover:text-[var(--maroon)]"
                  }`
                }
              >
                Menu
              </NavLink>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? "text-[var(--maroon)]"
                      : "text-[var(--charcoal)] hover:text-[var(--maroon)]"
                  }`
                }
              >
                Favourites
              </NavLink>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Favorites */}
              <Link
                to="/favorites"
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Favorites"
              >
                <Heart className="w-5 h-5 text-[var(--charcoal)]" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--maroon)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <button
                onClick={onCartOpen}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5 text-[var(--charcoal)]" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--maroon)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Desktop */}
              <Button
                onClick={() =>
                  window.open(`https://wa.me/${whatsappNumber}`, "_blank")
                }
                className="hidden md:flex bg-[var(--maroon)] hover:bg-[var(--maroon-dark)] text-white"
              >
                Order on WhatsApp
              </Button>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                    aria-label="Menu"
                  >
                    <Menu className="w-6 h-6 text-[var(--charcoal)]" />
                  </button>
                </SheetTrigger>

                <SheetContent side="right">
                  <div className="flex flex-col gap-6 mt-8">
                    <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                      Home
                    </NavLink>
                    <NavLink to="/menu" onClick={() => setMobileMenuOpen(false)}>
                      Menu
                    </NavLink>
                    <NavLink
                      to="/favorites"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Favourites
                    </NavLink>

                    <Button
                      onClick={() => {
                        window.open(
                          `https://wa.me/${whatsappNumber}`,
                          "_blank"
                        );
                        setMobileMenuOpen(false);
                      }}
                      className="bg-[var(--maroon)] text-white w-full"
                    >
                      Order on WhatsApp
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

     
    </>
  );
}
