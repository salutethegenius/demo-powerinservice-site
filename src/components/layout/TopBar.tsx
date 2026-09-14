import { businessSettings } from "@/content/business";
import { Container } from "@/components/ui/Container";
import { PhoneIcon } from "@/components/ui/Icons";

export function TopBar() {
  return (
    <div className="bg-forest-dark text-ivory">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-base tracking-wide">
        <p className="text-ivory/80">Serving {businessSettings.areaServed}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href={businessSettings.phoneHref}
            className="inline-flex items-center gap-1.5 font-semibold text-gold-soft hover:text-gold"
          >
            <PhoneIcon className="h-4 w-4" />
            {businessSettings.phoneDisplay}
          </a>
          <p className="hidden text-ivory/75 sm:block">
            {businessSettings.insuranceShort}
          </p>
        </div>
      </Container>
    </div>
  );
}
