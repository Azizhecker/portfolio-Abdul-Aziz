export default function Home() {
  // ================= DATA SKILL =================
  const hardSkills = [
    "Web Development", "Front-End", "Graphic Design", "UI/UX",
    "Machine Learning", "Data Mining", "Live Streaming",
    "Media Production", "Meeting Minutes", "Social Media Design"
  ];

  const softSkills = [
    "Kepemimpinan", "Kerja Sama Tim", "Komunikasi", "Adaptasi",
    "Manajemen Waktu", "Ketelitian", "Kemampuan Beradaptasi",
    "Tanggung Jawab", "Kreativitas", "Public Speaking"
  ];

  const softwareSkills = [
    "Visual Studio Code", "Figma", "Adobe Illustrator",
    "Adobe Photoshop", "Adobe Premiere", "Ms. Office"
  ];

  // ================= DATA PENGALAMAN =================
  const experiences = [
    {
      role: "Asisten KPPN Lhokseumawe (MagangHub Kemnaker)",
      company: "KPPN Lhokseumawe",
      period: "2025 – 2026",
      desc: [
        "Membuat dan menyusun notulensi kegiatan kantor (Weekly Meeting, GKM, DKRO).",
        "Operator live streaming YouTube untuk Press Conference APBN dan FGD.",
        "Mendesain media publikasi, buletin tahunan, laporan MTL, dan visual kampanye WBBM.",
        "Membangun & maintain website checklist kebersihan CS dan Sistem Informasi Realisasi Dana Transfer.",
        "Mengelola persiapan teknis kegiatan daring (Zoom/Streaming)."
      ],
      color: "border-blue-500",
    },
    {
      role: "Graphic Designer & Business Owner",
      company: "Pasee ART",
      period: "2024 – 2025",
      desc: [
        "Mengelola usaha percetakan independen dari desain grafis, produksi cetak, hingga layanan pelanggan.",
        "Bertanggung jawab atas materi visual, branding klien, dan operasional bisnis."
      ],
      color: "border-purple-500",
    },
    {
      role: "Graphic Designer (Internship)",
      company: "Malikussaleh Advertising",
      period: "2025",
      desc: [
        "Desain kebutuhan promosi komersial dan mengoperasikan mesin percetakan.",
        "Berpengalaman dalam workflow produksi percetakan dari desain hingga hasil akhir."
      ],
      color: "border-emerald-500",
    },
  ];

  const organizations = [
    {
      role: "Kepala Bidang Agama",
      org: "BEM Universitas Malikussaleh",
      period: "2025 - 2026",
    },
    {
      role: "Pengurus Menkominfo",
      org: "BEM Universitas Malikussaleh",
      period: "2024 - 2025",
    },
    {
      role: "Ketua Departemen Syiar",
      org: "LDK Al Kautsar Universitas Malikussaleh",
      period: "2024",
    },
    {
      role: "Sekretaris Umum",
      org: "LDF FUAT Al Muttaqin",
      period: "2023",
    },
  ];

  // ================= DATA PROJECT =================
  const projects = [
    {
      title: "Sistem Web Prediksi Tren Visual Desain Grafis",
      category: "Data Science & Web Dev",
      desc: "Penelitian Skripsi. Menggunakan metode Double Exponential Smoothing (DES) untuk memprediksi gaya visual yang berpotensi tren di masa depan.",
      image: "/projects/skripsi.png",
      tags: ["Python", "Machine Learning", "Web App"],
    },
    {
      title: "UI/UX Mobile App Aksi Bantu",
      category: "UI/UX Design",
      desc: "Kompetisi GEMASTIK 2023. Merancang desain antarmuka dan pengalaman pengguna untuk aplikasi sosial.",
      image: "/projects/aksi-bantu.png",
      tags: ["Figma", "Prototyping", "UX Research"],
    },
    {
      title: "SIPITUNG (Sistem Informasi Penghitungan)",
      category: "Web Design",
      desc: "Desain Antarmuka Website untuk kompetisi GEMASTIK 2024.",
      image: "/projects/sipitung.png",
      tags: ["UI Design", "Figma"],
    },
    {
      title: "Website Sistem Checklist Kebersihan KPPN",
      category: "Web Development",
      desc: "Sistem internal untuk CS dengan fitur laporan harian, inventaris, dan approval.",
      image: "/projects/kppn-web.png",
      tags: ["Front-End", "Database", "Dashboard"],
    },
    {
      title: "Website Monitoring Penyaluran Dana Transfer",
      category: "Web Development",
      desc: "Sistem web untuk proses penyaluran dana dari pemerintah pusat ke daerah.",
      image: "/projects/sifrans-web.png",
      tags: ["Front-End", "Dashboard"],
    }
  ];

  // ================= DATA KONTAK =================
  const contactLinks = [
    {
      title: "CV Abdul Aziz, S.Kom",
      subtitle: "Lihat atau unduh resume lengkap",
      url: "https://drive.google.com/file/d/1nllysGPrdA90N1qAhMg381CIxiYfjprJ/view",
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
      url: "https://wa.me/082164344974",
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
    }
  ];

  return (
    <main className="w-full min-h-screen bg-[#0A1128] text-slate-300 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* ================= 1. HERO SECTION ================= */}
        <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="order-2 md:order-1">
            <p className="text-blue-400 font-semibold tracking-wider uppercase text-xs mb-3">
              Hello, Welcome !!!
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-white tracking-tight">
              Saya Abdul <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400">
                Aziz, S.Kom
              </span>
            </h1>
            <div className="bg-blue-900/30 border border-blue-800/50 text-blue-300 text-sm font-medium w-fit mt-6 px-4 py-1.5 rounded-full">
              IT Support & Web Developer
            </div>
            <p className="text-slate-400 mt-6 leading-relaxed text-lg w-full md:w-[90%] text-justify md:text-left">
              Menggabungkan keterampilan teknis dan kreativitas untuk menghadirkan solusi teknologi dan multimedia yang efektif, inovatif, dan bernilai tinggi.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-600/20 transition-all text-center">
                Contact Me
              </a>
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900/50 border border-slate-800 shadow-sm w-fit mx-auto sm:mx-0">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" />
                </svg>
                <span className="text-sm text-slate-300 font-medium break-all">aziz.com5535@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end order-1 md:order-2 relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl -z-10 transform scale-90"></div>
            <img
              src="/aziz.png"
              alt="Foto Abdul Aziz"
              className="w-[260px] sm:w-[360px] md:w-[450px] xl:w-[550px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </section>

        {/* ================= 2. ABOUT & SKILLS SECTION ================= */}
        <section id="about" className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex justify-center md:justify-start sticky top-32" data-aos="fade-right">
             <div className="absolute inset-0 bg-slate-800/80 rounded-3xl rotate-3 -z-10 scale-105 transition-transform hover:rotate-6 duration-300"></div>
            <img
              src="/Karya 3.png"
              alt="Abdul Aziz Bekerja"
              className="w-[300px] sm:w-[420px] md:w-[480px] object-cover rounded-3xl shadow-2xl border border-slate-700/50 z-10"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight flex items-center gap-4">
              Tentang Saya
              <div className="h-px bg-blue-800 grow opacity-50"></div>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-10 w-full text-justify md:text-left text-[1.05rem]">
              Saya seorang <strong className="text-blue-400 font-medium">IT Support</strong> dengan keahlian di bidang desain grafis, editing video, dan kameramen. 
              Berpengalaman dalam troubleshooting, pengelolaan infrastruktur IT, serta pengembangan <strong className="text-cyan-400 font-medium">Front-end website</strong>. 
              Selain itu, saya juga memiliki kemampuan dalam live streaming & media production, penyusunan meeting minutes, serta pembuatan konten desain untuk media sosial.
            </p>

            <div className="flex flex-col gap-5 w-full">
              {/* Hard Skill */}
              <div className="bg-[#111A3A]/50 w-full rounded-2xl p-5 border border-slate-800 hover:border-blue-500/50 transition-colors">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <span className="text-blue-400">⚡</span> Hard Skill
                </h3>
                <div className="flex flex-wrap items-center gap-2.5">
                  {hardSkills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-md text-xs font-medium whitespace-nowrap">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Soft Skill */}
              <div className="bg-[#111A3A]/50 w-full rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/50 transition-colors">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <span className="text-emerald-400">🤝</span> Soft Skill
                </h3>
                <div className="flex flex-wrap items-center gap-2.5">
                  {softSkills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-md text-xs font-medium whitespace-nowrap">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Software Skill */}
              <div className="bg-[#111A3A]/50 w-full rounded-2xl p-5 border border-slate-800 hover:border-purple-500/50 transition-colors">
                <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <span className="text-purple-400">🎨</span> Software Skill
                </h3>
                <div className="flex flex-wrap items-center gap-2.5">
                  {softwareSkills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-md text-xs font-medium whitespace-nowrap">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. PENGALAMAN SECTION ================= */}
        <section id="experience" className="mt-40 max-w-4xl mx-auto" data-aos="fade-up">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Pengalaman <span className="text-blue-500">Profesional</span></h2>
            <p className="text-slate-400">Jejak karir dan kontribusi saya di berbagai institusi.</p>
          </div>

          <div className="space-y-12 mb-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0A1128] bg-slate-800 ${exp.color} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-[#111A3A]/80 border border-slate-800 hover:border-blue-500/50 transition-colors shadow-lg">
                  <div className="flex flex-col mb-3">
                    <span className="text-blue-400 text-sm font-bold tracking-wide">{exp.period}</span>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-slate-400 text-sm font-medium">{exp.company}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-300 text-sm">
                    {exp.desc.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-3">Organisasi</h3>
              <div className="space-y-4">
                {organizations.map((org, i) => (
                  <div key={i} className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 border-l-4 border-l-purple-500">
                    <h4 className="font-bold text-white">{org.role}</h4>
                    <p className="text-sm text-slate-400">{org.org} • {org.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
               <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-3">Pencapaian</h3>
               <div className="bg-linear-to-br from-blue-900/40 to-slate-900 p-6 rounded-xl border border-blue-800/50">
                  <div className="text-3xl mb-3">🏆</div>
                  <h4 className="font-bold text-white text-lg mb-2">Juara 2 Lomba Desain Poster BK3N PT PIM (2025)</h4>
                  <p className="text-sm text-slate-300">Karya desain yang menonjol dalam kreativitas, pesan visual, dan kesesuaian tema lomba tingkat perusahaan.</p>
               </div>
            </div>
          </div>
        </section>

        {/* ================= 4. PROJECT SECTION ================= */}
        <section id="projects" className="mt-40" data-aos="fade-up">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Project <span className="text-blue-500">Portofolio</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Kumpulan karya terbaik saya di bidang Pengembangan Web, Desain Grafis, UI/UX, dan Analisis Data.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="bg-[#111A3A]/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 group">
                <div className="h-48 bg-slate-800 w-full relative overflow-hidden flex items-center justify-center">
                   <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 block">{proj.category}</span>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">{proj.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 line-clamp-3">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-900/80 border border-slate-700 text-slate-300 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 5. KONTAK SECTION ================= */}
        <section id="contact" className="mt-40 max-w-2xl mx-auto pb-10" data-aos="fade-up">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Hubungi <span className="text-blue-500">Saya</span></h2>
            <p className="text-slate-400">Pilih platform di bawah ini untuk terhubung, melihat karya, atau berkolaborasi.</p>
          </div>

          <div className="flex flex-col gap-4">
            {contactLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center p-4 bg-[#111A3A]/80 border border-slate-800 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${link.color}`}
              >
                <div className="w-14 h-14 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <div className="ml-5 grow">
                  <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors">
                    {link.title}
                  </h3>
                  {link.subtitle && (
                    <p className="text-sm text-slate-400 mt-0.5">
                      {link.subtitle}
                    </p>
                  )}
                </div>
                <div className="text-slate-600 group-hover:text-current opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}