import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../stores/Store";
import { observer } from "mobx-react-lite";
const Navigation = () => {
  const { cartStore } = useStore();
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="font-roboto flex w-full items-center justify-between gap-10 px-5 py-4 md:justify-center md:px-0">
        <div className="text-lg font-bold">
          <Link to="/">TechTown</Link>
        </div>
        <div>
          <input
            className="hidden rounded-md bg-slate-100 px-4 py-2 md:block"
            type="text"
            placeholder="search"
          />
        </div>
        <ul className="text-md flex items-center gap-10">
          <li className="hidden md:block">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="wishlist">
              {" "}
              <FaRegHeart />
            </NavLink>
          </li>
          <li className="relative">
            <NavLink to="cart">
              <IoCartOutline />
            </NavLink>
            {cartStore.TotalItems > 0 && (
              <div className="absolute right-[-6px] top-[-6px] rounded-full bg-red-500 p-1 text-[0.2em] text-white">
                {cartStore.TotalItems}
              </div>
            )}
          </li>
          <li>
            <GoPerson />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default observer(Navigation);
