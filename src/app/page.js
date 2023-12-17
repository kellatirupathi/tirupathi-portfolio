"use client";
import Navbar from "./components/Navbar/Navbar";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Modal from './components/Modal/Modal'


export default function Home() {
  return (
    <main className="container-fluid p-0">
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
      <Education />
      <Projects  />
      <Contact />
      <Footer />
    </main>
  );
}
