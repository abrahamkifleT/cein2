import { createContext, useState, useEffect } from "react";
import { products } from "../data/product.js"

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       setProduct(products);
       setLoading(false);
    }, []);

    const value = {
        product,
        loading,
        error
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};