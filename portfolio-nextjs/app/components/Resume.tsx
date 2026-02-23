export default function Resume() {
  return (
    <section
      id="resume"
      className="animate-fade-in-up bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-700"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">📄</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Resume</h2>
      </div>
      <p className="text-gray-300 mb-8 text-lg">
        Download my professional resume in your preferred format:
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="/Resume Quentin Lam.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>Full Version</span>
        </a>
        <a
          href="/Resume Quentin Lam 1-Page.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>One-Page Version</span>
        </a>
      </div>
    </section>
  );
}
