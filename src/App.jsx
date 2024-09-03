import HeroSection from './components/HeroSection';
import HighlightsPage from './components/HighlightsPage';
import MissionPage from './components/MissionPage';
import NavBar from './components/NavBar';
import ServicePage from './components/ServicePage';

function App() {
  return (
    <div className="app">
      <NavBar />
      <HeroSection />
      <MissionPage />
      <ServicePage />
      <HighlightsPage />
    </div>
  );
}

export default App;
