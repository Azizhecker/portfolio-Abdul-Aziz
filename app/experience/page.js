import Navbar from "../components/Navbar";

export const metadata = {
  title: "Pengalaman - Abdul Aziz",
};

export default function Experience() {
  const experiences = [
    {
      role: "Asisten KPPN Lhokseumawe (MagangHub Kemnaker)",
      company: "KPPN Lhokseumawe",
      period: "2025 – 2026",
      // ================= FOTO UTAMA PENGALAMAN =================
      // Foto diletakkan di sini untuk menjadi "sampul" kotak pengalaman
      image: "/images/experiences/Magang kppn.png",
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
      // Pengalaman ini tidak ada foto sampulnya, jadi akan otomatis menyesuaikan (hanya teks)
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

  const certificates = [
    {
      title: "Sertifikat Lomba Poster BK3N PT PIM",
      issuer: "PT Pupuk Iskandar Muda",
      year: "2025",
      image: "/certificates/Sertifikat Abdul Aziz, S.Kom-01.png",
    },
    {
      title: "Sertifikat Authors 2nd International Conference on Multi Disciplinary Engineering (ICoMDEn)",
      issuer: "Universitas Malikussaleh",
      year: "2024",
      image: "/certificates/Sertifikat Abdul Aziz, S.Kom-02.png",
    },
    {
      title: "Sertifikat Partisipan Lomba Poster Bulan K3 Nasional PT PIM",
      issuer: "PT Pupuk Iskandar Muda",
      year: "2025",
      image: "/certificates/Sertifikat Abdul Aziz, S.Kom-03.png",
    },
    {
      title: "Sertifikat Ketua Departemen Syiar LDK Al Kautsar Universitas Malikussaleh",
      issuer: "Lembaga Dakwah Kampus Al Kautsar Universitas Malikussaleh",
      year: "2024",
      image: "/certificates/Sertifikat Abdul Aziz, S.Kom-04.png",
    },
    {
      title: "Sertifikat Sekretaris Umum LDF FUAT Al Muttaqin Universitas Malikussaleh",
      issuer: "Lembaga Dakwah Fakultas Forum Ukhuwah Aneuk Teknik (FUAT) Al-Muttaqin Universitas Malikussaleh",
      year: "2024",
      image: "/certificates/Sertifikat Abdul Aziz, S.Kom-05.png",
    },
    {
      title: "Sertifikat Partisipan 3rd MICoMS 2022",
      issuer: "Universitas Malikussaleh",
      year: "2022",
      image: "/certificates/Sertifikat Abdul Aziz, S.Kom-06.png",
    },
    {
      title: "Sertifikat committee the 2nd International Conference on Multi Disciplinary Engineering (ICoMDEn)",
      issuer: "Universitas Malikussaleh",
      year: "2024",
      image: "/certificates/Sertifikat Abdul Aziz, S.Kom-07.png",
    },
    {
      title: "Sertifikat committee the 2nd international engineering student conference (IESC)",
      issuer: "Universitas Malikussaleh",
      year: "2024",
      image: "/certificates/Sertifikat Abdul Aziz, S.Kom-08.png",
    },
    {
      title: "Sertifikat committee Seminar Nasional Teknlogi Informasi dan Tekni Informatika",
      issuer: "Universitas Malikussaleh",
      year: "2024",
      image: "/certificates/Sertifikat Abdul Aziz, S.Kom-09.png",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#0A1128] text-slate-300 pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">Pengalaman <span className="text-blue-500">Profesional</span></h1>
          <p className="text-slate-400">Jejak karir dan kontribusi saya di berbagai institusi.</p>
        </div>

        {/* WORK EXPERIENCE TIMELINE */}
        <div className="space-y-12 mb-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon / Marker */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0A1128] bg-slate-800 ${exp.color} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10`}>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              {/* Content Card - Ditambahkan overflow-hidden agar foto tidak keluar dari sudut melengkung */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] rounded-2xl bg-[#111A3A]/80 border border-slate-800 hover:border-blue-500/50 transition-colors shadow-lg overflow-hidden flex flex-col">
                
                {/* LOGIKA FOTO SAMPUL PENGALAMAN */}
                {exp.image && (
                  <div className="w-full h-64 md:h-80 bg-slate-800 border-b border-slate-800 relative group-hover:opacity-90 transition-opacity">
                    <img 
                      src={exp.image} 
                      alt={exp.company} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Konten Teks */}
                <div className="p-6">
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
            </div>
          ))}
        </div>

        {/* ORGANISATIONS & PRESTASI GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-3">Organisasi</h2>
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
             <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-3">Pencapaian</h2>
             <div className="bg-linear-to-br from-blue-900/40 to-slate-900 p-6 rounded-xl border border-blue-800/50">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-bold text-white text-lg mb-2">Juara 2 Lomba Desain Poster BK3N PT PIM (2025)</h4>
                <p className="text-sm text-slate-300">Karya desain yang menonjol dalam kreativitas, pesan visual, dan kesesuaian tema lomba tingkat perusahaan.</p>
             </div>
          </div>
        </div>

        {/* ================= SECTION SERTIFIKAT ================= */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-3 flex items-center gap-3">
            Sertifikat <span className="text-emerald-500">& Lisensi</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <div key={i} className="bg-[#111A3A]/60 rounded-xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                
                {/* Image Placeholder / Frame */}
                <div className="h-48 bg-slate-800 w-full relative overflow-hidden flex items-center justify-center border-b border-slate-800 z-0 shrink-0">
                   <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-105 z-10" 
                    />
                   <span className="absolute text-slate-500 text-xs italic z-0">{cert.image}</span>
                </div>
                
                {/* Certificate Details */}
                <div className="p-5 flex-col flex grow">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-md font-bold text-white leading-snug">{cert.title}</h3>
                    <span className="px-2 py-1 bg-slate-900 rounded text-xs font-bold text-slate-400 shrink-0">{cert.year}</span>
                  </div>
                  <p className="text-sm text-emerald-400 font-medium">{cert.issuer}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}