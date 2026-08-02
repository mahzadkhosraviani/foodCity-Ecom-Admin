import NextBprogress from "@/components/libraries/NextNprogress";
import "./globals.css";
import BootstrapClient from "@/components/libraries/Bootstrap";
import Toastify from "@/components/libraries/Toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <NextBprogress>
          {children}
          <BootstrapClient />
          <Toastify />
        </NextBprogress>
      </body>
    </html>
  );
}
