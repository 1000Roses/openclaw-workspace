import { Link } from 'react-router-dom';
import type { Product as ProductType } from '../../types';
import { Button } from '../common/Button';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: ProductType;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price.toLocaleString('vi-VN')} ₫</span>
          <Button size="sm" onClick={() => addItem(product)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
