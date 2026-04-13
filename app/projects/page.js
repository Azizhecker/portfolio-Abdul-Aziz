import Navbar from "../components/Navbar";

export const metadata = {
  title: "Projects - Abdul Aziz",
};

export default function Projects() {
  // ================= 1. DATA PROYEK UTAMA (Web, Aplikasi, UI/UX) =================
  const featuredProjects = [
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

  // ================= 2. DATA GALERI DESAIN GRAFIS =================
  const graphicDesigns = [
    { title: "Logo PKKMB UNIMAL 2025", image: "/projects/pkkmb-logo.png" },
    { title: "Logo Warong Aceh Kupie Itam", image: "/projects/kupi.png" },
    { title: "KPPN Lhokseumawe", image: "/projects/Artboard 2.png" },
    { title: "Hari Imlek", image: "/projects/Artboard 33.png" },
    { title: "Gerakan Masyarakat Sehat", image: "/projects/Artboard 1.png" },
    { title: "Siap WBBM 2026", image: "/projects/poster A3.png" },
    { title: "Ramadhan Kareem", image: "/projects/Artboard 444.png" },
    { title: "Maulid Nabi Muhammad SAW", image: "/projects/11 maulid-01.png" },
    { title: "17 Agustus", image: "/projects/17 agustus-02.png" },
    { title: "20 Tahun Stunami Aceh", image: "/projects/20-tahun-stunami-aceh.jpg" },
    { title: "Berbagi Takjil", image: "/projects/berbagi takjil-01.png" },
    { title: "Sesi Dokumentasi", image: "/projects/dokumentasi expo.jpg" },
    { title: "Family Catering", image: "/projects/family-01.png" },
    { title: "Desain Dokumentasi", image: "/projects/dokumentasi GO UDC-01.png" },
    { title: "G30SPKI", image: "/projects/feed-low-size_01.jpg" },
    { title: "Hari BAtik", image: "/projects/hari batik-01.png" },
    { title: "Hari Guru Nasional", image: "/projects/hari guru nasional 2024-01.png" },
    { title: "Hari Pahlawan Nasional", image: "/projects/hari pahlawan 2024-01.png" },
    { title: "Hari Idul Adha", image: "/projects/hari raya idul adha.png" },
    { title: "Hari Santri", image: "/projects/hari santri.png" },
    { title: "Hari Santri", image: "/projects/hari santri-01.png" },
    { title: "Hari Sumpah Pemuda", image: "/projects/hari sumpah pemuda-01.png" },
    { title: "Hari Veteran Nasional", image: "/projects/hari veteran baru-01.png" },
    { title: "Kebebasan HAM", image: "/projects/Kebebasan HAM-01.png" },
  ];

  return (
    <main className="w-full min-h-screen bg-[#0A1128] text-slate-300 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">Project <span className="text-blue-500">Portofolio</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Kumpulan karya terbaik saya di bidang Pengembangan Web, Analisis Data, UI/UX, dan Desain Grafis.</p>
        </div>

        {/* SECTION 1: PROYEK UTAMA (Berbasis Kartu/Card) */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-3">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {featuredProjects.map((proj, i) => (
              <div key={i} className="bg-[#111A3A]/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                <div className="h-48 bg-slate-800 w-full relative overflow-hidden flex items-center justify-center shrink-0">
                   <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 block">{proj.category}</span>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">{proj.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 line-clamp-3 flex-grow">{proj.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
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
        </div>

        {/* SECTION 2: GALERI DESAIN GRAFIS (Ukuran 4:5 / 1080x1350) */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-bold text-white">
              Galeri <span className="text-purple-500">Desain Grafis</span>
            </h2>
            <span className="text-sm text-slate-500 font-medium">{graphicDesigns.length} Karya Visual</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {graphicDesigns.map((design, i) => (
              <div 
                key={i} 
                // PERUBAHAN DI SINI: menggunakan aspect-[4/5] untuk rasio 1080x1350
                className="relative group aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 border border-slate-700 cursor-pointer"
              >
                {/* Gambar Desain */}
                <img 
                  src={design.image} 
                  alt={design.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Teks Alternatif jika gambar belum ada */}
                <span className="absolute inset-0 flex items-center justify-center text-slate-500 text-xs text-center p-2 -z-10">
                  {design.image}
                </span>

                {/* Efek Overlay Hitam saat Kursor Diarahkan */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h4 className="text-white text-sm font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 line-clamp-2">
                    {design.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}