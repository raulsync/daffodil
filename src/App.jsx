import HeroSection from './components/herosection/HeroSection';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <>
      <div className="app h-[100vh]">
        <NavBar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
