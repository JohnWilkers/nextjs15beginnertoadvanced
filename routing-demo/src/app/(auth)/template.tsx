"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import './styles.css';
import '../globals.css';
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [input,setInput] = useState("");
  const pathname = usePathname();
  return (
    <html lang="en">
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <div>
        {navLinks.map((link) => {
          const isActive = 
          pathname === link.href || 
          (pathname.startsWith(link.href) && link.href !== "/")
          return (
            <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>
              {link.name}
            </Link>
          )
        })}
      </div>
      <body>{children}</body>
      <footer
        style={{
          backgroundColor: "ghostwhite",
          padding: "1rem",
        }}
      >
        <p>Footer</p>
      </footer>
    </html>
  )
}
