import NextBprogress from "@/components/libraries/NextNprogress";
import "./globals.css";
import BootstrapClient from "@/components/libraries/Bootstrap";
import Toastify from "@/components/libraries/Toastify";
import Header from "@/components/layout/Header";
import SideBar from "@/components/layout/SideBar";
import { Suspense } from "react";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Suspense>
          <AuthProvider>
            <NextBprogress>
              <Header />
              <div className="container-fluid">
                <div className="row">
                  <SideBar />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
                    {children}
                  </main>
                </div>
              </div>
              <BootstrapClient />
              <Toastify />
            </NextBprogress>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
