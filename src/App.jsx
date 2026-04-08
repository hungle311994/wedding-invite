import "./App.css";
import BackToTop from "./components/BackToTop/BackToTop";
import DressCode from "./components/DressCode/DressCode";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Location from "./components/Location/Location";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Story from "./components/Story/Story";
import Timeline from "./components/Timeline/Timeline";

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="wedding-invite">
      <Hero onScrollToStory={() => scrollToSection("story")} />
      <Story />
      <Location />
      <DressCode />
      <Timeline />
      <Footer />
      <div className="floating-controls">
        <BackToTop />
        <MusicPlayer />
      </div>
    </div>
  );
};

export default App;
