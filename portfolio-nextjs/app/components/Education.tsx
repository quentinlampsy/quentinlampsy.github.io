'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Education() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const education = [
    {
      university: 'Beijing Normal University',
      logo: '/pictures/bnu-logo.png',
      degree: 'Bachelor of Science in Psychology',
      period: '2019.9 - 2023.6',
      location: 'Beijing, China',
      supervisor: {
        image: '/pictures/wqd.jpg',
        caption: 'Qiandong Wang 王乾东\n BSc Supervisor',
        link: 'https://psych.bnu.edu.cn/szdw/zrjs/fjs/wqd/',
        tags: ['Eye-tracking', 'Autism', 'Major Depressive Disorder'],
      },
    },
    {
      university: 'The Chinese University of Hong Kong',
      logo: '/pictures/cuhk-logo.png',
      degree: 'Master of Philosophy in Psychology',
      period: '2025.8 - 2027.6',
      location: 'Hong Kong, China',
      supervisor: {
        image: '/pictures/um.jpg',
        caption: 'Urs Maurer\n MPhil Supervisor',
        link: 'https://www.psy.cuhk.edu.hk/index.php/?option=com_sppagebuilder&view=page&id=98',
        tags: ['EEG', 'Reading and Literacy', 'Genetic'],
      },
    },
  ];

  return (
    <section
      id="education"
      className="animate-fade-in-up bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-700"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">🎓</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Education
        </h2>
      </div>
      <p className="text-gray-300 mb-8 text-lg">
        My academic journey in Psychology
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:-translate-y-2 border border-gray-600"
          >
            {/* Top Section: Logo + University Info */}
            <div className="flex gap-4 mb-6">
              {/* University Logo - Smaller, Top Left */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 relative flex items-center justify-center bg-gray-800 rounded-lg p-2">
                  {imageErrors[index] ? (
                    <div className="text-2xl">🏛️</div>
                  ) : (
                    <img
                      src={edu.logo}
                      alt={`${edu.university} logo`}
                      className="w-full h-full object-contain"
                      onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                    />
                  )}
                </div>
              </div>

              {/* University Info - Right Side */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {edu.university}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-200 font-semibold flex items-center gap-1">
                    <span>📅</span> {edu.period}
                  </p>
                  <p className="text-gray-300 font-medium">{edu.degree}</p>
                  <p className="text-gray-400 flex items-center gap-1">
                    <span>📍</span> {edu.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Line */}
            <div className="mb-6 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            {/* Supervisor Section - Center */}
            {edu.supervisor && (
              <div className="flex flex-col items-center">
                <a
                  href={edu.supervisor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group/supervisor"
                >
                  {/* Supervisor Photo - Circle, Fixed Size */}
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 group-hover/supervisor:border-blue-400 transition-all duration-300 shadow-md group-hover/supervisor:shadow-xl">
                    <img
                      src={edu.supervisor.image}
                      alt={edu.supervisor.caption}
                      className="w-full h-full object-cover group-hover/supervisor:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Supervisor Caption */}
                  <p className="text-sm font-semibold text-gray-200 group-hover/supervisor:text-blue-400 transition-colors text-center whitespace-pre-line">
                    {edu.supervisor.caption}
                  </p>
                  
                  {/* GitHub-style Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {edu.supervisor.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-300 group-hover/supervisor:bg-blue-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
