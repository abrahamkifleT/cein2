import { useContext } from "react";
import { CollectionBannerContext } from "../contexts/collectionBanner.context.jsx";

export const useCollectionBanner = () => {
    return useContext(CollectionBannerContext);
}
