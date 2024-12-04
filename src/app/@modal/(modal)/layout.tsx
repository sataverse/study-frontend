"use client";

import { useRouter } from "next/navigation";

export default function ModalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <>
      <div
        className="fixed top-0 w-[100%] h-dvh bg-[#888888] opacity-80 z-[98]"
        onClick={() => router.back()}
      />
      {children}
    </>
  );
}
