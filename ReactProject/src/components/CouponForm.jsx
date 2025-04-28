import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const CouponForm = ({ onApplyCoupon, onRemoveCoupon, currentCode }) => {
    const [couponCode, setCouponCode] = useState("");
    const [isApplied, setIsApplied] = useState(false);

    useEffect(() => {
        if (currentCode) {
            setCouponCode(currentCode);
            setIsApplied(true);
        }
    }, [currentCode]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (couponCode.trim()) {
            onApplyCoupon(couponCode);
            setIsApplied(true);
        }
    };

    const handleRemove = () => {
        setCouponCode("");
        setIsApplied(false);
        onRemoveCoupon();
    };

    return (
        <div className="mb-4">
            <label className="block mb-2 font-medium">Discount Code</label>
            {isApplied ? (
                <div className="flex items-center justify-between bg-green-50 p-3 rounded">
                    <span className="text-green-700">
                        Applied: <strong>{couponCode}</strong>
                    </span>
                    <button
                        type="button"
                        onClick={handleRemove}
                        className="text-red-500 hover:text-red-700"
                    >
                        Remove
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="text"
                        className="input input-bordered flex-1"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn btn-sm bg-[#c10353] hover:bg-[#001937] text-white whitespace-nowrap"
                    >
                        Apply
                    </button>
                </form>
            )}
        </div>
    );
};

CouponForm.propTypes = {
    onApplyCoupon: PropTypes.func.isRequired,
    onRemoveCoupon: PropTypes.func.isRequired,
    currentCode: PropTypes.string
};

export default CouponForm;