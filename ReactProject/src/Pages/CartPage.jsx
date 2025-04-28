import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";
import CartTotals from "../components/CartTotal.jsx";
import CouponForm from "../components/CouponForm.jsx";
import CartActions from "../components/CartActions.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function CartPage({ cart, setCart ,wishlist, setWishlist  }) {
    const [discount, setDiscount] = useState(0);
    const [discountCode, setDiscountCode] = useState('');

    const handleApplyCoupon = (code) => {
        const validCoupons = {
            'SAVE10': 10,
            'FREESHIP': 5,
            'WELCOME20': 20,
            'DISCOUNT10': 10
        };

        if (code === "") {
            setDiscount(0);
            setDiscountCode('');
            return;
        }

        if (validCoupons[code]) {
            setDiscount(validCoupons[code]);
            setDiscountCode(code);
        } else {
            alert('Invalid coupon code');
        }
    };

    const handleQuantityChange = (id, amount) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        counter: Math.max(1, item.counter + amount),
                        finalPrice: (item.offerPrice || item.price) * (item.counter + amount),
                    }
                    : item
            )
        );
    };

    const handleRemoveCoupon = () => {
        setDiscount(0);
        setDiscountCode('');
    };

    const handleRemove = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const subTotal = cart.reduce(
        (sum, item) => sum + (item.finalPrice || (item.offerPrice || item.price) * item.counter),
        0
    );

    const discountAmount = (subTotal * discount) / 100;
    const tax = (subTotal - discountAmount) * 0.2;
    const total = subTotal - discountAmount + tax;

    return (
        <>
            <Navbar cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist}  />
            <div className="flex flex-col lg:flex-row justify-around mt-10 mb-20 px-4 text-[#001937]">
    <div className="w-full lg:w-2/3">
        <h2 className="text-xl font-bold mb-4 text-[#001937]">Shopping Cart</h2>
        <div className="border border-[#E0045D] rounded-md p-4 bg-white shadow-md">
            {cart.length === 0 ? (
                <div className="text-center py-8">
                    <p className="mb-4 text-[#001937]">Your cart is empty.</p>
                    <Link
                        to="/shop"
                        className="px-6 py-2 rounded-md bg-[#E0045D] text-white font-semibold hover:bg-[#c10353] transition"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                cart.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemove}
                    />
                ))
            )}
        </div>
    </div>

    <div className="w-full lg:w-1/4 mt-10 lg:mt-0 space-y-4">
        <div className="bg-white border border-[#E0045D] rounded-md p-4 shadow-md">
            <CouponForm
                onApplyCoupon={handleApplyCoupon}
                onRemoveCoupon={handleRemoveCoupon}
                currentCode={discountCode}
            />
        </div>

        <div className="bg-white border border-[#E0045D] rounded-md p-4 shadow-md">
            <CartTotals
                subTotal={subTotal}
                tax={tax}
                discount={discountAmount}
                total={total}
                cart={cart}
                discountCode={discountCode}
                onRemoveCoupon={handleRemoveCoupon}
            />
        </div>
    </div>
</div>

            <Footer />
        </>
    );
}

export default CartPage;
