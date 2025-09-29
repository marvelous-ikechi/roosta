
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ... */}
      </head>
      <body>
        <Navbar /> {/* This is the component being used */}
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children} 
          </main>
        </div>
        <Footer /> {/* This is the component being used */}
      </body>
    </html>
  );
}