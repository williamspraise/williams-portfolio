"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigationLinks } from "@/data/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <nav className="container nav-inner" aria-label="Primary navigation">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">WP</span>
          <span>
            <strong>Williams Praise</strong>
            <small>Capital Allocator + Operator</small>
          </span>
        </Link>

        <div className="desktop-links">
          {navigationLinks.map((link) =>
            link.children ? (
              <div className="nav-group" key={link.label}>
                <Link href={link.href}>{link.label}</Link>
                <div className="nav-dropdown">
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ),
          )}
          <ThemeToggle />
        </div>

        <div className="mobile-controls">
          <ThemeToggle />
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((shown) => !shown)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mobile-menu-links">
              {navigationLinks.map((link) => (
                <div className="mobile-link-group" key={link.label}>
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                  {link.children && (
                    <div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
