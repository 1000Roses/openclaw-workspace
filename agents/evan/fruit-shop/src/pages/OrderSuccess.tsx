import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import './OrderSuccess.css';

export function OrderSuccessPage() {
  const { id } = useParams();

  return (
    <div className="order-success">
      <div className="success-icon">✅</div>
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for your order.</p>
      <p className="order-id">Order ID: <strong>{id}</strong></p>
      <p>We'll send you a confirmation email shortly.</p>
      <div className="success-actions">
        <Link to="/shop">
          <Button>Continue Shopping</Button>
        </Link>
        <Link to="/orders">
          <Button variant="outline">View Orders</Button>
        </Link>
      </div>
    </div>
  );
}
