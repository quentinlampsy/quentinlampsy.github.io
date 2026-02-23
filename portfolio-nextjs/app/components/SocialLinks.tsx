export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'Email',
      icon: '✉️',
      url: 'mailto:quentinlam.Arbeit@gmail.com',
      username: 'quentinlam.Arbeit@gmail.com',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/quentinlampsy',
      username: 'quentinlampsy',
      color: 'from-gray-700 to-gray-900',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/tak-kwan-lam-307917283/',
      username: 'Tak Kwan Lam',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'Google Scholar',
      icon: '🎓',
      url: 'https://scholar.google.com/citations?user=Sx-kJsAAAAAJ&hl=en',
      username: 'Research Profile',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'ResearchGate',
      icon: '🔬',
      url: 'https://www.researchgate.net/profile/Tak-Kwan-Lam?ev=hdr_xprf',
      username: 'Tak Kwan Lam',
      color: 'from-teal-500 to-green-600',
    },
    {
      name: 'Twitter / X',
      icon: '🐦',
      url: 'https://x.com/QuentinLampsy',
      username: '@QuentinLampsy',
      color: 'from-sky-400 to-blue-500',
    },
    {
      name: 'Bluesky',
      icon: '🦋',
      url: 'https://bsky.app/profile/quentinhk.bsky.social',
      username: 'quentinhk.bsky.social',
      color: 'from-blue-400 to-indigo-500',
    },
  ];

  return (
    <section
      id="connect"
      className="animate-fade-in-up bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-700"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">🌐</div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-300">
          Connect With Me
        </h2>
      </div>
      <p className="text-gray-300 mb-8 text-lg">
        Let's collaborate! Reach out through any of these platforms:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-gray-700 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-gray-600 hover:border-blue-400"
          >
            <div className="text-3xl group-hover:scale-110 transition-transform">
              {link.icon}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                {link.name}
              </div>
              <div className="text-sm text-gray-400 truncate">{link.username}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
