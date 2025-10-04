import { fetchLandmarks, fetchLandmarksHero } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoryList from "./CategoryList";
import EmtryList from "./EmtryList";

const LandmarkContainer = async ({
  search,
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({
    search,
    category,
  });
  const landmarksHero: LandmarkCardProps[] = await fetchLandmarksHero();
  // if(landmarks.length ===0){
  //   return <EmtryList/>
  // }
  // console.log(landmarks)

  return (
    <div>
      <Hero landmarks={landmarksHero} />
      <CategoryList search={search} category={category} />
      {
        landmarks.length ===0
        ? <EmtryList/>
        : <LandmarkList landmarks={landmarks} />
      }
    </div>
  );
};
export default LandmarkContainer;
