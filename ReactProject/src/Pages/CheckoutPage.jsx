import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = ({ cart, setCart ,wishlist, setWishlist }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        country: '',
        state: '',
        city: '',
        zipCode: '',
        email: '',
        phone: '',
        paymentMethod: 'card',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });
    const [, setOrderPlaced] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrderPlaced(true);
        setCart([]);
        navigate('/checkout/success');
    };

    const subtotal = cart.reduce((sum, item) => sum + (item.finalPrice * item.counter), 0);
    const tax = subtotal * 0.1;
    const shipping = subtotal > 1000 ? 0 : 5.99;
    const total = subtotal + tax + shipping;

    return (
        <>
            <Navbar cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist}/>
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-semibold">Checkout</h2>
                        <form id="checkout-form" onSubmit={handleSubmit}>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-medium mb-4">Billing Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="border p-3 rounded"
                                        placeholder="First name"
                                        required
                                    />
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="border p-3 rounded"
                                        placeholder="Last name"
                                        required
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border p-3 rounded col-span-2"
                                        placeholder="Email"
                                        required
                                    />
                                    <input
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="border p-3 rounded"
                                        placeholder="Phone Number"
                                        required
                                    />
                                    <input
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="border p-3 rounded col-span-2"
                                        placeholder="Street Address"
                                        required
                                    />
                                    <input
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="border p-3 rounded"
                                        placeholder="City"
                                        required
                                    />
                                    <input
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="border p-3 rounded"
                                        placeholder="State/Region"
                                        required
                                    />
                                    <input
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        className="border p-3 rounded"
                                        placeholder="Zip Code"
                                        required
                                    />
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="border p-3 rounded"
                                        required
                                    >
                                        <option value="">Select Country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="JR">Jordan</option>
                                    </select>
                                </div>
                            </div>

                            <div className="bg-white border rounded-lg p-6 shadow-sm">
                                <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                                <div className="space-y-4">
                                    {['card', 'paypal', 'cash'].map((method) => (
                                        <label key={method} className="flex items-start space-x-3 p-3 border rounded hover:border-[#E0045D]">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value={method}
                                                checked={formData.paymentMethod === method}
                                                onChange={handleChange}
                                                className="mt-1"
                                            />
                                            <div>
                                                <span className="font-medium">
                                                    {method === 'card' && 'Credit/Debit Card'}
                                                    {method === 'paypal' && 'PayPal'}
                                                    {method === 'cash' && 'Cash on Delivery'}
                                                </span>
                                                {method === 'card' && formData.paymentMethod === 'card' && (
                                                    <div className="mt-2 space-y-2">
                                                        <input
                                                            name="cardName"
                                                            value={formData.cardName}
                                                            onChange={handleChange}
                                                            className="border p-2 rounded w-full"
                                                            placeholder="Name on Card"
                                                            required
                                                        />
                                                        <input
                                                            name="cardNumber"
                                                            value={formData.cardNumber}
                                                            onChange={handleChange}
                                                            className="border p-2 rounded w-full"
                                                            placeholder="Card Number"
                                                            required
                                                        />
                                                        <div className="flex gap-2">
                                                            <input
                                                                name="expiry"
                                                                value={formData.expiry}
                                                                onChange={handleChange}
                                                                className="border p-2 rounded w-full"
                                                                placeholder="MM/YY"
                                                                required
                                                            />
                                                            <input
                                                                name="cvc"
                                                                value={formData.cvc}
                                                                onChange={handleChange}
                                                                className="border p-2 rounded w-full"
                                                                placeholder="CVC"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm h-fit sticky top-4">
                        <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                        <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between items-center border-b pb-2">
                                    <div>
                                        <p className="font-medium">{item.title}</p>
                                        <p className="text-sm text-gray-500">Qty: {item.counter}</p>
                                    </div>
                                    <p className="font-medium">${(item.finalPrice * item.counter).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-2 text-sm border-t pt-3">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax (10%)</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-lg border-t pt-2 mt-2">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            form="checkout-form"
                            className="bg-[#E0045D] hover:bg-[#c10353] text-white py-3 px-6 rounded-lg mt-6 w-full text-lg font-medium"
                        >
                            Place Order - ${total.toFixed(2)}
                        </button>
                        <div className="flex flex-col gap-2 mt-4">
                            <Link
                                to="/shop"
                                className="btn btn-outline btn-sm border-gray-400 w-full"
                            >
                                Return to Shop
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
