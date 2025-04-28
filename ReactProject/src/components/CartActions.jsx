import React from "react";
import { Link } from "react-router-dom";

const CartActions = () => {
    return (
        <div className="flex justify-between mt-6">
            <Link
                to="/shop"
                className="btn btn-outline btn-sm border-gray-400"
            >
                Return to Shop
            </Link>
        </div>
    );
};

export default CartActions;
