'use client'
import { useState } from 'react';
import Image from 'next/image';
import empaque from "../../../public/empaque1.jpeg";
import baby from "../../../public/baby.jpeg";
import cumple from "../../../public/cumple.jpeg";
import cumpleanos from "../../../public/cumpleanos.jpeg";
import logotipos from "../../../public/logotipos.jpeg";
import comunion from "../../../public/comunion.jpeg";
import graduacion from "../../../public/graduacion.jpeg";
import florales from "../../../public/florales.jpeg";
import profesion from "../../../public/profesiones.jpeg";

// Define the initial data outside the component or inside a hook like useMemo if it's complex,
// to avoid recreating it on every render.
const initialMenuData = [
  { image: empaque, name: 'Empaques', description: 'Cada galleta en su empaque acorde a tu evento.', check: false },
  { image: baby, name: 'Baby Shower', description: 'Celebra o anuncia la dulce espera del nuevo integrante de la familia.', check: false },
  { image: cumple, name: 'Cumpleaños Infantiles', description: 'Galletas para dar un toque de alegría y sabor a la celebración (se pueden personalizar con nombres y edades).', check: false },
  { image: cumpleanos, name: 'Cumpleaños', description: 'Galletas perfectas para cualquier edad y ocasión, desde un festejo íntimo hasta una gran celebración.', check: false },
  { image: logotipos, name: 'Logotipos', description: 'Tu imagen de marca en un bocado inolvidable, perfectas para eventos o como un regalo de agradecimiento para clientes y empleados.', check: false },
  { image: comunion, name: 'Primera Comunión', description: 'Galletas que son el detalle ideal para celebrar la ocasión y compartir con todos los invitados.', check: false },
  { image: graduacion, name: 'Graduación', description: 'Perfectas para celebrar el éxito y el inicio de una nueva etapa.', check: false },
  { image: florales, name: 'Florales', description: 'Ideales para desayunos, brunch, día de las madres, o para celebrar una ocasión especial.', check: false },
  { image: profesion, name: 'Profesiones', description: 'Con diseños personalizados a su especialidad, estas galletas son un detalle inolvidable que dice "Gracias".', check: false },
];

export default function MenuPage() {
  // 1. Convert menuData to a state variable using the initial data.
  const [menuData, setMenuData] = useState(initialMenuData);

  // 2. The separate 'id' state is no longer needed, as the active item's
  // state is now stored directly within the `menuData` array itself.

  const handleItemClick = (clickedIndex: number) => {
    // 3. Create a new array to update the state immutably.
    const newMenuData = menuData.map((item, index) => {
      // If this is the item that was clicked, set its 'check' to true.
      // Otherwise, set it to false. This ensures only one item is active.
      return { ...item, check: index === clickedIndex };
    });

    // 4. Set the new array as the state, triggering a re-render.
    setMenuData(newMenuData);
  };

  return (
    <div className="bg-[#FDF6E3] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white border-8 border-blue rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
          <header className="flex flex-col items-center text-center mb-10">
            <div className="rose text-white font-display text-5xl md:text-6xl py-3 px-10 rounded-b-4xl rounded-t-md shadow-lg transform -rotate-2">
              Galería de Inspiración
            </div>
            <p className="text-xl text-gray-600 font-bold tracking-widest mt-4 uppercase">
              Opciones para tu Creación
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-8 justify-items-center">
            {menuData.map((category, k) => (
              <div key={k}>
                <div
                  className='relative mx-auto cursor-pointer overflow-hidden rounded-lg'
                  // 5. Call the new handler function on click.
                  onClick={() => handleItemClick(k)}
                >
                  <Image className='w-full h-full object-cover rounded-lg' src={category.image} alt={category.name} width={400} height={400} />
                  {/* The ternary now correctly reads from the stateful `category.check` */}
                  <div className={`absolute inset-0 bg-black flex items-center justify-center text-white p-4 transition-opacity duration-300 ${category.check ? 'opacity-70' : 'opacity-0'}`}>
                    <p className="text-lg font-semibold text-center">{category.description}</p>
                  </div>
                </div>
                <p className="rose m-1 text-white font-bold uppercase py-2 px-4 rounded-md text-center text-lg mb-6 shadow">
                  ★ {category.name} ★
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}