import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/logo2nobg.png"

const Header = () => {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-display text-[#F9A8D4]">
          <Image src={logo} alt='CUKIS' width={50} height={50} />
        </Link>
        <div className="space-x-8 font-bold">
          <Link href="/" className="text-black hover:text-[#F9A8D4] transition-colors duration-300">
            Inicio
          </Link>
          <Link href="/galeria" className="text-black hover:text-[#F9A8D4] transition-colors duration-300">
            Galería
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;