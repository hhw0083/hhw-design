"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const navItems = [
  { href: "/#projects", id: "projects", label: "Works" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#experience", id: "experience", label: "Experience" },
];

const contactItem = {
  href: "/#contact",
  id: "contact",
  label: "Let's Talk",
};

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isHomeReady, setIsHomeReady] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const hasElevatedSurface = isMobileViewport || isScrolled || isPastHero;
  const shouldShowHeader =
    isPastHero || (isMobileViewport && isHomeReady);

  useLayoutEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobileViewport(mobileViewport.matches);

    updateViewport();
    mobileViewport.addEventListener("change", updateViewport);

    return () => mobileViewport.removeEventListener("change", updateViewport);
  }, []);

  useLayoutEffect(() => {
    let updateFrame = 0;

    const updateHeader = () => {
      setIsScrolled(window.scrollY > 24);

      const hero = document.querySelector<HTMLElement>("[data-hero-section]");
      const pastHero = !hero || hero.getBoundingClientRect().bottom <= 0;
      const homeReady =
        !hero ||
        (document.documentElement.dataset.homeReady === "true" &&
          !document.querySelector(".home-loader"));
      setIsPastHero(pastHero);
      setIsHomeReady(homeReady);

      if (!pastHero) {
        setActiveSection(null);
        return;
      }

      const readingLine = Math.min(window.innerHeight * 0.3, 240);
      const nextSection = [...navItems, contactItem].find((item) => {
        const section = document.getElementById(item.id);

        if (!section) {
          return false;
        }

        const bounds = section.getBoundingClientRect();
        return bounds.top <= readingLine && bounds.bottom > readingLine;
      });

      setActiveSection(nextSection?.id ?? null);
    };

    const requestHeaderUpdate = () => {
      if (updateFrame) {
        return;
      }

      updateFrame = window.requestAnimationFrame(() => {
        updateFrame = 0;
        updateHeader();
      });
    };

    updateHeader();
    window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
    window.addEventListener("resize", requestHeaderUpdate);
    window.addEventListener("hhw:home-ready", requestHeaderUpdate);

    return () => {
      window.cancelAnimationFrame(updateFrame);
      window.removeEventListener("scroll", requestHeaderUpdate);
      window.removeEventListener("resize", requestHeaderUpdate);
      window.removeEventListener("hhw:home-ready", requestHeaderUpdate);
    };
  }, [pathname]);

  useEffect(() => {
    if (!shouldShowHeader) {
      setIsMenuOpen(false);
    }
  }, [shouldShowHeader]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setIsMenuOpen(false);
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header
      data-site-header
      aria-hidden={!shouldShowHeader}
      style={
        shouldShowHeader
          ? undefined
          : {
              opacity: 0,
              visibility: "hidden",
            }
      }
      className={`pointer-events-none fixed inset-x-0 top-3 z-50 px-3 transition-[transform,opacity,visibility] delay-75 duration-300 ease-out sm:px-5 md:delay-0 ${
        shouldShowHeader
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-0 opacity-0 md:-translate-y-4"
      }`}
    >
      <div
        className={`pointer-events-auto relative mx-auto max-w-7xl overflow-hidden rounded-2xl border transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out md:rounded-[32px] ${
          hasElevatedSurface
            ? "border-white/[0.12] bg-surface-dark/70 shadow-[0_14px_44px_rgba(2,8,15,0.18)] backdrop-blur-[20px]"
            : "border-white/[0.07] bg-surface-dark/25 shadow-none backdrop-blur-md"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-3 sm:px-4">
          <Link
            href="/"
            className="group flex min-h-11 min-w-0 items-center text-[0.9rem] font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark"
            aria-label="HHW portfolio home"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="truncate">
              HHW<span className="text-white/60">.design</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-surface-dark/20 p-1 text-[0.9rem] text-copy-inverseMuted md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.id ? "location" : undefined}
                className={`rounded-full px-4 py-2 transition outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                  activeSection === item.id
                    ? "bg-white/[0.12] text-white"
                    : "hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={contactItem.href}
            aria-label="Let's talk"
            aria-current={activeSection === contactItem.id ? "location" : undefined}
            className={`hidden h-10 items-center gap-2 rounded-full border px-4 text-[0.9rem] font-semibold text-white transition outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark sm:inline-flex ${
              activeSection === contactItem.id
                ? "border-brand-accent/55 bg-brand-primary"
                : "border-brand-accent/25 bg-brand-accent/10 hover:border-brand-accent/50 hover:bg-brand-primary"
            }`}
          >
            <Mail className="size-4 text-brand-accent" aria-hidden="true" />
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition outline-none hover:border-brand-accent/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand-accent md:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-site-navigation"
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
          id="mobile-site-navigation"
          aria-hidden={!isMenuOpen}
          className={`grid overflow-hidden px-3 transition-[grid-template-rows,opacity] duration-300 md:hidden ${
            isMenuOpen
              ? "grid-rows-[1fr] border-t border-white/10 pb-3 opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <nav
              className="grid gap-1 pt-3 text-sm text-slate-200"
              aria-label="Mobile navigation"
            >
              {[...navItems, contactItem].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  tabIndex={isMenuOpen ? undefined : -1}
                  aria-current={activeSection === item.id ? "location" : undefined}
                  className={`flex min-h-11 items-center rounded-xl px-3 transition outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent ${
                    activeSection === item.id
                      ? "bg-white/[0.1] text-white"
                      : "hover:bg-white/[0.07] hover:text-white"
                  }`}
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
