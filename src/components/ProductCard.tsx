import { useCart } from "../context/CartProvider";
import Button from "../Shaired/Button";

type ProductProps = {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    rating: number;
    inStock: boolean;
  };
};

const ProductCard = ({ product }: ProductProps) => {
  const { cart, setCart } = useCart();

  const handleAddToCart = (product: ProductProps["product"]) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="bg-white w-full h-full justify-between p-6 rounded flex flex-col gap-2 items-center text-start">
      <img
        className="w-64 object-contain h-64"
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-col gap-2 justify-between w-full">
        <h1 className="text-xl font-bold">{product?.name}</h1>
        <div className="flex gap-2">
          <h3>₹{product?.price}</h3>
          <p className="flex items-center gap-1">
            <img
              className="w-5"
              src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png"
              alt="rating"
            />
            {product?.rating}
          </p>
        </div>
        <div className="w-fit" onClick={() => handleAddToCart(product)}>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
