import { ScrollRestoration } from "react-router-dom";
import { useCart } from "../../context/CartProvider";
import Button from "../../Shaired/Button";

const Cart = () => {
  const { cart,setCart } = useCart();
  const totalCost = cart.reduce((sum, item) => sum + item.price, 0);
  const handleRemvoeCart = (id:number)=>{
     const newCart =  cart.filter(product => product.id !== id )
     setCart(newCart)
  }
  return (
    <div>
      <ScrollRestoration />
      <div className="container mx-auto w-11/12 xl:w-full">
        <div>
          <div className=" flex items-center my-3 justify-between border-b-2 pb-5 border-amber-200">
            <h1 className=" text-2xl font-bold ">Cart</h1>{" "}
            <div className=" flex items-center  gap-2 ">
              <div className=" text-xl">Total cost : ₹{totalCost}</div>{" "}
              <Button>Puchase</Button>
            </div>
          </div>
          <div className=" border-2 border-gray-300 rounded-lg p-7 flex flex-col gap-3">
            {cart.map((product) => (
              <div
                key={product.id}
                className=" bg-white p-4 rounded-lg relative z-0"
              >
                <div className=" flex gap-2 items-center">
                  <img className=" w-52 h-52 object-contain" src={product.image} alt="" />
                  <div>
                    <h1 className=" text-xl font-bold">{product.name}</h1>
                    <h1>₹{product.price}</h1>
                    <p>Quantity:{product.quantity}</p>
                  </div>
                </div>
                <p className=" w-fit h-fit" onClick={()=>handleRemvoeCart(product.id)}>
                  <img
                    className=" w-8  absolute right-4 top-4 cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/9068/9068885.png"
                    alt=""
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
