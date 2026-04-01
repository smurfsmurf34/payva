"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  GradientCard,
  Badge,
  Button,
  TexturedButton,
  Separator,
} from "@/components/ui";
import {
  Package,
  Truck,
  Palette,
  Timer,
  Warehouse,
  Code,
  Notepad,
  Envelope,
  ArrowDown,
  Star,
  Lightning,
  HandHeart,
  Sparkle,
  TShirt,
  Baseball,
  ArrowRight,
  X,
} from "@phosphor-icons/react";

/* ─── Data ─── */
const hats = [
  { src: "/products/hats/purple-white.png", label: "Purple / White Embroidery" },
  { src: "/products/hats/black-tonal.png", label: "Black / Tonal Embroidery" },
];

const caps = [
  { src: "/products/caps/black-white.png", label: "Black / White Embroidery" },
  { src: "/products/caps/black-tonal.png", label: "Black / Tonal Embroidery" },
  { src: "/products/caps/navy-purple.png", label: "Navy / Purple Embroidery" },
];

const polos = [
  { src: "/products/polos/purple-logo.png", label: "Purple Logo" },
  { src: "/products/polos/white-logo.png", label: "White Logo" },
  { src: "/products/polos/tonal-logo.png", label: "Tonal Logo" },
];

const hoodieColors = [
  "army","beige","black-edge","brass","bright-orange","chocolate","clove",
  "cobalt-blue","creme","dark-red","dolphin-blue","ivy","mushroom","navy",
  "off-black","patchulli","rose-quartz","sage","vintage-black",
];

const creative = [
  { src: "/products/creative/teddy-bear.png", label: "Branded Teddy Bear" },
  { src: "/products/creative/notebook.png", label: "Debossed Notebook & Pen" },
  { src: "/products/creative/tennis-ball.png", label: "Custom Tennis Ball" },
];

function colorLabel(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ─── Lightbox ─── */
function Lightbox({
  src,
  label,
  onClose,
}: {
  src: string;
  label: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close"
      >
        <X size={24} weight="bold" />
      </button>
      <div
        className="relative w-[90vw] h-[85vh] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={label}
          fill
          className="object-contain drop-shadow-2xl"
          sizes="90vw"
          priority
        />
        <p className="absolute bottom-[-2rem] left-0 right-0 text-center text-sm text-white/70 font-medium">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ─── Reusable bits ─── */
function SectionHeading({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
}) {
  return (
    <div className="mb-8">
      {badge && (
        <Badge variant="info" className="mb-3">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-[var(--muted)]">{subtitle}</p>
      )}
    </div>
  );
}

function ProductImage({
  src,
  label,
  size = "lg",
  onClick,
}: {
  src: string;
  label: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}) {
  const heights = { sm: "h-44", md: "h-64", lg: "h-80" };
  return (
    <div className="group cursor-zoom-in" onClick={onClick}>
      <div
        className={`relative ${heights[size]} w-full rounded-2xl overflow-hidden bg-white border border-[var(--card-border)] hover:shadow-lg transition-all duration-300`}
      >
        <Image
          src={src}
          alt={label}
          fill
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <p className="mt-2.5 text-sm font-medium text-center">{label}</p>
    </div>
  );
}

function HoodieGrid({
  type,
  title,
  subtitle,
  badge,
  onImageClick,
}: {
  type: "standard" | "tonal";
  title: string;
  subtitle: string;
  badge: string;
  onImageClick: (src: string, label: string) => void;
}) {
  const folder = type === "standard" ? "hoodies-standard" : "hoodies-tonal";
  return (
    <div>
      <SectionHeading title={title} subtitle={subtitle} badge={badge} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {hoodieColors.map((color) => {
          const src = `/products/${folder}/${color}.png`;
          const label = colorLabel(color);
          return (
            <ProductImage
              key={color}
              src={src}
              label={label}
              size="sm"
              onClick={() => onImageClick(src, label)}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function PayvaPresentation() {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  const openLightbox = (src: string, label: string) => setLightbox({ src, label });
  const closeLightbox = () => setLightbox(null);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Lightbox overlay */}
      {lightbox && (
        <Lightbox src={lightbox.src} label={lightbox.label} onClose={closeLightbox} />
      )}

      {/* ━━━ NAV ━━━ */}
      <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/canarycanarylogo.svg"
              alt="Canary Canary"
              width={28}
              height={28}
              className="h-7 w-auto"
            />
            <span className="font-semibold tracking-tight">Canary Canary</span>
            <span className="text-[var(--muted)] text-sm hidden sm:inline">×</span>
            <Image
              src="/payva-logo.png"
              alt="Payva"
              width={60}
              height={24}
              className="h-5 w-auto hidden sm:inline"
            />
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
            <a href="#products" className="hover:text-[var(--foreground)] transition-colors">Products</a>
            <a href="#hoodies" className="hover:text-[var(--foreground)] transition-colors">Hoodies</a>
            <a href="#creative" className="hover:text-[var(--foreground)] transition-colors">Creative</a>
            <a href="#how-we-work" className="hover:text-[var(--foreground)] transition-colors">How We Work</a>
          </div>
        </div>
      </nav>

      {/* ━━━ HERO ━━━ */}
      <section className="relative pt-14 min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Subtle gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-[var(--background-tertiary)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,var(--primary),transparent_70%)]" />

        <div className="relative text-center px-6 animate-fade-in-up">
          <div className="inline-block mb-6">
            <Badge variant="info">Custom Merch Concepts</Badge>
          </div>

          <div className="flex items-center justify-center mb-8">
            <Image
              src="/canarycanarylogo.svg"
              alt="Canary Canary"
              width={220}
              height={80}
              className="h-16 md:h-20 w-auto"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Canary Canary
            <span className="block text-gradient">× Payva</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)] max-w-xl mx-auto">
            A curated selection of our most popular products across clients -
            but this is just the starting point. The options are limitless.
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 mt-10 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            Scroll to explore
            <ArrowDown size={16} className="animate-float" />
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-28">
        {/* ━━━ DAD HATS ━━━ */}
        <section id="products">
          <SectionHeading
            title="Dad Hats"
            subtitle="Unstructured, low-profile cotton twill with embroidered logo"
            badge="Headwear"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hats.map((h) => (
              <ProductImage key={h.src} {...h} size="lg" onClick={() => openLightbox(h.src, h.label)} />
            ))}
          </div>
        </section>

        <Separator />

        {/* ━━━ PERFORMANCE CAPS ━━━ */}
        <section>
          <SectionHeading
            title="Performance Caps"
            subtitle="Structured, mid-profile with perforated panels - 3D puff & flat embroidery"
            badge="Headwear"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caps.map((c) => (
              <ProductImage key={c.src} {...c} size="lg" onClick={() => openLightbox(c.src, c.label)} />
            ))}
          </div>
        </section>

        <Separator />

        {/* ━━━ POLOS ━━━ */}
        <section>
          <SectionHeading
            title="Polos"
            subtitle="Performance moisture-wicking polo with left-chest embroidery - 3 colorways"
            badge="Apparel"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {polos.map((p) => (
              <ProductImage key={p.src} {...p} size="lg" onClick={() => openLightbox(p.src, p.label)} />
            ))}
          </div>
        </section>

        <Separator />

        {/* ━━━ TEES ━━━ */}
        <section>
          <SectionHeading
            title="Tees"
            subtitle="Nike Dri-FIT cotton blend with center-chest screen print"
            badge="Apparel"
          />
          <div className="max-w-lg mx-auto">
            <ProductImage
              src="/products/tees/white-purple.png"
              label="White / Purple Print"
              size="lg"
              onClick={() => openLightbox("/products/tees/white-purple.png", "White / Purple Print")}
            />
          </div>
        </section>

        <Separator />

        {/* ━━━ HOODIES ━━━ */}
        <section id="hoodies" className="space-y-20">
          <HoodieGrid
            type="standard"
            title="Hoodies - Standard Embroidery"
            subtitle="Heavyweight fleece pullover with white center-chest embroidery - 19 colorways"
            badge="19 Colorways"
            onImageClick={openLightbox}
          />

          <Separator label="Tonal Version" />

          <HoodieGrid
            type="tonal"
            title="Hoodies - Tonal Embroidery"
            subtitle="Heavyweight fleece pullover with tone-on-tone center-chest embroidery - 19 colorways"
            badge="19 Colorways"
            onImageClick={openLightbox}
          />
        </section>

        <Separator />

        {/* ━━━ CREATIVE / BEYOND MERCH ━━━ */}
        <section id="creative">
          <SectionHeading
            title="Beyond Merch"
            subtitle="Apparel is just the beginning. With access to millions of products across every category, if you can dream it, we can make it. Here are a few ideas to get things started."
            badge="Creative"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {creative.map((c) => (
              <ProductImage key={c.src} {...c} size="lg" onClick={() => openLightbox(c.src, c.label)} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                icon: <Star size={20} weight="duotone" />,
                title: "Drinkware",
                items: ["Hydro Flask / Yeti-style bottles", "Insulated tumblers with lid", "Color-matched to Payva purple"],
              },
              {
                icon: <Notepad size={20} weight="duotone" />,
                title: "Lifestyle & Study",
                items: ["Notebooks & journals", "AirPods & tech cases", "USB-C power banks", "Laptop sleeves"],
              },
              {
                icon: <Lightning size={20} weight="duotone" />,
                title: "Seasonal / Event",
                items: ["World Cup 2026 soccer jerseys", "Rally towels for events", "Custom tennis balls", "Golf balls & tees"],
              },
              {
                icon: <Sparkle size={20} weight="duotone" />,
                title: "Plush & Novelty",
                items: ["Custom teddy bear / mascot", "Branded stress balls", "Mini branded sports balls", "Magic eight balls"],
              },
            ].map((cat) => (
              <Card key={cat.title}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[var(--primary)]">{cat.icon}</span>
                  <h4 className="font-semibold text-sm uppercase tracking-wider">{cat.title}</h4>
                </div>
                <ul className="space-y-1.5 text-sm text-[var(--muted)]">
                  {cat.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card variant="glass" className="text-center max-w-2xl mx-auto">
            <p className="text-sm text-[var(--muted)]">
              Your vision drives everything. Send us references or mood boards and
              our design team will turn them around fast. These are just starting
              points - we&apos;re ready to run with whatever direction feels right for the brand.
            </p>
          </Card>
        </section>

        <Separator />

        {/* ━━━ HOW WE WORK ━━━ */}
        <section id="how-we-work">
          <SectionHeading
            title="How We Work"
            subtitle="From production to fulfillment, we handle the entire process so you can focus on your brand. No setup fees, no complexity - here's how it all works."
            badge="Fulfillment"
          />

          {/* Service tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <GradientCard icon={<Truck size={60} />} gradient="primary">
              <p className="text-xs uppercase tracking-wider text-white/70">Service</p>
              <p className="text-lg font-bold mt-1">Bulk Production</p>
              <p className="text-sm text-white/70 mt-2">
                We produce your order in bulk and ship it straight to your door.
              </p>
            </GradientCard>

            <GradientCard icon={<Warehouse size={60} />} gradient="success">
              <p className="text-xs uppercase tracking-wider text-white/70">Service</p>
              <p className="text-lg font-bold mt-1">Warehousing & Fulfillment</p>
              <p className="text-sm text-white/70 mt-2">
                We hold your inventory and ship orders directly to your customers.
              </p>
            </GradientCard>

            <GradientCard icon={<HandHeart size={60} />} gradient="warning">
              <p className="text-xs uppercase tracking-wider text-white/70">Service</p>
              <p className="text-lg font-bold mt-1">Custom Packaging & Kitting</p>
              <p className="text-sm text-white/70 mt-2">
                Handwritten cards, branded packaging, and curated kits that make every unboxing memorable.
              </p>
            </GradientCard>

            <GradientCard icon={<Code size={60} />} gradient="gold">
              <p className="text-xs uppercase tracking-wider text-white/70">Service</p>
              <p className="text-lg font-bold mt-1">Ordering & Integrations</p>
              <p className="text-sm text-white/70 mt-2">
                Place orders through our portal or connect via API to your existing systems.
              </p>
            </GradientCard>
          </div>

          {/* Fulfillment details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader
                title="Turnaround"
                description="How fast orders ship"
                action={<Timer size={20} className="text-[var(--primary)]" weight="duotone" />}
              />
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="font-medium">Bulk production</span><span className="text-[var(--muted)]">10-14 biz days</span></div>
                <div className="flex justify-between"><span className="font-medium">Print-on-demand</span><span className="text-[var(--muted)]">Ships in 2-7 days</span></div>
                <div className="flex justify-between"><span className="font-medium">Stocked inventory</span><span className="text-[var(--muted)]">Same / next day</span></div>
                <div className="flex justify-between"><span className="font-medium">Samples</span><span className="text-[var(--muted)]">7-10 biz days</span></div>
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Minimums"
                description="How much you need to order"
                action={<Package size={20} className="text-[var(--primary)]" weight="duotone" />}
              />
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="font-medium">Standard minimum</span><span className="text-[var(--muted)]">24 pieces</span></div>
                <div className="flex justify-between"><span className="font-medium">Print-on-demand</span><span className="text-[var(--muted)]">No minimum</span></div>
                <div className="flex justify-between"><span className="font-medium">Samples</span><span className="text-[var(--muted)]">No minimum</span></div>
                <div className="flex justify-between"><span className="font-medium">Setup fees</span><span className="text-[var(--muted)]">None</span></div>
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Decoration"
                description="How we apply your brand"
                action={<Palette size={20} className="text-[var(--primary)]" weight="duotone" />}
              />
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="font-medium">Embroidery</span><span className="text-[var(--muted)]">Up to 12 colors</span></div>
                <div className="flex justify-between"><span className="font-medium">Screen print</span><span className="text-[var(--muted)]">Up to 6 colors</span></div>
                <div className="flex justify-between"><span className="font-medium">Heat transfer / DTG</span><span className="text-[var(--muted)]">Full-color photo</span></div>
                <div className="flex justify-between"><span className="font-medium">Deboss / laser etch</span><span className="text-[var(--muted)]">Leather & drinkware</span></div>
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Shipping"
                description="Getting product to your people"
                action={<Truck size={20} className="text-[var(--primary)]" weight="duotone" />}
              />
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="font-medium">Domestic ground</span><span className="text-[var(--muted)]">3-5 biz days</span></div>
                <div className="flex justify-between"><span className="font-medium">Express</span><span className="text-[var(--muted)]">1-2 biz days</span></div>
                <div className="flex justify-between"><span className="font-medium">Drop-ship</span><span className="text-[var(--muted)]">Direct to events/offices</span></div>
                <div className="flex justify-between"><span className="font-medium">Cutoff for stocked</span><span className="text-[var(--muted)]">Same-day if before cutoff</span></div>
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Samples & Proofs"
                description="Try before you buy"
                action={<Envelope size={20} className="text-[var(--primary)]" weight="duotone" />}
              />
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="font-medium">Digital proofs</span><span className="text-[var(--muted)]">Within 48 hrs</span></div>
                <div className="flex justify-between"><span className="font-medium">Physical samples</span><span className="text-[var(--muted)]">Before bulk production</span></div>

              </div>
            </Card>

            <Card variant="gradient">
              <CardHeader
                title="How It Usually Goes"
                description="The typical client journey"
                action={<ArrowRight size={20} className="text-[var(--primary)]" weight="duotone" />}
              />
              <p className="text-sm text-[var(--muted)]">
                Most clients start with print-on-demand to test designs, then move to
                pre-produced inventory as volume grows. We&apos;ll help you find the
                right balance as the program scales.
              </p>
            </Card>
          </div>
        </section>

        <Separator />

        {/* ━━━ CLOSING ━━━ */}
        <section className="text-center py-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ready When You Are.
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)] max-w-lg mx-auto">
            Send us your references or mood boards and our design team will get
            moving. We&apos;ll have concepts back to you fast.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Image
              src="/canarycanarylogo.svg"
              alt="Canary Canary"
              width={140}
              height={50}
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-3 text-xs text-[var(--muted)]">
            Confidential - April 2026
          </p>
        </section>
      </div>
    </div>
  );
}
