import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h1><Link href="/chai">navbar to chai/lemon page</Link></h1>
        {children}
    </>
  );
}
