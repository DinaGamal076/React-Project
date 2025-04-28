import { Link } from "react-router-dom";

function GoShopping() {
  return (
    <Link to="/shop">
      <div className="relative w-full h-[300px] rounded-3xl overflow-hidden text-center cursor-pointer bg-orange-700 transition-transform duration-300 hover:scale-105">
        <h2 className="relative z-10 text-gray-100 font-bold text-4xl drop-shadow-md pt-10">
          Start Shopping
        </h2>

        <img
          src="https://www.pngplay.com/wp-content/uploads/7/Shopping-Cart-Transparent-Background.png"
          alt="Shopping Cart"
        />
      </div>
    </Link>
  );
}

export default GoShopping;
