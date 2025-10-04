import { fetchFavorites } from "@/actions/actions"
import EmtryList from "@/components/home/EmtryList"
import LandmarkList from "@/components/home/LandmarkList"

const FavoritesPage = async() => {
  const favorites = await fetchFavorites()
  if(favorites.length === 0){
    return <EmtryList heading="Not found" btnText="Back home"/>
  }
  return <LandmarkList landmarks={favorites}/>
}
export default FavoritesPage