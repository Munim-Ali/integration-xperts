import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Siderbar from "@/components/shared/siderbar";
import Navbar from "@/components/shared/navbar";
import { useState } from "react";
import SidebarProvider from "@/components/siderbarContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Integration Xperts",
  description: "Test Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#FAFBFC] flex items-start justify-between  antialiased`}
      >
        <SidebarProvider>
          <Siderbar />
          <main className="w-full">
            <Navbar />
            <div className="p-4 lg:p-8 w-full">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
