import React from 'react';
import '../styles/components/ProductCard.css';

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
      <div className="img-box">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="text-box">
        <h6>MATIE STUDIO</h6>
        <h3>{product.name}</h3>
        <span>{product.description}</span>
        <div className="price-box">
          <p>{product.originPrice}</p>
          <p>{product.discountPrice}</p>
        </div>
        <button>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductCard