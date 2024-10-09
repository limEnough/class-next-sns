// layout.tsx   페이지를 넘나들때 리렌더링 되지 않는, 말 그대로 뼈대 구조
// template.tsx 매번 새롭게 마운트되기 때문에 주로 구글 애널리틱스 등에 사용 (서버컴포넌트로 작동하기 때문에 'use client' 선언 필수)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ozo-com",
  description: "ozo sns application",
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
