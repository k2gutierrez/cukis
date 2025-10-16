import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/logo2nobg.png"

export default function HomePage() {
  return (
    <div className="bg-[#FDF6E3] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-8 border-blue rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">

          <header className="flex flex-col items-center text-center mb-10">
            <div className="blulOGO text-white font-display text-5xl md:text-6xl py-3 px-10 rounded-b-4xl rounded-t-md shadow-lg transform -rotate-5 ">
              <Image src={logo} alt='CUKIS' width={60} height={60} />
            </div>
            <p className="text-xl text-gray-600 font-bold tracking-widest mt-4 uppercase">
              Galletas Personalizadas
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            {/* Sección de Bienvenida */}
            <div>
              <h3 className="rose text-white font-bold uppercase py-2 px-4 rounded-md text-center text-lg mb-6 shadow">
                ★ ¡Bienvenido a Nuestro Rincón Dulce! ★
              </h3>
              <p className="text-center text-gray-700 text-lg mb-10">
                Creemos que cada celebración merece un detalle único. Aquí, tus ideas se transforman en deliciosas obras de arte comestibles, hechas a mano con amor y dedicación para hacer tu evento inolvidable.
              </p>
            </div>

            {/* Sección Cómo Funciona */}
            <div>
              <h3 className="rose text-white font-bold uppercase py-2 px-4 rounded-md text-center text-lg mb-6 shadow">
                ★ ¿Cómo funciona? ★
              </h3>
              <ul className="space-y-4 text-center text-gray-700 mb-12">
                <li><strong className="text-gray-900">1. Inspírate:</strong> Piensa en la temática, colores y estilo de tu evento.</li>
                <li><strong className="text-gray-900">2. Conoce nuestro trabajo:</strong> Visita nuestra Galeria de Inspiración.</li>
                <li><strong className="text-gray-900">3. Contáctanos:</strong> Escríbenos por WhatsApp para contarnos tu idea y finalizar los detalles.</li>
              </ul>
            </div>

            {/* Sección de Llamada a la Acción */}
            <div className="text-center mt-8">
              <p className="font-display text-3xl text-gray-800 mb-4">¿Lista para empezar?</p>
              <Link
                href="/galeria"
                className="inline-block blulOGO text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:bg-blue-500 transition-transform transform hover:scale-105"
              >
                Ver Galería de Inspiración
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}