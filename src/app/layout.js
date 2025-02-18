import Header from "./components/Header";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#02191D] text-white p-4">
        <Header />
        {children}
      </body>
    </html>
  );
}
