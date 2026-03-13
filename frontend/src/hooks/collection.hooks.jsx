import { CollectionContext } from "../contexts/collection.context";
import { useContext } from "react";

export const useCollection = () => {
    const { collection, loading, error } = useContext(CollectionContext);
    return { collection, loading, error };
}
