"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      <div>
        <div>
          {navLinks.map((item) => {
            const isActive = pathname.startsWith(item.href);
            console.log(isActive);

            return (
              <Link
                key={item.href}
                style={isActive ? { fontWeight: "bold" } : { color: "blue" }}
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        {children}
        <h2>Auth layout</h2>
      </div>
    </div>
  );
}
