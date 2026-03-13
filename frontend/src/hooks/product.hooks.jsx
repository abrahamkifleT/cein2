import { ProductContext } from "../contexts/product.context";
import { useContext } from "react";

export const useProduct = () => {
    const { product, loading, error } = useContext(ProductContext);
    return { product, loading, error };
}