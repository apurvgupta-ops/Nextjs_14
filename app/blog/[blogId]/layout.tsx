import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <h2>Featured Blog</h2>
        {children}
      </div>
    </div>
  );
}
