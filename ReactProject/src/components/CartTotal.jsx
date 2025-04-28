import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CartTotals = ({
    subTotal,
    tax,
    discount,
    total,
    cart,
    discountCode,
    onRemoveCoupon
}) => {
    return (
        <div className="border rounded-md p-4 bg-white">
            <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span>Sub-total:</span>
                    <span>${subTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>

                {discount > 0 && discountCode && (
                    <div className="flex justify-between items-center text-green-600">
                        <div className="flex items-center">
                            <span>Discount ({discountCode}):</span>
                            <button
                                onClick={onRemoveCoupon}
                                className="ml-2 text-red-500 hover:text-red-700 text-sm"
                                aria-label="Remove coupon"
                            >
                                ✕
                            </button>
                        </div>
                        <span>-${discount.toFixed(2)}</span>
                    </div>
                )}

                <div className="flex justify-between">
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                </div>

                <hr />

                <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <Link
                to={cart.length > 0 ? "/checkout" : "#"}
                className={`btn btn-block mt-4 ${cart.length > 0
                        ? 'bg-[#E0045D] hover:bg-[#c10353]'
                        : 'bg-gray-400 cursor-not-allowed'
                    } text-white`}
                onClick={e => cart.length === 0 && e.preventDefault()}
            >
                Proceed to Checkout (${total.toFixed(2)})
            </Link>
        </div>
    );
};

CartTotals.propTypes = {
    subTotal: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    cart: PropTypes.array.isRequired,
    discountCode: PropTypes.string,
    onRemoveCoupon: PropTypes.func
};

export default CartTotals;