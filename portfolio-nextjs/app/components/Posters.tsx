'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

export default function Posters() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panAtDragStart = useRef({ x: 0, y: 0 });

  // Lock / unlock body scroll when modal opens or closes
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setSelectedImage(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Wheel: zoom around cursor position
  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setZoom(prev => {
      const delta = e.deltaY < 0 ? 0.15 : -0.15;
      const next = Math.min(Math.max(prev + delta, 0.5), 8);
      // If zooming back to 1 reset pan
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Drag to pan
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    panAtDragStart.current = pan;
  }, [pan]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    setPan({
      x: panAtDragStart.current.x + (e.clientX - dragStart.current.x),
      y: panAtDragStart.current.y + (e.clientY - dragStart.current.y),
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
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
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-cyan-400 transition-colors z-10 select-none"
            onClick={closeModal}
          >
            ×
          </button>

          {/* Zoom / pan hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm select-none pointer-events-none">
            Scroll to zoom · drag to pan · {Math.round(zoom * 100)}%
          </div>

          {/* Interaction layer */}
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isDragging.current ? 'grabbing' : zoom > 1 ? 'grab' : 'zoom-in' }}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              draggable={false}
              className="rounded-lg shadow-2xl select-none"
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transformOrigin: 'center center',
                maxWidth: '90vw',
                maxHeight: '90vh',
                transition: isDragging.current ? 'none' : 'transform 0.1s ease',
                userSelect: 'none',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
