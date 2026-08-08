import "./globals.css";

import Toastify from "@/components/libraries/Toastify";

import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Suspense>
          {" "}
          {children}
          <Toastify />
        </Suspense>
      </body>
    </html>
  );
}
