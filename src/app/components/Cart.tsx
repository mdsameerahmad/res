import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem } from "../hooks/useCart";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void; // ✅ required
  totalPrice: number;
};

export function Cart({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  totalPrice,
}: CartProps) {
  const whatsappNumber = "9155649575";

  const generateWhatsAppMessage = () => {
    let message =
      "Hello Food Fun Friends Caterers,\n\nI would like to order:\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} – ${item.quantity} Qty (₹${
        item.price * item.quantity
      })\n`;
    });

    message += `\nTotal Amount: ₹${totalPrice}\n\nDelivery Address: _______`;

    return encodeURIComponent(message);
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage()}`,
      "_blank"
    );

    onClearCart(); // ✅ cart becomes []
    onClose();     // ✅ close drawer
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg flex flex-col p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <p className="text-gray-500 mb-2">Your cart is empty</p>
            <p className="text-sm text-gray-400">
              Add items to place an order
            </p>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-white p-3 rounded-xl border shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-sm font-medium truncate">
                          {item.name}
                        </h4>
                        <span className="text-sm text-[var(--maroon)]">
                          ₹{item.price}
                        </span>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 rounded hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 border rounded-full"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-sm min-w-[2rem] text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 border rounded-full"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>

                      <span className="ml-auto font-medium">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t px-6 py-4 space-y-3">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-semibold text-[var(--maroon)]">
                  ₹{totalPrice}
                </span>
              </div>

              <Button
                onClick={handlePlaceOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white h-11"
              >
                Place Order on WhatsApp
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
