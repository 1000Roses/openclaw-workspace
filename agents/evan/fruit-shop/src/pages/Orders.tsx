import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';
import './Orders.css';

export function OrdersPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  // Mock orders data
  const orders = [
    { id: 'ORD-ABC123', date: '2026-03-20', total: 150000, status: 'delivered' },
    { id: 'ORD-DEF456', date: '2026-03-18', total: 85000, status: 'shipped' },
  ];

  return (
    <div className="orders">
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <span className="order-id">#{order.id}</span>
                <span className={`order-status status-${order.status}`}>{order.status}</span>
              </div>
              <div className="order-details">
                <span>Date: {order.date}</span>
                <span className="order-total">{order.total.toLocaleString('vi-VN')} ₫</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/shop">
        <Button style={{ marginTop: '24px' }}>Shop Now</Button>
      </Link>
    </div>
  );
}
