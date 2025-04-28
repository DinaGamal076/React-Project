import BarChart from "../Components/BarChart.jsx";
import PieChart from "../Components/PieChart.jsx";
import LineChart from "../components/LineChart.jsx";
import DoughnutChart from "../components/DoughnutChart.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
function Dashboard({ cart, setCart, wishlist, setWishlist }) {
  return (
    <>
      <Navbar
        cart={cart}
        setCart={setCart}
        wishlist={wishlist}
        setWishlist={setWishlist}
      ></Navbar>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Dashboard Overview
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-2xl p-4">
            <BarChart />
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-4">
            <PieChart />
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-4">
            <LineChart />
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-4">
            <DoughnutChart />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
