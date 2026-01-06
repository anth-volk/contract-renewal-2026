import { Slideshow } from "./components/Slideshow";
import {
  TitleSlide,
  ContributionOverviewSlide,
  SpecificAchievementsSlide,
  GrowthTrajectorySlide,
  ReflectionSlide,
  FeedbackSlide,
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
      <ReflectionSlide />
      <FeedbackSlide />
      <TheAskSlide />
      <ThankYouSlide />
    </Slideshow>
  );
}

export default App;
