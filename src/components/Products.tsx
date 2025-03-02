import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

type Products = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  inStock: boolean;
};

const Products = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <div className=" container  mx-auto w-11/12 xl:w-full mt-14">
        <div>
          <h1 className=" text-2xl text-center ">Products</h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-9 gap-3 md:gap-4 lg:gap-6 xl:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
