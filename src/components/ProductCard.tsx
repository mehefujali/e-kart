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
  return (
    <div className=" bg-white w-full h-full justify-between p-6 rounded flex flex-col gap-2 items-center text-start">
      <img className=" w-64 object-contain h-64" src={product.image} alt="" />
      <div className=" flex flex-col gap-2 justify-between  w-full ">
        <h1 className=" text-xl font-bold">{product?.name}</h1>
        <div className=" flex gap-2">
          <h3>₹{product?.price}</h3>
          <p className=" flex items-center gap-1 ">
            {" "}
            <img
              className=" w-5"
              src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png"
              alt=""
            />
            {product?.rating}
          </p>
        </div>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
