import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
const Navigation = () => {
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
          {/* <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li> */}
          <li>
            <NavLink to="wishlist">
              {" "}
              <FaRegHeart />
            </NavLink>
          </li>
          <li>
            <NavLink to="cart">
              <IoCartOutline />
            </NavLink>
          </li>
          <li>
            <GoPerson />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
