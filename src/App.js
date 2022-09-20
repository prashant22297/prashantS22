import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import About from "./PortfolioContainer/AboutMe/About";
import Resume from "./PortfolioContainer/Resume/Resume";
import Contact from "./PortfolioContainer/ContactMe/Contact";
function App() {
  return (
    <div className="App">
      <Profile />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
