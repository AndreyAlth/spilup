"use client";
import { MobileHeader } from "@/app/components/quland/MobileHeader";

export function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <MobileHeader /> {children}
    </div>
  );
}