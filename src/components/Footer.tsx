import Image from "next/image";
import instagram from "../../public/instagram2.png"
import whatsapp from "../../public/whatsapp2.png"
import tiktok from "../../public/tiktok.webp"

const Footer = () => {
  return (
    <footer className="bg-white border-t pt-8">
      <div className="container mx-auto px-6 py-8 text-center text-gray-700">
        <h3 className="text-2xl font-display text-gray-800">¡Hagamos tu evento inolvidable!</h3>
        <p className="max-w-md mx-auto mt-2">Síguenos para ver nuestras últimas creaciones.</p>
        <div className="flex justify-center space-x-6 mt-6">
          {/* **ACCIÓN:** COLOCA TUS ENLACES REALES A REDES SOCIALES */}
          <a href="https://www.instagram.com/dulces.delicias.de.fer?igsh=cnJjNTY1a3I5NWQw" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#F9A8D4]">
            <Image src={instagram} alt="Instagram - CUKIS" width={40} height={40} />
          </a>
          <a href="https://wa.me/5213321189580/?text=Hola me intersa hacer un pedido" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500">
            <Image src={whatsapp} alt="Whatsapp - CUKIS" width={40} height={40} />
          </a>
          <a href="https://www.tiktok.com/@dulces.delicias.de.fer?_t=ZS-90YVO47VvVg&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
            <Image src={tiktok} alt="Tik Tok - CUKIS" width={40} height={40} />
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500">&copy; {new Date().getFullYear()} CUKIS. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;