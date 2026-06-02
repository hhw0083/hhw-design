import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/[0.78] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm font-semibold text-white"
          aria-label="HHW portfolio home"
        >
          <span className="grid size-9 place-items-center rounded-md border border-cyanline/40 bg-cyanline/10 text-cyanline">
            H
          </span>
          <span className="hidden sm:inline">HHW Portfolio</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          aria-label="Contact"
          className="inline-flex h-10 items-center gap-2 rounded-md border border-white/[0.14] bg-white/[0.08] px-3 text-sm font-semibold text-white transition hover:border-cyanline/60 hover:bg-cyanline/10"
        >
          <Mail className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Contact</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
