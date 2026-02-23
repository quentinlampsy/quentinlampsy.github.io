import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Publications from './components/Publications';
import Resume from './components/Resume';
import SocialLinks from './components/SocialLinks';
import PhotoGallery from './components/PhotoGallery';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <Education />
        <Publications />
        <Resume />
        <SocialLinks />
        <PhotoGallery />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}

