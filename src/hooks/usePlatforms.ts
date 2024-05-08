import useData from "./useData";
import platforms from "../data/platforms";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => ({ data: platforms, isLoading: false, error: false });

export default usePlatform;
