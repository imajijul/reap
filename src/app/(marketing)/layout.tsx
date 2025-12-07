import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        <Navbar/>
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
