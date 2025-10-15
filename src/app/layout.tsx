import type { Metadata } from 'next'
import { Pacifico, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cuki | Dulces Momentos',
  description: 'Arte comestible para cada ocasión. Galletas artesanales personalizadas para tus eventos.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${pacifico.variable} ${roboto.variable} font-body blulOGO`}>
        {/* NUEVA FRANJA SUPERIOR DE CUADROS */}
        <div className="w-full"></div>
        
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
