import Link from "next/link";
import { businessSettings } from "@/content/business";
import { footerNav, footerServiceLinks } from "@/content/navigation";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { DemoNotice } from "@/components/layout/DemoNotice";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-ivory">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Wordmark inverted href="/" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-ivory/75">
            {businessSettings.positioning} Serving {businessSettings.areaServed}.
          </p>
          <p className="mt-4 text-sm text-ivory/70">
            Serving Central Florida since {businessSettings.servingSince}.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a className="hover:text-gold-soft" href={businessSettings.phoneHref}>
                {businessSettings.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="hover:text-gold-soft"
                href={`mailto:${businessSettings.primaryEmail}`}
              >
                {businessSettings.primaryEmail}
              </a>
            </li>
            <li className="text-ivory/70">{businessSettings.areaServed}</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Services
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {footerServiceLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-gold-soft" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Explore
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-gold-soft" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/60">
            © {new Date().getFullYear()} {businessSettings.businessName}
          </p>
          <DemoNotice compact inverted />
        </Container>
      </div>
    </footer>
  );
}
