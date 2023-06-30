import { useState, useEffect } from "react";
import MainLayout from "./layouts/mainLayout";
import About from "./components/About/About";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import OnLoad from "./components/loaders/OnLoad";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLandingPageContent = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchLandingPageContent();
  }, []);
  return (
    <div className="relative overflow-hidden">
      {isLoading ? (
        <OnLoad isLoading={isLoading} />
      ) : (
        <MainLayout>
          <Hero />
          <About />

          <Projects />
          <Contact />
        </MainLayout>
      )}
    </div>
  );
};

export default App;
