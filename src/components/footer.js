export default function Footer() {
  return (
    <footer className="relative h-32 md:h-40 overflow-hidden bg-gray-900 transition-colors">
      <div className="absolute inset-0 wave w-[200%] h-full opacity-50"></div>

      <div className="relative z-10 text-white text-center py-4 px-2">
        <a className="text-sm md:text-base" href="https://byntangxyz.my.id">
          &copy; 2025 Arch Store. All rights reserved.
        </a>
      </div>
    </footer>
  );
}
