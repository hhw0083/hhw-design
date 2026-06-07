"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:px-5">
      <div
        className={`pointer-events-auto relative mx-auto max-w-7xl overflow-hidden rounded-2xl border backdrop-blur-xl transition duration-300 md:rounded-[32px] ${
          isScrolled
            ? "border-white/15 bg-[rgba(6,17,29,0.90)] shadow-[0_16px_50px_rgba(2,8,15,0.24)]"
            : "border-white/10 bg-[rgba(6,17,29,0.62)] shadow-[0_12px_40px_rgba(2,8,15,0.14)]"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-3 sm:px-4">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-2.5 text-sm font-semibold text-white"
            aria-label="HHW portfolio home"
            onClick={() => setIsMenuOpen(false)}
          >
            
              <Image
                src="/images/x-logo-light.svg"
                alt=""
                width={30}
                height={30}
                priority
                className="size-7 object-contain invert"
              />
          
            <span className="truncate">HHW Portfolio</span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-black/15 p-1 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            aria-label="Let's talk"
            className="hidden h-10 items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-4 text-sm font-semibold text-white transition hover:border-teal-300/50 hover:bg-cyanline sm:inline-flex"
          >
            <Mail className="size-4 text-teal-300" aria-hidden="true" />
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition hover:border-teal-300/40 hover:bg-white/10 md:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          className={`grid overflow-hidden px-3 transition-[grid-template-rows,opacity] duration-300 md:hidden ${
            isMenuOpen
              ? "grid-rows-[1fr] border-t border-white/10 pb-3 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <nav className="grid gap-1 pt-3 text-sm text-slate-200">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2.5 transition hover:bg-white/[0.07] hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
