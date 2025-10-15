import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menú | Dulces Momentos',
  description: 'Explora nuestras bases de galleta y opciones de decoración para crear tu pedido personalizado.',
};

type MenuItem = { name: string; description: string; };
type MenuCategory = { title: string; items: MenuItem[]; };

// **ACCIÓN:** Rellena esta sección con tus productos
const menuData: MenuCategory[] = [
  
  
  {
    title: 'Empaques',
    items: [
      { name: 'Bolsa Individual', description: 'Cada galleta en su bolsa de celofán con un lazo del color de tu evento.' },
      { name: 'Caja de Regalo', description: 'Cajas personalizables para sets de 2, 4 o 6 galletas. Ideal para recuerdos.' },
    ],
  },
  {
    title: 'Eventos',
    items: [
      { name: 'Bautismos', description: 'Cada galleta en su bolsa de celofán con un lazo del color de tu evento.' },
      { name: 'Primera comunión', description: 'Cajas personalizables para sets de 2, 4 o 6 galletas. Ideal para recuerdos.' },
    ],
  },
];

export default function MenuPage() {
  const WHATSAPP_NUMBER = '5211234567890'; // **ACCIÓN:** Reemplaza con tu número
  const whatsappMessage = encodeURIComponent('Hola! Me gustaría cotizar unas galletas personalizadas.');

  return (
    <div className="bg-[#FDF6E3] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-8 border-blue rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
          <header className="flex flex-col items-center text-center mb-10">
            <div className="rose text-white font-display text-5xl md:text-6xl py-3 px-10 rounded-full shadow-lg transform -rotate-2">
              Galería de Inspiración
            </div>
            <p className="text-xl text-gray-600 font-bold tracking-widest mt-4 uppercase">
              Opciones para tu Creación
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-8 gap-y-10">
            {menuData.map((category) => (
              <div key={category.title}>
                <h3 className="rose text-white font-bold uppercase py-2 px-4 rounded-md text-center text-lg mb-6 shadow">
                  ★ {category.title} ★
                </h3>
                <ul className="space-y-6">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex flex-col">
                      <div className="flex items-center">
                        <span className="font-bold text-gray-800 text-lg">{item.name}</span>
                        <span className="flex-grow border-b-2 border-dotted border-gray-300 mx-2"></span>
                      </div>
                      <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
                      <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 self-start bg-[#93C5FD] text-white text-xs font-bold py-1 px-3 rounded-full hover:bg-blue-500 transition-colors shadow"
                      >
                        Personalizar
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}