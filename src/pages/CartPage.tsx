import { NavLink } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useStore } from "../stores/Store";
import { observer } from "mobx-react-lite";

const CartPage = () => {
  const { cartStore } = useStore();
  if (cartStore.products.length > 0) {
    return (
      <div className="flex flex-col justify-center gap-5 md:flex-row">
        <div>
          {cartStore.products.map((product) => (
            <div className="flex items-center justify-around border-b-[1px] border-gray-200 md:w-[536px]">
              <div>
                <img src={product.image} alt="" />
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="font-bold md:w-[193px]">{product.title}</h1>
                </div>
                <div className="flex items-center gap-3 font-bold">
                  <div className="flex items-center gap-3">
                    <button>
                      <RiSubtractFill />
                    </button>
                    <input
                      className="flex h-9 w-10 rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="number"
                      value={product.quantity}
                    />
                    <button>
                      <IoAddOutline />
                    </button>
                  </div>
                  <div>
                    <h1>$ {product.currentPrice}</h1>
                  </div>
                  <button
                    className="ms-3"
                    onClick={() => cartStore.removeProduct(product.id)}
                  >
                    <IoMdClose size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-[1px] border-gray-200 p-5 md:w-[536px]">
          <h1 className="font-bold">Order Summary</h1>
          <form className="my-5">
            <label htmlFor="PromoCode">Discount Code / Promo Code</label>
            <input
              className="mb-5 flex h-12 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              name="PromoCode"
              placeholder="Code"
            />
            <label htmlFor="bonousCard">Your bonous card number</label>
            <input
              className="flex h-12 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              name="bonousCard"
              placeholder="Enter card number"
            />
            <div className="mt-5 flex flex-col gap-y-4">
              <div className="flex justify-between">
                <h1 className="font-bold">Sub Total</h1>
                <h1 className="font-bold">$ {cartStore.TotalPrice}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="">Estimated Tax</h1>
                <h1 className="font-bold">$ 0</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="">Estimated Shipping & Handling</h1>
                <h1 className="font-bold">$ 0</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold">Total</h1>
                <h1 className="font-bold">$ {cartStore.TotalPrice}</h1>
              </div>
            </div>
            <button
              className="mt-5 w-full rounded-lg bg-black py-2 text-white"
              type="submit"
            >
              Checkout
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="my-20 flex w-full flex-col items-center">
      <h1 className="text-2xl">No Items in Cart</h1>
      <NavLink
        to="/"
        className="mt-5 w-52 rounded-lg bg-black py-2 text-center text-white"
      >
        Go to home
      </NavLink>
    </div>
  );
};

export default observer(CartPage);
