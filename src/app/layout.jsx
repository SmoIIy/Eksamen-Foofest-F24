import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"],
weight: ['400', '700'] });


export const metadata = {
  title: "Foo Fest festival 2024",
  description: "Foo Fest Metal festival 2024, the biggest festival with the biggest names of all time.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav className="flex justify-around m-auto max-w-screen-sm p-8">
            <Link href="/">Home</Link>
            <Link href="/booking">Booking</Link>
            <Link href="/schedule">Schedule</Link>
            <Link href="/lineup">Lineup</Link>
        </nav>
        {children}</body>
    </html>
  );
}
