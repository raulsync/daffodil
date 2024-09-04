import HeroSection from './components/HeroSection';
import HighlightsPage from './components/HighlightsPage';
import IndustryExpertise from './components/IndustriesExpertise';
import MissionPage from './components/MissionPage';
import NavBar from './components/NavBar';
import RecognitionSection from './components/RecognitionSection';
import ServicePage from './components/ServicePage';

function App() {
  return (
    <div className="app">
      <NavBar />
      <HeroSection />
      <MissionPage />
      <ServicePage />
      <HighlightsPage />
      <RecognitionSection />
      <IndustryExpertise />
    </div>
  );
}

export default App;
