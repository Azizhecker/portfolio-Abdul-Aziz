import Navbar from "../components/Navbar";

export const metadata = {
  title: "About - Abdul Aziz",
};

export default function About() {
  return (
    <main className="w-full min-h-screen bg-[#0A1128] text-slate-300 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">Riwayat <span className="text-blue-500">Pendidikan</span></h1>
          <p className="text-slate-400 text-lg leading-relaxed">Selain keterampilan teknis, saya aktif membangun kapasitas akademik dan kepemimpinan di berbagai jenjang pendidikan.</p>
        </div>

        {/* KAMPUS */}
        <div className="bg-[#111A3A]/80 p-8 rounded-3xl border border-slate-800 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 border-b border-slate-700/50 pb-6">
             <div>
                <h2 className="text-2xl font-bold text-white">Universitas Malikussaleh</h2>
                <p className="text-lg text-blue-400 font-medium mt-1">Sarjana Teknik Informatika</p>
                <p className="text-slate-400 mt-1">Lhokseumawe, Aceh • <strong className="text-emerald-400">IPK: 3.68 / 4.00</strong></p>
             </div>
             <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm font-bold text-slate-300">2021 - 2025</span>
          </div>

          <ul className="space-y-4 list-disc list-inside text-slate-300 marker:text-blue-500">
             <li>Aktif berkuliah dengan fokus utama pada Pengembangan Web, Front-End, Graphic Design, UI/UX, Machine Learning dan Data Mining.</li>
             <li>Berpartisipasi dalam kompetisi nasional GEMASTIK, menjadi UX Design Aplikasi Mobile Aksi Bantu (2023) dan Desain Antarmuka Website SIPITUNG (Sistem Informasi Penghitungan) pada tahun 2024.</li>
             <li>Aktif dalam berbagai organisasi internal kampus, terutama pada bidang media, desain grafis, dan publikasi. Berkontribusi sebagai Officer Social Media & Graphic Design di beberapa unit kegiatan mahasiswa seperti BEM Universitas Malikussaleh, LDK Al Kautsar, dan Informatic Study Platform, dengan peran dalam pengelolaan konten, branding visual, serta desain materi publikasi organisasi.</li>
             <li>Terpilih sebagai <strong>Mentor Desain Grafis</strong> di Informatic Study Platform (2024), memberikan pelatihan dan bimbingan terkait dasar-dasar desain, penggunaan software desain, serta praktik pembuatan desain kreatif bagi mahasiswa.</li>
             <li>Mengikuti program pengabdian masyarakat sebagai pemateri pelatihan desain grafis bagi pemuda Desa Banda Masen (2023) dan fasilitator digital di MTsN 1 Kota Lhokseumawe (2024).</li>
             <li>Berpartisipasi dalam berskala internasional maupun internal kampus, mendesain logo 2nd International Conference on Multi Disciplinary Engineering (ICoMDEn) dan International Engineering Student Conference (IESC). berkontribusi pada kegiatan internal Universitas Malikussaleh desain logo kegiatan PKKMB UNIMAL 2025.</li>
             <li><strong>Penelitian Skripsi:</strong> Mengembangkan sistem web prediksi tren visual desain grafis di media sosial menggunakan metode Double Exponential Smoothing (DES).</li>
          </ul>
        </div>

        {/* SMA */}
        <div className="bg-[#111A3A]/40 p-8 rounded-3xl border border-slate-800/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-slate-600"></div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4 border-b border-slate-700/30 pb-6">
             <div>
                <h2 className="text-xl font-bold text-white">SMA Negeri 2 Nisam</h2>
                <p className="text-md text-slate-400 font-medium mt-1">Jurusan IPA</p>
                <p className="text-slate-500 mt-1">Aceh Utara, Aceh • Nilai: 89,36 / 100</p>
             </div>
             <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">2017 - 2020</span>
          </div>

          <ul className="space-y-3 list-disc list-inside text-sm text-slate-400 marker:text-slate-600">
             <li>Dipercaya sebagai Ketua Kelas selama dua periode (kelas 11 dan 12).</li>
             <li>Menjabat Wakil Ketua OSIS, mengoordinasikan organisasi dan agenda sekolah.</li>
             <li>Mewakili sekolah dalam Olimpiade Matematika Tingkat Kabupaten.</li>
          </ul>
        </div>

      </div>
    </main>
  );
}