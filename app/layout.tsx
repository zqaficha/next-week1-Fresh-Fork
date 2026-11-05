import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Fresh Fork",
  description: "Simple recipes for every day",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        <Header />
        <main className="flex-1 max-w-5xl w-full mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
