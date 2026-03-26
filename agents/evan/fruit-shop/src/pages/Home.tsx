import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/common/Button';
import './Home.css';

export function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Fresh Fruits, Delivered Daily 🍎</h1>
          <p>Shop the finest fruits from local farms, straight to your door.</p>
          <Link to="/shop">
            <Button size="lg">Shop Now</Button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600" alt="Fresh fruits" />
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {['Apples', 'Citrus', 'Tropical', 'Berries'].map(cat => (
            <Link to={`/shop?category=${cat}`} key={cat} className="category-card">
              <span className="category-emoji">
                {cat === 'Apples' ? '🍎' : cat === 'Citrus' ? '🍊' : cat === 'Tropical' ? '🥭' : '🍇'}
              </span>
              <span>{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured">
        <h2>Featured Fruits</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="featured-cta">
          <Link to="/shop">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
