import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';
import './App.css'


function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <AboutMe />
          <Projects />
          <Technologies />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;