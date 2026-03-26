import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/common/Button';
import './ProductDetail.css';

export function ProductDetailPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <Link to="/shop" className="back-link">← Back to Shop</Link>
      
      <div className="product-detail-grid">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-detail-info">
          <span className="product-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price.toLocaleString('vi-VN')} ₫</p>
          
          <div className="product-actions">
            <Button size="lg" onClick={() => addItem(product)}>
              Add to Cart
            </Button>
          </div>
          
          <div className="product-meta">
            <p>✓ Fresh from farm</p>
            <p>✓ Free shipping over 100k</p>
            <p>✓ Same day delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
