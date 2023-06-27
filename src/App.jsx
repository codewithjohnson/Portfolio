import MainLayout from "./layouts/mainLayout";
import About from "./components/About/About";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </MainLayout>
    </>
  );
};

export default App;
