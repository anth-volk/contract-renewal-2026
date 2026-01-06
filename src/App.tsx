import { Slideshow } from "./components/Slideshow";
import {
  TitleSlide,
  ContributionOverviewSlide,
  SpecificAchievementsSlide,
  GrowthTrajectorySlide,
  TheAskSlide,
  ThankYouSlide,
} from "./components/Slides";

function App() {
  return (
    <Slideshow>
      <TitleSlide />
      <ContributionOverviewSlide />
      <SpecificAchievementsSlide />
      <GrowthTrajectorySlide />
      <TheAskSlide />
      <ThankYouSlide />
    </Slideshow>
  );
}

export default App;
