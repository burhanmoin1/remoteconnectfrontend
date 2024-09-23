import type { Metadata } from "next";
import { Inter, Poppins, Rubik} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"], // Add weights if needed
  variable: "--font-poppins", // Optional: CSS variable for font family
});

const rubik = Rubik({
  weight: ["400", '700'],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Remote Connect | Marketplace To Connect Developers And Clients",
  description: "Remote Connect connects developers with clients all over the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
