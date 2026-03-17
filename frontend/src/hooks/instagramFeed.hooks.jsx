import { useContext } from "react";
import { InstagramFeedContext } from "../contexts/instagramFeed.context";

export const useInstagramFeed = () => {
    const posts = useContext(InstagramFeedContext);
    return { posts };
};
