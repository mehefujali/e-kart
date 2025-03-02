import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  outline?: boolean;
};

const Button = ({ children, outline }: Props) => {
  return (
    <div>
      <button
        className={`  rounded cursor-pointer active:scale-95 duration-75 ${
          outline ? " px-5 py-1.5  border-2 text-amber-400" : "bg-amber-400 px-6 py-2 text-white "
        } `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
