import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import './Checkout.css';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const [form, setForm] = useState({ name: user?.name || '', address: '', city: '', phone: '' });

  const shipping = total >= 100000 ? 0 : 20000;
  const finalTotal = total + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock checkout - in real app would call API
    const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    clearCart();
    navigate(`/order/${orderId}`);
  };

  if (items.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <Link to="/shop">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      
      <form onSubmit={handleSubmit} className="checkout-grid">
        <div className="checkout-form">
          <h3>Shipping Information</h3>
          <Input
            label="Full Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            label="Address"
            value={form.address}
            onChange={e => setForm({ ...form, address: e.target.value })}
            required
          />
          <Input
            label="City"
            value={form.city}
            onChange={e => setForm({ ...form, city: e.target.value })}
            required
          />
          <Input
            label="Phone"
            type="tel"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            required
          />
          
          <h3 style={{ marginTop: '24px' }}>Payment</h3>
          <p className="payment-note">💳 Cash on Delivery (COD)</p>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          {items.map(item => (
            <div key={item.product.id} className="summary-item">
              <span>{item.product.name} × {item.quantity}</span>
              <span>{(item.product.price * item.quantity).toLocaleString('vi-VN')} ₫</span>
            </div>
          ))}
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{total.toLocaleString('vi-VN')} ₫</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : shipping.toLocaleString('vi-VN')} ₫</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>{finalTotal.toLocaleString('vi-VN')} ₫</span>
          </div>
          <Button type="submit" size="lg" style={{ width: '100%' }}>
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
}
