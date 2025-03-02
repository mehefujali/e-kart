import { useEffect, useState } from "react";

type products = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  inStock: boolean;
};

const Products = () => {
  const [products, setProducts] = useState<products[]>([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <div className=" container  mx-auto w-11/12 xl:w-full my-14">
        <div>
          <h1 className=" text-2xl text-center ">Products</h1>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Products;
