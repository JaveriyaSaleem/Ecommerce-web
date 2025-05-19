import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

function CartIcon({ itemCount }) {
  return (
    <Link to="/cart" className="relative inline-block">
      <FiShoppingCart className="text-[24px] text-black" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-semibold rounded-full px-1">
          {itemCount}
        </span>
      )}
    </Link>
  );
}

export default CartIcon;
