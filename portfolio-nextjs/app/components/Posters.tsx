'use client';

import { useState, useRef, useCallback } from 'react';

export default function Posters() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const imgRef = useRef<HTMLImageElement>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setZoom(1);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setZoom(prev => {
      const delta = e.deltaY < 0 ? 0.15 : -0.15;
      return Math.min(Math.max(prev + delta, 0.5), 5);
    });
  }, []);

  const posters = [
    { src: '/pictures/ARWA 2026 poster.png', alt: 'ARWA 2026 Poster' },
    { src: '/pictures/CPC 2025 poster.png', alt: 'CPC 2025 Poster' },
    { src: '/pictures/SSSR 2024 poster.png', alt: 'SSSR 2024 Poster' },
  ];

  return (
    <>
      <section
        id="posters"
        className="animate-fade-in-up bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-700"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">🖼️</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Posters
          </h2>
        </div>
        <p className="text-gray-300 mb-8 text-lg">
          Conference and research posters
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posters.map((poster, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl bg-gray-700 transition-all duration-300 cursor-pointer border border-gray-600 hover:-translate-y-1"
              onClick={() => openModal(poster.src)}
            >
              <div className="relative bg-gray-800 flex items-center justify-center p-4" style={{ aspectRatio: '3/4' }}>
                <img
                  src={poster.src}
                  alt={poster.alt}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{poster.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-cyan-400 transition-colors z-10"
            onClick={closeModal}
          >
            ×
          </button>

          {/* Zoom hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm select-none pointer-events-none">
            Scroll to zoom · {Math.round(zoom * 100)}%
          </div>

          {/* Image wrapper — stops click-to-close when clicking the image */}
          <div
            className="overflow-auto max-w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            style={{ cursor: zoom > 1 ? 'grab' : 'zoom-in' }}
          >
            <img
              ref={imgRef}
              src={selectedImage}
              alt="Enlarged view"
              className="rounded-lg shadow-2xl transition-transform duration-150"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'center center',
                maxWidth: '90vw',
                maxHeight: '90vh',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
