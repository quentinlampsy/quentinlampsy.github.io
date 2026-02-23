'use client';

import { useState } from 'react';

export default function Publications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const publications = [
    {
      image: '/pictures/JEMR article.png',
      title: 'JEMR Article',
      doi: 'https://www.mdpi.com/1995-8692/18/6/72',
    },
    {
      image: '/pictures/BP article.png',
      title: 'BP Article',
      doi: 'https://doi.org/10.1016/j.biopsycho.2024.108824',
    },
    {
      image: '/pictures/ML paper.png',
      title: 'ML Paper',
      doi: 'https://journals.sagepub.com/doi/full/10.1177/01650254231207596',
    },
  ];

  return (
    <>
      <section
        id="publications"
        className="animate-fade-in-up bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-700"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">📚</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Representative Publications
          </h2>
        </div>
        <p className="text-gray-300 mb-8 text-lg">
          If you're interested in my research work, feel free to explore my publications. Click on any publication to view the full article and its details. And go to my <a href="https://scholar.google.com/citations?user=Sx-kJsAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Scholar profile</a> for a comprehensive list of my research contributions and citations.
        </p>
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gray-700 border border-gray-600"
              onClick={(e) => {
                // Allow opening modal on right-click or ctrl-click
                if (!e.ctrlKey && !e.metaKey && e.button === 0) {
                  e.preventDefault();
                  window.open(pub.doi, '_blank');
                }
              }}
            >
              <div className="aspect-[4/3] relative bg-gray-800 flex items-center justify-center p-4">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="text-white text-center">
                    <p className="text-sm font-medium mb-2">Click to view publication</p>
                    <div className="flex items-center justify-center gap-2 text-xs">
                      <span>🔗</span>
                      <span className="truncate">DOI Link</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Modal for enlarged view (optional) */}
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
