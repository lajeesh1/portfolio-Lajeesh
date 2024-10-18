import styles from "./App.module.css";
import Skill from "./components/skill/Skill";
import Contact from "./components/contact/Contact";

import Experience from "./components/experience/Projects";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/experience/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Skill />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
