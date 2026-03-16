import { useProductBanner } from "../contexts/productBanner.context";
import { useEffect, useState } from "react";

export const useProductBanner = () => {
    const { collectonBanner, loading, error } = useProductBanner(useProductBanner);
}
