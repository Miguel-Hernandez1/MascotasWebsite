import Home from "./components/pages/home-page/Home";
import AboutUs from "./components/pages/about-us-page/AboutUs";
import Roadmap from "./components/pages/roadmap-page/Roadmap";
import Team from "./components/pages/team-page/Team";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Roadmap />
      <Team />
    </div>
  );
}
// links
export default App;
