import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "../Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unwind",
  description: "Website for improving mental health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
