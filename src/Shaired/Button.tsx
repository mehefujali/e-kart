import { ReactNode } from "react";

type Props  ={
  children:ReactNode ,
  outline?:boolean

}

const Button = ({children , outline}:Props) => {
      return (
            <div>
                  <button className={` px-6 py-2 rounded cursor-pointer active:scale-95 duration-75 ${outline?" border-2 text-amber-400":"bg-amber-400 text-white "} `}>{children}</button>
            </div>
      );
};

export default Button;