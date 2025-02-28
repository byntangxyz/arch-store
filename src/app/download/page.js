"use client";

const osList = [
  {
    name: "Arch Linux",
    iso: "/path/to/arch-linux.iso",
    vdi: "/path/to/arch-linux.vdi",
  },
  {
    name: "Ubuntu",
    iso: "/path/to/ubuntu.iso",
    vdi: "/path/to/ubuntu.vdi",
  },
  {
    name: "Windows 11",
    iso: "/path/to/windows11.iso",
    vdi: "/path/to/windows11.vdi",
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen pt-20  bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Download OS</h1>
      <div className="w-full max-w-2xl space-y-4">
        {osList.map((os, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-xl font-semibold">{os.name}</h2>
            <div className="mt-2 flex gap-4">
              <a
                href={os.iso}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition"
                download
              >
                Download ISO
              </a>
              <a
                href={os.vdi}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white transition"
                download
              >
                Download VDI
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
