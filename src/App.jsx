import MainLayout from "./layouts/mainLayout";
import About from "./components/About/About";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="relative">
      <MainLayout>
        <Hero />
        <About />
        {/* <Skills /> */}
        {/* <Projects /> */}
        <Contact />
      </MainLayout>
    </div>
  );
};

export default App;
