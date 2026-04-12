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
      period: "2024",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#0A1128] text-slate-300 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">Pengalaman <span className="text-blue-500">Profesional</span></h1>
          <p className="text-slate-400">Jejak karir dan kontribusi saya di berbagai institusi.</p>
        </div>

        {/* WORK EXPERIENCE TIMELINE */}
        <div className="space-y-12 mb-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon / Marker */}
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0A1128] bg-slate-800 ${exp.color} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10`}>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              {/* Content Card */}
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

        {/* ORGANISATIONS & PRESTASI GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
             <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-6 rounded-xl border border-blue-800/50">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-bold text-white text-lg mb-2">Juara 2 Lomba Desain Poster BK3N PT PIM (2025)</h4>
                <p className="text-sm text-slate-300">Karya desain yang menonjol dalam kreativitas, pesan visual, dan kesesuaian tema lomba tingkat perusahaan.</p>
             </div>
          </div>
        </div>

      </div>
    </main>
  );
}