'use client';

import { useState } from 'react';

export default function Publications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const publications = [
    {
      image: '/pictures/My JEMR F2.png',
      title: 'JEMR Article',
      doi: 'https://www.mdpi.com/1995-8692/18/6/72',
      description:
        'Initial and sustained attentional bias toward emotional faces in MDD. \
        This eye-tracking study examines how people with major depressive disorder \
        attend to emotional faces over time. Rather than treating attention as a single \
        process, it separates early orienting from later sustained looking. The most engaging \
        result is that emotional faces, especially fearful faces, captured early gaze, \
        while clear group differences in sustained attention were not observed. The study \
        therefore refines the common idea that depression simply involves "getting stuck" \
        on negative information. Its highlight is temporal precision: depressive attentional \
        bias may be better understood by asking when attention is altered, not only what emotion it is directed toward.',
    },
    {
      image: '/pictures/Huo BP figure 4.png',
      title: 'BP Article',
      doi: 'https://doi.org/10.1016/j.biopsycho.2024.108824',
      description: "Development of EEG alpha and theta oscillations in working memory. This paper \
      asks how the brain's working-memory system matures from childhood to adulthood. Using EEG during \
      an n-back task, the study separates “true” theta and alpha oscillations from broader background \
      brain activity. The most interesting finding is developmental: adults increased midfrontal theta \
      power when memory load became higher, but children did not show this mature load-sensitive theta \
      response. At the same time, both groups showed alpha changes with load, suggesting that different \
      oscillatory systems mature at different rates. This work highlights how working-memory development \
      is not only about better behavior, but also about changing neural strategies.",
    },
    {
      image: '/pictures/Li MP F2.png',
      title: 'MP Paper',
      doi: 'https://www.nature.com/articles/s41380-025-02965-7',
      description: "Reduced attention to human eyes in Shank3 mutant beagle dogs. This paper uses an unusual \
      and powerful model: laboratory beagle dogs carrying a Shank3 mutation associated with autism. With eye-tracking, \
      the study shows that mutant dogs spent less proportional viewing time on human eyes than wild-type dogs, \
      while their attention to dog faces was not similarly reduced. A gaze-cueing experiment further suggests \
      that this pattern reflects active avoidance of human eyes rather than simply failing to notice them. \
      Oxytocin also increased looking toward human eyes in mutant dogs. The study is striking because it connects \
      genes, social attention, and a potentially modifiable behavior in a naturalistic social animal.",
    },
    {
      image: '/pictures/su IJBR F3.png',
      title: 'ML Paper',
      doi: 'https://journals.sagepub.com/doi/full/10.1177/01650254231207596',
      description: "Dynamic patterns of affect-biased attention in children and its relationship with parenting. This \
      paper asks a simple but important question: when children look at emotional faces, how does their attention \
      unfold over time? Using eye-tracking during a dot-probe task, the study shows that reaction time alone missed \
      children's affect-biased attention, whereas gaze data revealed clear patterns. Children looked longer overall \
      at angry and happy faces than neutral faces, but the most interesting finding comes from the time-course analysis: \
      attention to emotional faces emerged very early after face presentation, even for sad faces, but this bias did not \
      remain constant. Only happy faces attracted attention again later. The study also identified three subgroups of \
      children with different dynamic gaze patterns—weak decay, strong decay, and recovery—and used machine learning to \
      show that positive parenting was related to children’s temporal attention patterns toward sad faces. The highlight \
      of this paper is methodological and developmental: attention bias is not just “more looking” or “less looking,” but \
      a dynamic process shaped over time and potentially linked to children’s family environment.",
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
              <div className="p-5">
                <h3 className="text-white text-lg font-semibold mb-2">{pub.title}</h3>
                {pub.description && (
                  <p className="text-gray-300 text-sm leading-relaxed">{pub.description}</p>
                )}
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
