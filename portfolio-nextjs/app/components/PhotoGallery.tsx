'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { src: '/pictures/Profile Image.jpg', alt: 'Profile photo' },
    { src: '/pictures/Family Photo.jpg', alt: 'Family photo' },
    { src: '/pictures/Selfie half body.jpg', alt: 'Portrait' },
  ];

  return (
    <>
      <section
        id="gallery"
        className="animate-fade-in-up bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-700"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">📸</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Photo Gallery
          </h2>
        </div>
        <p className="text-gray-300 mb-8 text-lg">
          A glimpse into my life and experiences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
              onClick={() => setSelectedImage(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{photo.alt}</p>
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
