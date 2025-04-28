import { Link } from "react-router-dom";
import backgroundImage from "../assets/Offer.png";

function OffersAndShop() {
  return (
    <Link to="/offers">
      <div
        className="relative w-full h-[300px] rounded-3xl overflow-hidden text-center cursor-pointer transition-transform duration-300 hover:scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center -10%",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />

        <h2 className="relative z-10 text-gray-100 font-bold text-4xl drop-shadow-md pt-10">
          Offers
        </h2>
      </div>
    </Link>
  );
}

export default OffersAndShop;
