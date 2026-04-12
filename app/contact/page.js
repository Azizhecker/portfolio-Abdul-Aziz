import Navbar from "../components/Navbar";

export const metadata = {
  title: "Kontak - Abdul Aziz",
};

export default function Contact() {
  const contactLinks = [
    {
      title: "CV Abdul Aziz, S.Kom",
      subtitle: "Lihat atau unduh resume lengkap",
      url: "https://drive.google.com/file/d/1nllysGPrdA90N1qAhMg381CIxiYfjprJ/view", // Ganti dengan link Google Drive / PDF CV kamu
      color: "hover:border-blue-500 hover:shadow-blue-500/20 text-blue-400",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "WhatsApp",
      subtitle: "Chat untuk respon cepat",
      url: "https://wa.me/082164344974", // Ganti dengan wa.me/nomorkamu
      color: "hover:border-emerald-500 hover:shadow-emerald-500/20 text-emerald-400",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Instagram",
      subtitle: "Portofolio visual & keseharian",
      url: "https://www.instagram.com/azizctd?utm_source=qr",
      color: "hover:border-pink-500 hover:shadow-pink-500/20 text-pink-400",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      )
    },
    {
      title: "TikTok",
      subtitle: "Azizctd",
      url: "https://www.tiktok.com/@pakwactd",
      color: "hover:border-cyan-400 hover:shadow-cyan-400/20 text-white",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.46-.22-2.39.81-4.78 2.68-6.19 1.63-1.25 3.73-1.63 5.71-1.13.43.1.84.26 1.22.48v4.22c-1.02-.45-2.22-.52-3.26-.11-1.12.44-1.92 1.5-2.01 2.7-.1 1.17.43 2.37 1.37 3.07 1.05.79 2.53.84 3.65.23.9-.49 1.53-1.37 1.73-2.38.16-.83.12-1.69.12-2.54V.02h-2.27z"/>
        </svg>
      )
    },
    {
      title: "GitHub",
      subtitle: "Source code & project repositori",
      url: "https://github.com/Azizhecker",
      color: "hover:border-slate-300 hover:shadow-slate-300/20 text-slate-300",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      title: "LinkedIn",
      subtitle: "Koneksi profesional & karir",
      url: "https://www.linkedin.com/in/abdul-aziz-8092b429b",
      color: "hover:border-blue-600 hover:shadow-blue-600/20 text-blue-500",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      title: "Pinterest",
      subtitle: "Inspirasi desain & moodboard",
      url: "https://pin.it/2ypCzubvH",
      color: "hover:border-red-500 hover:shadow-red-500/20 text-red-500",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.625 0 12.017 0z"/>
        </svg>
      )
    },
    {
      title: "YouTube",
      subtitle: "Video, vlog & live streaming",
      url: "https://www.youtube.com/@pakwayt",
      color: "hover:border-red-600 hover:shadow-red-600/20 text-red-600",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <main className="w-full min-h-screen bg-[#0A1128] text-slate-300 pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">Hubungi <span className="text-blue-500">Saya</span></h1>
          <p className="text-slate-400">Pilih platform di bawah ini untuk terhubung, melihat karya, atau berkolaborasi dengan saya.</p>
        </div>

        {/* LINKTREE STYLE BUTTONS */}
        <div className="flex flex-col gap-4">
          {contactLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center p-4 bg-[#111A3A]/80 border border-slate-800 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${link.color}`}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
              
              {/* Text Container */}
              <div className="ml-5 flex-grow">
                <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors">
                  {link.title}
                </h3>
                {link.subtitle && (
                  <p className="text-sm text-slate-400 mt-0.5">
                    {link.subtitle}
                  </p>
                )}
              </div>

              {/* Arrow Icon */}
              <div className="text-slate-600 group-hover:text-current opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
}