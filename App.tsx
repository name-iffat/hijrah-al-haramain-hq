import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import SectionDivider from './components/SectionDivider';
import Home from './pages/Home';
import LatestProgram from './components/LatestProgram';
import Packages from './pages/Packages';
import About from './pages/About';
import Process from './pages/Process';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-sand-50 text-kaabah selection:bg-gold-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {/* Home Section */}
        <section id="home">
          <Home />
        </section>

        <SectionDivider />

        {/* Packages Section */}
        <section id="packages">
          <Packages />
        </section>

        <SectionDivider />

        {/* Process Section */}
        <section id="process">
          <Process />
        </section>

        <SectionDivider />

        {/* Gallery Section */}
        <section id="gallery">
          <Gallery />
        </section>

        <SectionDivider />

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        <SectionDivider />

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        <SectionDivider />

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default App;