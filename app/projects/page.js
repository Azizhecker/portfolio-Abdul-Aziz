"use client";

import { useState } from "react";

export default function Projects() {
  // State untuk menyimpan array gambar yang sedang dibuka di modal
  const [modalImages, setModalImages] = useState(null);
  // State untuk melacak urutan gambar yang sedang dilihat
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ================= 1. DATA PROYEK WEBSITE =================
  const websiteProjects = [
    {
      title: "Sistem Web Prediksi Tren Visual Desain Grafis",
      category: "Data Science & Web Dev",
      desc: "Penelitian Skripsi. Menggunakan metode Double Exponential Smoothing (DES) untuk memprediksi gaya visual yang berpotensi tren di masa depan.",
      images: [
        "/projects/skripsi.webp", 
        "/projects/skripsi-2.webp",
        "/projects/skripsi-3.webp"
      ], 
      tags: ["Python", "Machine Learning", "Web App"],
    },
    {
      title: "UI/UX Mobile App Aksi Bantu",
      category: "UI/UX Design",
      desc: "Kompetisi GEMASTIK 2023. Merancang desain antarmuka dan pengalaman pengguna untuk aplikasi sosial.",
      images: [
        "/projects/aksi-bantu.webp",
        "/projects/aksi-bantu-2.webp"
      ],
      tags: ["Figma", "Prototyping", "UX Research"],
    },
    {
      title: "SIPITUNG (Sistem Informasi Penghitungan)",
      category: "Web Design",
      desc: "Desain Antarmuka Website untuk kompetisi GEMASTIK 2024.",
      images: ["/projects/sipitung.webp"],
      tags: ["UI Design", "Figma"],
    },
    {
      title: "Website Sistem Checklist Kebersihan KPPN",
      category: "Web Development",
      desc: "Sistem internal untuk CS dengan fitur laporan harian, inventaris, dan approval.",
      images: ["/projects/kppn-web.png"],
      tags: ["Front-End", "Database", "Dashboard"],
    },
    {
      title: "Website Monitoring Penyaluran Dana Transfer",
      category: "Web Development",
      desc: "Sistem web untuk proses penyaluran dana dari pemerintah pusat ke daerah.",
      images: ["/projects/sifrans-web.png"],
      tags: ["Front-End", "Dashboard"],
    },
    {
      title: "Website Monitoring Notula KPPN Lhokseumawe",
      category: "Web Development",
      desc: "Sistem web untuk memonitor pekerjaan notula karyawan kppn lhokseumawe.",
      images: ["/projects/web-notulasiap.PNG"],
      tags: ["Front-End", "Backend", "Dashboard"],
    },
    {
      title: "Website Smart PPNPN KPPN Lhokseumawe",
      category: "Web Development",
      desc: "Sistem web untuk absensi karyawan PPNPN kppn lhokseumawe.",
      images: ["/projects/Smartkppn.png"],
      tags: ["Front-End", "Backend", "Dashboard"],
    }
  ];

  // ================= 2. DATA PROYEK VIDEO (YouTube) =================
  const videoProjects = [
    {
      title: "Video Profil KPPN Lhokseumawe 2026",
      thumbnail: "/projects/yt.jpeg", 
      youtubeUrl: "https://youtu.be/4-UQGeULBFM?si=QIdx7KQ2JAAOUnDx", 
    },
  ];

  // ================= 3. DATA DESAIN BAJU / JERSEY =================
  const jerseyDesigns = [
    { 
      title: "Jersey KPPN Lhokseumawe", 
      images: [
        "/projects/jerseykppn.png",
        "/projects/jerseykppn-detail.png"
      ] 
    }, 
    { 
      title: "Desain Baju Kerja PT Cahaya Sawit Lestari", 
      images: ["/projects/el sawit 2.png"] 
    },
    { 
      title: "Desain Baju Kerja PT Cahaya Sawit Lestari 2", 
      images: ["/projects/el sawit.png"] 
    },
  ];

  // ================= 4. DATA DESAIN LOGO =================
  const logoDesigns = [
    { title: "Logo PKKMB UNIMAL 2025", image: "/projects/pkkmb-logo.webp" },
    { title: "Logo Warong Aceh Kupie Itam", image: "/projects/kupi.webp" },
  ];

  // ================= 5. DATA GALERI DESAIN GRAFIS =================
  const graphicDesigns = [
    { title: "KPPN Lhokseumawe", image: "/projects/aceh.webp" },
    { title: "KPPN Lhokseumawe", image: "/projects/tiktoknight.webp" },
    { title: "KPPN Lhokseumawe", image: "/projects/ipon.webp" },
    { title: "KPPN Lhokseumawe", image: "/projects/Artboard 2.webp" },
    { title: "Hari Imlek", image: "/projects/Artboard 33.webp" },
    { title: "Hari Imlek", image: "/projects/ig post.webp" },
    { title: "Gerakan Masyarakat Sehat", image: "/projects/Artboard 1.webp" },
    { title: "Siap WBBM 2026", image: "/projects/poster A3.webp" },
    { title: "Ramadhan Kareem", image: "/projects/Artboard 444.webp" },
    { title: "Maulid Nabi Muhammad SAW", image: "/projects/11 maulid-01.webp" },
    { title: "17 Agustus", image: "/projects/17 agustus-02.webp" },
    { title: "20 Tahun Stunami Aceh", image: "/projects/20-tahun-stunami-aceh.webp" },
    { title: "Berbagi Takjil", image: "/projects/berbagi takjil-01.webp" },
    { title: "Sesi Dokumentasi", image: "/projects/dokumentasi expo.webp" },
    { title: "Family Catering", image: "/projects/family-01.webp" },
    { title: "Family Catering", image: "/projects/Artboard 8.webp" },
    { title: "Desain Dokumentasi", image: "/projects/dokumentasi GO UDC-01.webp" },
    { title: "G30SPKI", image: "/projects/feed-low-size_01.jpg" },
    { title: "Hari Batik", image: "/projects/hari batik-01.webp" },
    { title: "Hari Guru Nasional", image: "/projects/hari guru nasional 2024-01.webp" },
    { title: "Hari Pahlawan Nasional", image: "/projects/hari pahlawan 2024-01.webp" },
    { title: "Hari Idul Adha", image: "/projects/hari raya idul adha.webp" },
    { title: "Hari Santri", image: "/projects/hari santri.webp" },
    { title: "Hari Santri", image: "/projects/hari santri-01.webp" },
    { title: "Hari Sumpah Pemuda", image: "/projects/hari sumpah pemuda-01.webp" },
    { title: "Hari Veteran Nasional", image: "/projects/hari veteran baru-01.webp" },
    { title: "Kebebasan HAM", image: "/projects/Kebebasan HAM-01.webp" },
  ];

  // --- Fungsi Modal & Slider ---
  const openModal = (images) => {
    setModalImages(Array.isArray(images) ? images : [images]);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  return (
    <main className="w-full min-h-screen bg-[#0A1128] text-slate-300 pt-32 pb-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">Project <span className="text-blue-500">Portofolio</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Kumpulan karya terbaik saya di bidang Pengembangan Web, Video Produksi, dan Desain Grafis.</p>
        </div>

        {/* SECTION 1: PROYEK WEBSITE */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-3">
            Projek <span className="text-blue-500">Website & UI/UX</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {websiteProjects.map((proj, i) => (
              <div key={i} className="bg-[#111A3A]/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group flex flex-col">
                <div 
                  className="h-56 bg-slate-800 w-full relative overflow-hidden flex items-center justify-center shrink-0 cursor-pointer"
                  onClick={() => openModal(proj.images)}
                >
                  <img src={proj.images[0]} alt={proj.title} loading="lazy" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-105" />
                  
                  {proj.images.length > 1 && (
                    <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                      1/{proj.images.length}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <svg className="w-10 h-10 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col grow">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 block">{proj.category}</span>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">{proj.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 grow">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-900/80 border border-slate-700 text-slate-300 rounded text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: PROYEK VIDEO */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-3">
            Hasil <span className="text-red-500">Video Produksi</span>
          </h2>
          
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {videoProjects.map((video, i) => (
              <a 
                key={i} 
                href={video.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="min-w-[85vw] sm:min-w-[400px] md:min-w-[450px] lg:min-w-[500px] snap-center group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 block"
              >
                <div className="aspect-video w-full relative">
                  <img src={video.thumbnail} alt={video.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600/90 text-white p-3 rounded-full group-hover:scale-110 transition-transform shadow-xl">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black via-black/70 to-transparent p-5 pt-10">
                  <h3 className="text-lg font-bold text-white truncate">{video.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* SECTION 3: DESAIN JERSEY */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-3">
            Desain <span className="text-emerald-500">Baju & Jersey</span>
          </h2>
          
          <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {jerseyDesigns.map((jersey, i) => (
              <div 
                key={i} 
                className="min-w-[70vw] sm:min-w-[300px] md:min-w-[350px] snap-center group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 cursor-pointer"
                onClick={() => openModal(jersey.images)}
              >
                <div className="aspect-square w-full relative">
                  <img src={jersey.images[0]} alt={jersey.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  
                  {jersey.images.length > 1 && (
                    <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                      1/{jersey.images.length}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black via-black/70 to-transparent p-4 pt-10">
                  <h3 className="text-md font-bold text-white truncate">{jersey.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: KARYA DESAIN LOGO */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-bold text-white">
              Karya <span className="text-yellow-500">Desain Logo</span>
            </h2>
            <span className="text-sm text-slate-500 font-medium">{logoDesigns.length} Logo</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {logoDesigns.map((logo, i) => (
              <div 
                key={i} 
                className="relative group aspect-square rounded-xl overflow-hidden bg-slate-800 border border-slate-700 cursor-pointer p-4 flex items-center justify-center hover:bg-slate-700 transition-colors"
                onClick={() => openModal(logo.image)}
              >
                <img 
                  src={logo.image} 
                  alt={logo.title} 
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-[#0A1128]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-2 text-center">
                  <svg className="w-6 h-6 text-white mb-2 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  <h4 className="text-white text-xs font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300 line-clamp-2">
                    {logo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: GALERI DESAIN GRAFIS */}
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
                className="relative group aspect-4/5 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 cursor-pointer"
                onClick={() => openModal(design.image)}
              >
                <img 
                  src={design.image} 
                  alt={design.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#0A1128]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <svg className="w-8 h-8 text-white mb-2 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  <h4 className="text-white text-sm font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 line-clamp-2">
                    {design.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ================= MODAL / LIGHTBOX GAMBAR DENGAN SLIDER ================= */}
      {modalImages && modalImages.length > 0 && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-opacity"
          onClick={() => setModalImages(null)}
        >
          {/* Tombol Close */}
          <button 
            className="absolute top-6 right-6 text-white bg-slate-800/50 hover:bg-red-500 rounded-full p-2 transition-colors z-50"
            onClick={() => setModalImages(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          {/* Tombol Slider Kiri */}
          {modalImages.length > 1 && (
            <button 
              className="absolute left-4 md:left-10 text-white bg-slate-800/50 hover:bg-blue-500 rounded-full p-3 transition-colors z-50"
              onClick={prevImage}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}

          {/* Gambar Besar */}
          <div className="relative max-w-full max-h-full flex flex-col items-center">
            <img 
              src={modalImages[currentImageIndex]} 
              alt={`Preview ${currentImageIndex + 1}`} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-fade-in-up"
              onClick={(e) => e.stopPropagation()} 
            />
            
            {/* Indikator Urutan Gambar */}
            {modalImages.length > 1 && (
              <div className="mt-4 text-slate-300 text-sm font-medium bg-slate-900/50 px-4 py-1.5 rounded-full" onClick={(e) => e.stopPropagation()}>
                {currentImageIndex + 1} / {modalImages.length}
              </div>
            )}
          </div>

          {/* Tombol Slider Kanan */}
          {modalImages.length > 1 && (
            <button 
              className="absolute right-4 md:right-10 text-white bg-slate-800/50 hover:bg-blue-500 rounded-full p-3 transition-colors z-50"
              onClick={nextImage}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          )}

        </div>
      )}

    </main>
  );
}