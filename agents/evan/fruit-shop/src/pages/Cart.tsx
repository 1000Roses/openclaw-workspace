import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/common/Button';
import './Cart.css';

export function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Add some fruits to get started!</p>
        <Link to="/shop">
          <Button>Shop Now</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      
      <div className="cart-grid">
        <div className="cart-items">
          {items.map(item => (
            <div key={item.product.id} className="cart-item">
              <img src={item.product.image} alt={item.product.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.product.name}</h3>
                <p className="cart-item-price">{item.product.price.toLocaleString('vi-VN')} ₫</p>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
              </div>
              <p className="cart-item-total">
                {(item.product.price * item.quantity).toLocaleString('vi-VN')} ₫
              </p>
              <button onClick={() => removeItem(item.product.id)} className="remove-btn">×</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{total.toLocaleString('vi-VN')} ₫</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{total >= 100000 ? 'Free' : '20,000 ₫'}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>{(total + (total >= 100000 ? 0 : 20000)).toLocaleString('vi-VN')} ₫</span>
          </div>
          <Link to="/checkout">
            <Button size="lg" style={{ width: '100%' }}>Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
