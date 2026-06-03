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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/[0.82] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm font-semibold text-slate-950"
          aria-label="HHW portfolio home"
        >
          <span className="grid size-9 place-items-center rounded-lg border border-slate-200 bg-slate-950 text-white shadow-sm">
            H
          </span>
          <span className="hidden sm:inline">HHW Portfolio</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          aria-label="Contact"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        >
          <Mail className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Contact</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
