import Image from 'next/image';
import qr from "../../../public/cukis1r.png"
import logo from "../../../public/logo2nobg.png"

export default function Cukis() {

  return (
    <div className="bg-[#FDF6E3] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-8 border-blue rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
          <header className="flex flex-col items-center text-center mb-10">
            <Image src={qr} alt='https://cukis.com.mx' width={500} height={500} />
          </header>
        </div>
      </div>
    </div>
  );
}