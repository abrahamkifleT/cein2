import React from 'react'
import { useProduct } from '../../../../hooks/product.hooks'
import './Product.css' // Import newly created CSS

const Product = () => {
    const { product, loading, error } = useProduct();
    return (
        <div className='product-container'>
            <div className='product-text'>
                <p>What to Wear Now</p>
            </div>

            <div className='product-image'>
                {
                    product.slice(0, 5).map((item) => {
                        return (
                            <div key={item._id} className='product-card'>
                                <img src={item.images[0].url} alt={item.images[0].altText} />
                                <div className='product-plus'>+</div>
                                <div className='product-item'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product