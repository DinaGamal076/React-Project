import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsList from "../../../product";

function SearchDropdown() {
  const [allProducts] = useState(productsList);
  const [products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  function handleSearch(e) {
    const value = e.target.value.toLowerCase();
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setProducts(filtered);
    setShowDropdown(value.length > 0);
  }

  const handleProductClick = (id) => {
    setShowDropdown(false);
    navigate(`/product/${id}`);
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle hidden"
      ></div>

      {showDropdown && (
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 min-w-50 z-10 mt-13 w-full sm:w-80 md:w-96 shadow"
        >
          <div className="card-body h-96 overflow-y-auto">
            {products.length === 0 ? (
              <span className="text-center text-sm text-gray-400">
                No results found
              </span>
            ) : (
              products.map((product) => (
                <div
                  className="flex justify-between p-2 gap-3 cursor-pointer hover:bg-gray-500"
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="flex flex-col justify-between basis-80">
                    <h6 className="text-sm font-medium">{product.title}</h6>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <input
        type="text"
        placeholder="Search products"
        className="input input-bordered w-full sm:w-64 md:w-80 right-0"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchDropdown;
