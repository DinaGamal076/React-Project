import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CheckoutSuccess = ({ cart = [], setCart = () => { }, wishlist , setWishlist  }) => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} />
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
                <CheckCircle className="text-green-500 w-16 h-16 mb-6" />
                <h2 className="text-2xl font-semibold mb-2">Your order was successfully placed</h2>
                <p className="text-gray-600 max-w-md mb-6">
                    Thank you for your purchase! We've received your order and it's being processed.
                </p>
                <div className="flex gap-4 flex-wrap justify-center">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="border border-[#E0045D] text-[#E0045D] px-5 py-2 rounded transition"
                    >
                        GO TO DASHBOARD
                    </button>
                    <button
                        onClick={() => navigate('/orders')}
                        className="bg-[#E0045D] hover:bg-[#c10353] text-white px-5 py-2 rounded transition"
                    >
                        VIEW ORDER
                    </button>
                    <button
                        onClick={() => navigate('/shop')}
                        className="border border-gray-300 text-gray-700 px-5 py-2 rounded hover:bg-gray-50 transition"
                    >
                        CONTINUE SHOPPING
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CheckoutSuccess;
