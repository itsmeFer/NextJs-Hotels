import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
    {/* Navbar di atas gambar */}
    <div className="relative">
        <Navbar />
        <section className="hero">
          <img src="/images/landing.jpg" alt="Landing" />
          {/* Overlay hitam transparan */}
          <div className="overlay"></div>
          {/* Teks di dalam gambar */}
          <div className="hero-text">
            <h1>Booking Hotel Cepat?</h1>
            <p>Kami memberikan layanan terbaik untuk Anda.</p>
          </div>
        </section>
      </div>

      {/* Section 2: About */}
      <section className="section card">
        <h2 className="text-3xl font-bold">Tentang Kami</h2>
        <p className="mt-4 text-gray-600">
          Kami menyediakan layanan terbaik untuk kebutuhan Anda.
        </p>
      </section>

      {/* Section 3: Features */}
      <section className="section features">
        <h2 className="text-3xl font-bold">Fitur Unggulan</h2>
        <div className="mt-4 flex justify-center gap-6">
          <div className="feature-box">
            <h3 className="text-xl font-semibold">Kecepatan</h3>
            <p className="mt-2 text-gray-500">Layanan cepat dan responsif.</p>
          </div>
          <div className="feature-box">
            <h3 className="text-xl font-semibold">Keamanan</h3>
            <p className="mt-2 text-gray-500">Data Anda aman bersama kami.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Contact */}
      <section className="section contact">
        <h2 className="text-3xl font-bold">Hubungi Kami</h2>
        <p className="mt-4">Email: support@website.com</p>
      </section>
    </main>
  );
}
