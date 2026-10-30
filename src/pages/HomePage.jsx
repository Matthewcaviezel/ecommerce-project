
import './HomePage.css';
import { Header } from '../components/Header';
import { products } from '../data/products';

export function HomePage() {
  return (
    <>
      <Header />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-container">

              <div className="product-image-container">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="product-name limit-text-to-2-lines">
                {product.name}
              </div>

              <div className="product-rating-container">
                <img
                  className="product-rating-stars"
                  src={`/images/ratings/rating-${product.rating.stars * 10}.png`}
                  alt={`${product.rating.stars} stars`}
                />

                <div className="product-rating-count link-primary">
                  {product.rating.count}
                </div>
              </div>

              <div className="product-price">
                ${(product.priceCents / 100).toFixed(2)}
              </div>

              <button className="add-to-cart-button button-primary">
                Add to Cart
              </button>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
