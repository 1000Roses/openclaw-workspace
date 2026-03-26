import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

export function Header() {
  const { itemCount } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🍎 FruitShop
        </Link>
        <nav className="nav">
          <Link to="/shop">Shop</Link>
          {user && <Link to="/orders">My Orders</Link>}
          {user?.isAdmin && <Link to="/admin">Admin</Link>}
        </nav>
        <div className="header-actions">
          {user ? (
            <>
              <span className="user-name">Hi, {user.name}</span>
              <button onClick={logout} className="logout-btn">Logout</button>
            </>
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}
          <Link to="/cart" className="cart-link">
            🛒 {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
