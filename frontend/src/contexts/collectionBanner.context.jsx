import { createContext, useState, useEffect } from "react";
import { collections } from "../data/collectionBanner.js"

export const CollectionBannerContext = createContext();

export const CollectionBannerProvider = ({ children }) => {
    const [collectionBanner, setCollectionBanner] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       // Using the imported 'collections' data
       setCollectionBanner(collections);
       setLoading(false);
    }, []);

    const value = {
        collectionBanner,
        loading,
        error
    }

    return (
        <CollectionBannerContext.Provider value={value}>
            {children}
        </CollectionBannerContext.Provider>
    );
};