"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { businessSettings } from "@/content/business";
import { footerServiceLinks, primaryNav } from "@/content/navigation";
import { buttonClassName } from "@/components/ui/button-styles";
import { Container } from "@/components/ui/Container";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";
import { Wordmark } from "@/components/ui/Wordmark";
import { clsx } from "@/lib/clsx";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuId = useId();

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const desktopItems = primaryNav.filter((item) => item.label !== "Services");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur">
      <Container className="flex h-[4.75rem] items-center justify-between gap-4">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {desktopItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={clsx(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-forest"
                    : "text-muted hover:text-forest",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={businessSettings.phoneHref}
            className={clsx(
              buttonClassName("outlineDark", "sm"),
              "shrink-0 px-3 sm:px-4",
            )}
            aria-label={`Call ${businessSettings.phoneDisplay}`}
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Call {businessSettings.phoneDisplay}</span>
          </a>
          <Link
            href="/request-quote"
            className={clsx(buttonClassName("gold", "sm"), "hidden md:inline-flex")}
          >
            Request a Site Visit
          </Link>
          <Link
            href="/request-quote"
            className={clsx(buttonClassName("gold", "sm"), "px-3 md:hidden")}
          >
            Site Visit
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-forest/15 text-forest xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id={menuId}
          className="border-t border-line bg-ivory xl:hidden"
        >
          <Container className="flex max-h-[calc(100dvh-4.75rem)] flex-col gap-6 overflow-y-auto py-6">
            <nav aria-label="Mobile">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Services
              </p>
              <ul className="mt-3 space-y-1">
                {footerServiceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md py-3 text-lg font-semibold text-forest"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 space-y-1 border-t border-line pt-4">
                {[
                  { href: "/our-work", label: "Our Work" },
                  { href: "/about", label: "About" },
                  { href: "/request-quote", label: "Request a Quote" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md py-3 text-lg font-medium text-charcoal"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-3 pb-4">
              <Link href="/request-quote" className={buttonClassName("gold", "lg")}>
                Request a Site Visit
              </Link>
              <a href={businessSettings.phoneHref} className={buttonClassName("forest", "lg")}>
                <PhoneIcon />
                Call {businessSettings.phoneDisplay}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
