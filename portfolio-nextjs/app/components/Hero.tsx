'use client';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Scrolling Background with Family Photo */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-indigo-700/80 z-10"></div>
        
        {/* Scrolling Background */}
        <div className="absolute inset-0 flex animate-scroll-bg">
          <div
            className="min-w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/pictures/Family Photo.jpg')",
            }}
          ></div>
          <div
            className="min-w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/pictures/Family Photo.jpg')",
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 animate-fade-in-up">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-white/30">
            <img
              src="/pictures/selfie-short.jpg"
              alt="Quentin Lam"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
          Tak Kwan Quentin Lam
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light drop-shadow-lg">
          Psychology Student | Programmer | Researcher
        </p>
        <button
          onClick={() => scrollToSection('education')}
          className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
        >
          View My Work
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
