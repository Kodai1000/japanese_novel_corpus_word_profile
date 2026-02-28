import type { Metadata } from "next";
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "夏目漱石共起データ検索ツール",
  description: "夏目漱石の作品である語と係り受け関係にある語を検索できます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-green-200">
          <h1 className="text-xl font-semibold">夏目漱石文学共起語検索ツール</h1>
          <p>青空文庫上の夏目漱石の作品上の単語と係り受け関係にある単語を検索できます。</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
        <footer className="fixed inset-x-0 bottom-0 bg-green-200">
          <p>共起データ作成に使用させていただいたコーパス</p>
          <Link href="https://huggingface.co/datasets/globis-university/aozorabunko-clean" className="text-blue-600 underline hover:text-blue-800">株式会社グロービスによる青空文庫コーパス</Link>
        </footer>
      </body>
    </html>
  );
}
