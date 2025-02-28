import Link from "next/link";

const packages = [
  {
    name: "Paket 1",
    price: "Rp 30.000/bulan",
    features: ["2 vCPU", "4GB RAM", "Active 30 day", "Garansi & Admin Support"],
  },
  {
    name: "Paket 2",
    price: "Rp 35.000/bulan",
    features: ["4 vCPU", "8GB RAM", "Active 30 day", "Garansi & Admin Support"],
  },
  {
    name: "Paket 3",
    price: "Rp 40.000/bulan",
    features: [
      "4 vCPU",
      "16GB RAM",
      "Active 30 day",
      "Garansi & Admin Support",
    ],
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen pt-4 bg-gray-900 text-white px-6 md:px-20">
        {/* Hero Section */}
        <section
          className="flex flex-col md:flex-row items-center justify-between py-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="max-w-lg space-y-6">
            <h1 className="text-4xl font-bold">
              Arch VPS - Cepat, Stabil, dan Terjangkau
            </h1>
            <p className="text-gray-300">
              Dapatkan server VPS dengan performa terbaik untuk website, bot,
              atau proyek Anda.
            </p>
            <Link
              href={"/#paket"}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Lihat Paket VPS
            </Link>
          </div>
          <img
            src="/logo.png"
            alt="Hero VPS"
            className="w-full md:w-1/2 mt-4 md:mt-0"
          />
        </section>

        {/* Paket VPS */}
        <section
          className="py-32"
          id="paket"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold text-center">Paket VPS Kami</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                <p className="text-xl font-bold text-blue-400">{pkg.price}</p>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={""}>
                  <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg">
                    Pesan Sekarang
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimoni */}
        <section
          className="py-32"
          data-aos="fade-up"
          data-aos-delay="200"
          id="about"
        >
          <h2 className="text-3xl font-bold text-center">Apa Kata Mereka?</h2>
          <p className="text-center text-gray-300 mt-4">
            Testimoni pelanggan tentang layanan kami.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p>"Layanan VPS Arch sangat stabil dan cepat!"</p>
              <span className="text-blue-400">- Rifat, Developer</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p>"Harga terjangkau dengan performa yang luar biasa."</p>
              <span className="text-blue-400">- Tono, Pemilik Toko Online</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p>"Support sangat responsif dan membantu!"</p>
              <span className="text-blue-400">- Ghaza, Freelancer</span>
            </div>
          </div>
        </section>

        {/* Kontak */}
        <section
          className="py-32 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold">Hubungi Kami</h2>
          <p className="text-gray-300 mt-4">
            Jika ada pertanyaan, jangan ragu untuk menghubungi kami.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
            <button className="bg-blue-500 flex items-center gap-2 px-6 py-3 rounded-lg">
              Email: -
            </button>
            <button className="bg-blue-500 flex items-center gap-2 px-6 py-3 rounded-lg">
              WhatsApp: 083141314195
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
