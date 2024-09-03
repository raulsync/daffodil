import HeroSection from './components/herosection/HeroSection';
import MissionPage from './components/missionPage/MissionPage';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <>
      <div className="app h-[100vh]">
        <NavBar />
        <HeroSection />
        <MissionPage />
      </div>
    </>
  );
}

export default App;
