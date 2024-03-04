import styles from "./App.module.css";
import Skill from "./components/skill/Skill";
import Contact from "./components/contact/Contact";

import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Skill />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
