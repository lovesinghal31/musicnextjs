import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h1><Link href="/">navbar to chai page</Link></h1>
        {children}
    </>
  );
}
