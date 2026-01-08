import { Slideshow } from "./components/Slideshow";
import {
  TitleSlide,
  ReflectOn2025Slide,
  ContributionOverviewSlide,
  SpecificAchievementsSlide,
  LearningsSlide,
  MovingTo2026Slide,
  OrgNeedsSlide,
  GrowthTrajectorySlide,
  TheAskSlide,
  ThankYouSlide,
} from "./components/Slides";

function App() {
  return (
    <Slideshow>
      <TitleSlide />
      <ReflectOn2025Slide />
      <ContributionOverviewSlide />
      <SpecificAchievementsSlide />
      <LearningsSlide />
      <MovingTo2026Slide />
      <OrgNeedsSlide />
      <GrowthTrajectorySlide />
      <TheAskSlide />
      <ThankYouSlide />
    </Slideshow>
  );
}

export default App;
