'use client';

import { useState } from 'react';

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    { src: '/pictures/IELTS 2025.jpg', alt: 'IELTS Certificate 2025' },
    { src: '/pictures/MHFA certificate.jpg', alt: 'Mental Health First Aid Certificate' },
    { src: '/pictures/MBCT training.jpg', alt: 'MBCT Training Certificate' },
    { src: '/pictures/Deutsch A1.png', alt: 'German A1 Certificate' },
  ];

  return (
    <>
      <section
        id="certificates"
        className="animate-fade-in-up bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-700"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">🏆</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Certificates & Achievements
          </h2>
        </div>
        <p className="text-gray-300 mb-8 text-lg">
          Professional certifications and accomplishments
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl bg-gray-700 transition-all duration-300 cursor-pointer border border-gray-600"
              onClick={() => setSelectedImage(cert.src)}
            >
              <div className="aspect-[3/4] relative bg-gray-800">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{cert.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-cyan-400 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
