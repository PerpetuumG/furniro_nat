import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/common/NavBar';
import FooterSection from '@/components/sections/FooterSection';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Furniro Ecommerce',
  description: 'Get any furniture items on the fly',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <main className={'bg-white'}>
          <NavBar />
          {children}

          <div className={'mt-[56px]'}>
            <FooterSection />
          </div>
        </main>
      </body>
    </html>
  );
}
