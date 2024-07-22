import { observer } from "mobx-react-lite";
import ProductCard from "../components/ProductCard";
import { useStore } from "../stores/Store";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlistStore } = useStore();
  if (wishlistStore.products.length >= 1) {
    return (
      <div className="flex gap-4 px-5">
        {wishlistStore.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex w-full flex-col items-center gap-5 py-10">
        <h1 className="text-2xl">No Items in wishlist</h1>
        <Link to="/" className="rounded-lg bg-black px-10 py-2 text-white">
          Home
        </Link>
      </div>
    );
  }
};

export default observer(Wishlist);
