import { useAuth } from '../../context/AuthContext';
import { products } from '../../data/products';
import { Button } from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

export function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user?.isAdmin) {
    navigate('/');
    return null;
  }

  const totalProducts = products.length;
  const totalRevenue = 1250000;
  const totalOrders = 47;

  return (
    <div className="admin">
      <h1>Admin Dashboard</h1>
      <div className="admin-stats">
        <div className="stat-card">
          <span className="stat-value">{totalProducts}</span>
          <span className="stat-label">Products</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{totalOrders}</span>
          <span className="stat-label">Orders</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{totalRevenue.toLocaleString('vi-VN')} ₫</span>
          <span className="stat-label">Revenue</span>
        </div>
      </div>
    </div>
  );
}

export function AdminProducts() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user?.isAdmin) {
    navigate('/');
    return null;
  }

  return (
    <div className="admin">
      <div className="admin-header">
        <h1>Products</h1>
        <Button>Add Product</Button>
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.price.toLocaleString('vi-VN')} ₫</td>
              <td>
                <Button size="sm" variant="outline">Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AdminOrders() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user?.isAdmin) {
    navigate('/');
    return null;
  }

  const mockOrders = [
    { id: 'ORD-001', customer: 'john@email.com', total: 150000, status: 'pending' },
    { id: 'ORD-002', customer: 'jane@email.com', total: 85000, status: 'processing' },
  ];

  return (
    <div className="admin">
      <h1>Orders</h1>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.total.toLocaleString('vi-VN')} ₫</td>
              <td>{o.status}</td>
              <td>
                <Button size="sm" variant="outline">View</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
