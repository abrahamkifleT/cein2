import { createContext, useState, useEffect } from "react";
import { collections } from "../data/collection.js"

export const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
    const [collection, setCollection] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       setCollection(collections);
       setLoading(false);
    }, []);

    const value = {
        collection,
        loading,
        error
    }

    return (
        <CollectionContext.Provider value={value}>
            {children}
        </CollectionContext.Provider>
    );
};