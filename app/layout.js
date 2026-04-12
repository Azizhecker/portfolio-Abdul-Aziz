import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer yang baru dibuat
import AosInit from "./components/AosInit";

export const metadata = {
  title: "Abdul Aziz Portfolio",
  description: "Portfolio Profesional Abdul Aziz, S.Kom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {/* Tambahkan flex flex-col dan min-h-screen agar footer selalu di bawah */}
      <body className="bg-[#0A1128] flex flex-col min-h-screen">
        <AosInit />
        <Navbar />
        
        {/* flex-grow membuat main mengambil sisa ruang yang ada */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}