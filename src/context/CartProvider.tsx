import { createContext, ReactNode, useState, useContext, useMemo } from "react";


type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};


const CartContext = createContext<CartContextType | null>(null);

type Props = {
  children: ReactNode;
};

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);


  const value = useMemo(() => ({ cart, setCart }), [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
