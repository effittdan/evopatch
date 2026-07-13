import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Beaker,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Contact,
  FileText,
  FlaskConical,
  Grid3x3,
  HeartPulse,
  Layers,
  Menu,
  Microscope,
  PackageCheck,
  Ruler,
  Scissors,
  ShieldCheck,
  Sparkles,
  Thermometer,
  X,
} from "lucide-react";
import { toast } from "sonner";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";

import bgTexture from "@/assets/bg-texture.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "/media/product/evopatch-4x8-float.jpg" },
      { name: "twitter:image", content: "/media/product/evopatch-4x8-float.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "EvoPatch",
          brand: { "@type": "Brand", name: "Evologics" },
          description:
            "Sterile, dehydrated, double-layer human amniotic membrane allograft intended for homologous use as a protective wound covering in surgical settings.",
          image: "/media/product/evopatch-4x8-float.jpg",
          category: "Human amniotic membrane allograft (HCT/P)",
        }),
      },
    ],
  }),
  component: LandingPage,
});

const NAV = [
  { href: "#overview", label: "Overview" },
  { href: "#why-evopatch", label: "Why EvoPatch" },
  { href: "#biology", label: "Healing Biology" },
  { href: "#research", label: "Research" },
  { href: "#utility", label: "Surgical Utility" },
  { href: "#sizes", label: "Sizes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const SPECIALTIES = [
  "Colorectal Surgery",
  "General Surgery",
  "Obstetrics & Gynecology",
  "Urology",
  "Surgical Oncology",
  "Cardiothoracic Surgery",
  "Thoracic Surgery",
  "Vascular Surgery",
  "Plastic & Reconstructive Surgery",
  "Orthopedic Surgery",
  "Spine Surgery",
  "Podiatry",
  "Wound Care",
  "Hospital Supply Chain",
  "Other",
];

const CONTACT_EMAIL = "theresa@evologicsamerica.com";
const CONTACT_SUBJECT = "EvoPatch product information request";

function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <Hero />
        <TrustStrip />
        <Differentiation />
        <WhatIs />
        <HealingBiology />
        <EvoPatchDifference />
        <Research />
        <SurgicalUtility />
        <Attributes />
        <Sizes />
        <Handling />
        <WorkflowStorage />
        <FAQ />
        <Compliance />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Nav({ navOpen, setNavOpen }: { navOpen: boolean; setNavOpen: (v: boolean) => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="Evologics EvoPatch">
          <img src="/brand/evologics-logo-wide.png" alt="Evologics" className="h-8 w-auto sm:h-9" />
        </a>
        <nav className="hidden items-center gap-6 xl:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden xl:block">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-primary px-5 text-primary-foreground hover:opacity-90"
          >
            <a href="#contact">Request Information</a>
          </Button>
        </div>
        <button
          className="rounded-md p-2 text-foreground xl:hidden"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {navOpen && (
        <div className="border-t border-hairline bg-background xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setNavOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground hover:bg-primary-soft"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2 rounded-full">
              <a href="#contact" onClick={() => setNavOpen(false)}>
                Request Information
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 matrix-grid opacity-60" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-multiply"
        style={{
          backgroundImage: `url(${bgTexture.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        id="overview"
        className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:pb-28"
      >
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 fade-in-up">
            <img src="/brand/evo-logo-mark.png" alt="" className="mb-5 h-14 w-auto sm:h-16" />
            <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                Evologics · Double-Layer Human Amnion Allograft
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              EvoPatch
              <sup className="ml-1 align-super text-[0.5em] leading-none">TM</sup>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Purpose-built amnion coverage for the surgical healing environment.
            </p>
            <div className="mt-8 max-w-2xl space-y-4 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
              <p>
                EvoPatch is a sterile, dehydrated human amniotic membrane allograft constructed with
                two layers of amnion and no chorion.
              </p>
              <p>
                Designed for robotic, laparoscopic, and open surgical workflows, EvoPatch provides
                protective human tissue coverage where the clinician determines that additional
                wound covering is appropriate.
              </p>
            </div>
            <p className="mt-6 max-w-2xl border-l-2 border-primary pl-4 text-[15px] italic text-foreground/70">
              Two layers of amnion. No side selection. One deliberate surgical platform.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-6 text-primary-foreground hover:opacity-90"
              >
                <a href="#contact">
                  Request Product Information
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 px-6 text-primary hover:bg-primary-soft"
              >
                <a href="#biology">Explore the Science</a>
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-hairline bg-white shadow-[0_30px_80px_-30px_oklch(0.36_0.075_148_/_0.35)]">
              <img
                src="/media/product/evopatch-4x8-float.jpg"
                alt="EvoPatch double-layer amnion graft product photo"
                className="absolute inset-0 h-full w-full object-contain p-5"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-hairline bg-card/90 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Double-layer amnion
                    </div>
                    <div className="truncate text-sm text-foreground/80">
                      Chorion-free · Omni-directional · Ambient storage
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: Layers, label: "Double-Layer Amnion" },
    { icon: ShieldCheck, label: "Chorion-Free" },
    { icon: Grid3x3, label: "Omni-Directional" },
    { icon: Scissors, label: "Surgical Workflow Ready" },
    { icon: Thermometer, label: "Ambient Storage" },
    { icon: FileText, label: "361 HCT/P" },
  ];
  return (
    <section className="border-y border-hairline bg-canvas">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-5 px-5 py-6 sm:grid-cols-3 lg:grid-cols-6 sm:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex min-w-0 items-center gap-3">
            <Icon className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-[13px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  intro,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {intro}
        </p>
      )}
    </div>
  );
}

function SectionArt({
  src,
  className,
  imageClassName,
}: {
  src: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      <img
        src={src}
        alt=""
        className={`absolute max-w-none select-none ${imageClassName ?? ""}`}
        loading="lazy"
      />
    </div>
  );
}

function Differentiation() {
  const items = [
    {
      title: "Human tissue architecture",
      body: "Derived from donated human amniotic membrane rather than a synthetic polymer or animal-derived material.",
    },
    {
      title: "Amnion-on-amnion construction",
      body: "Two layers of amnion form a single surgical covering.",
    },
    {
      title: "No orientation decision",
      body: "The omni-directional design eliminates the need to identify a maternal or fetal side during placement.",
    },
    {
      title: "Designed for surgical access",
      body: "Configurations support placement through robotic, laparoscopic, and open approaches.",
    },
  ];

  return (
    <section id="why-evopatch" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Differentiation"
            title="Not Just a Sheet. A Purpose-Built Amnion Platform."
            intro="Surgical tissue coverings have traditionally included synthetic films, absorbable barriers, hydrogels, collagen products, and human tissue allografts. EvoPatch begins with human amniotic membrane."
          />
          <blockquote className="mt-8 rounded-2xl border border-primary/20 bg-primary-soft/60 p-6">
            <p className="text-lg font-medium leading-snug text-foreground sm:text-xl">
              Protective coverage, built around the biology and realities of surgery.
            </p>
          </blockquote>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <Card
                key={item.title}
                className="border-hairline bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/30"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIs() {
  const cards = [
    [
      "Two Layers of Amnion",
      "EvoPatch uses an amnion-on-amnion configuration rather than an amnion-chorion laminate.",
    ],
    [
      "Chorion-Free",
      "The graft contains human amniotic membrane without an incorporated chorion layer.",
    ],
    [
      "Omni-Directional",
      "Either surface may face the treatment site, simplifying orientation during placement.",
    ],
    [
      "Broad Sheet Coverage",
      "The sheet format supports tissue planes, surgical sites, and anatomical surfaces where a flat graft is appropriate.",
    ],
  ];

  return (
    <section className="relative border-y border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="What Is EvoPatch"
            title="Human Amniotic Membrane, Engineered as a Surgical Covering"
            intro="EvoPatch is a sterile, dehydrated human amniotic membrane allograft intended for use as a wound covering."
          />
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
            <p>
              Its dual-layer construction provides a broad, continuous tissue format that can be
              selected according to the anatomy, procedural approach, and area requiring coverage.
            </p>
            <p>
              EvoPatch can be placed dry or hydrated with sterile saline at the discretion of the
              healthcare provider. It is packaged for single-patient use and stored at ambient
              temperature.
            </p>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(([title, body]) => (
              <Card key={title} className="border-hairline bg-card p-6">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HealingBiology() {
  const steps = [
    [
      "01",
      "Tissue Injury",
      "Surgical dissection disrupts the mesothelial surface and exposes the underlying extracellular matrix.",
    ],
    [
      "02",
      "Fibrin and Inflammatory Signaling",
      "Coagulation and inflammatory pathways respond rapidly as immune-cell recruitment begins.",
    ],
    [
      "03",
      "Repair or Fibrotic Bridging",
      "Fibroblasts and immune cells enter the site. Fibrin may be cleared or organized into collagen-rich fibrotic tissue.",
    ],
    [
      "04",
      "Surface Restoration",
      "Mesothelial recovery and balanced matrix remodeling help re-establish a functional tissue surface.",
    ],
  ];

  return (
    <section id="biology" className="relative overflow-hidden py-20 sm:py-28">
      <SectionArt
        src="/media/elements/evopatch-cell-element.jpg"
        className="opacity-[0.16] mix-blend-multiply"
        imageClassName="inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Healing Biology"
          title="The First Days After Surgery Can Shape the Tissue Response"
          intro="Surgical injury initiates a coordinated sequence involving coagulation, fibrin formation, inflammatory signaling, immune-cell recruitment, fibroblast activity, extracellular-matrix deposition, fibrinolysis, and tissue remodeling."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map(([number, title, body]) => (
            <Card key={title} className="border-hairline bg-card p-6">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 grid gap-8 rounded-3xl border border-primary/20 bg-primary-soft/55 p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-semibold leading-tight text-foreground">
              Coverage During a Biologically Active Interval
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
              EvoPatch is designed to provide protective tissue coverage during the early
              postoperative environment. It should not be described merely as material placed at the
              end of a procedure. It is a surgical tissue platform positioned at the intersection of
              anatomy, timing, and healing biology.
            </p>
          </div>
          <div className="lg:col-span-5">
            <BiologyPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function BiologyPanel() {
  return (
    <div className="relative min-h-72 overflow-hidden rounded-2xl border border-hairline bg-card p-6">
      <div className="absolute inset-0 matrix-grid opacity-70" />
      <div className="relative grid h-full place-items-center">
        <div className="relative h-52 w-full max-w-sm">
          <div className="absolute left-6 right-6 top-8 h-16 rounded-full border border-primary/25 bg-primary-soft" />
          <div className="absolute left-12 right-12 top-24 h-16 rounded-full border border-primary/30 bg-background" />
          <div className="absolute left-20 right-20 top-20 h-8 rounded-full bg-primary/85 shadow-lg" />
          <div className="absolute left-4 top-5 rounded-full border border-accent/50 bg-accent-soft px-3 py-1 text-xs font-semibold text-foreground">
            Layer 1
          </div>
          <div className="absolute bottom-10 right-4 rounded-full border border-accent/50 bg-accent-soft px-3 py-1 text-xs font-semibold text-foreground">
            Layer 2
          </div>
        </div>
      </div>
    </div>
  );
}

function EvoPatchDifference() {
  const items = [
    [
      "Dual-Layer Architecture",
      "Two layers of human amnion create the EvoPatch sheet configuration.",
    ],
    [
      "Thin, Flexible Profile",
      "Designed to adapt to surgical anatomy without the bulk associated with thicker multilayer materials.",
    ],
    ["Omni-Directional Placement", "No maternal-side or fetal-side identification is required."],
    [
      "Broad Configuration Range",
      "Multiple dimensions allow clinicians to select coverage appropriate to the procedural site.",
    ],
    [
      "Dry or Hydrated Handling",
      "EvoPatch may be placed directly from the sterile package or hydrated with sterile saline.",
    ],
    [
      "Ambient Storage",
      "Stored in a clean, dry environment at 15-30°C. No refrigeration is required.",
    ],
  ];

  return (
    <section className="relative border-y border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="The EvoPatch Difference"
            title="Designed Around Both Tissue and Technique"
            intro="EvoPatch brings together human amniotic membrane, dual-layer construction, omni-directional placement, and practical OR handling."
          />
          <div className="mt-8 overflow-hidden rounded-2xl border border-hairline bg-white">
            <img
              src="/media/product/evopatch-4x4-curl.jpg"
              alt="EvoPatch 4 by 4 double-layer amnion graft with flexible corner"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(([title, body]) => (
              <Card key={title} className="border-hairline bg-card p-6">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Research() {
  const questions = [
    "Local inflammatory signaling",
    "Macrophage behavior",
    "Tissue-plane preservation",
    "Collagen organization",
    "Material persistence and transformation",
    "Clinical translation",
  ];
  const pipeline = [
    [
      "Completed and Active Foundations",
      "Mechanistic evaluation, murine adhesion modeling, and retrospective gastrointestinal review.",
    ],
    [
      "Translational Development",
      "Large-animal gastrointestinal research and pelvic or gynecologic adhesion development.",
    ],
    [
      "Prospective Evaluation",
      "Future studies may assess adhesion incidence, severity, safety, material persistence, and tissue response.",
    ],
  ];

  return (
    <section id="research" className="relative overflow-hidden py-20 sm:py-28">
      <SectionArt
        src="/media/elements/evopatch-dna-strand.jpg"
        className="opacity-[0.11] mix-blend-multiply"
        imageClassName="-right-40 -top-16 w-[36rem] rotate-[-8deg] sm:w-[44rem] lg:w-[54rem]"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Science in Motion"
          title="Building the Evidence Behind the Tissue"
          intro="EvoPatch is part of an expanding scientific program examining how human amniotic membrane interacts with the postoperative environment."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((question) => (
            <Card key={question} className="border-hairline bg-card p-6">
              <Microscope className="h-5 w-5 text-primary" />
              <h3 className="mt-5 text-lg font-semibold text-foreground">{question}</h3>
            </Card>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-hairline bg-canvas p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-semibold leading-tight text-foreground">
                From Observation to Mechanism
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">
                Encouraging preclinical and retrospective observations are informing ongoing
                translational research. The numerical findings belong in a dedicated evidence page
                with study design, limitations, disclosures, and data-on-file language.
              </p>
              <p className="mt-4 rounded-xl border border-accent/30 bg-accent-soft/60 px-5 py-4 text-sm text-foreground/80">
                Preclinical and retrospective findings are investigational and should not be
                interpreted as establishing comparative clinical effectiveness. Controlled human
                studies are required to confirm clinical outcomes.
              </p>
            </div>
            <div className="grid gap-4 lg:col-span-7">
              {pipeline.map(([title, body]) => (
                <Card key={title} className="border-hairline bg-card p-5">
                  <h4 className="font-semibold text-foreground">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SurgicalUtility() {
  const groups = [
    [
      "Colorectal and Gastrointestinal",
      [
        "Lower anterior resection",
        "Colectomy and bowel resection",
        "Primary intestinal anastomosis",
        "Rectal stump procedures",
        "Adhesiolysis",
      ],
    ],
    [
      "Obstetrics and Gynecology",
      [
        "Endometriosis resection",
        "Myomectomy",
        "Hysterectomy",
        "Oophorectomy",
        "Pelvic adhesiolysis",
      ],
    ],
    [
      "Urology",
      [
        "Robotic or laparoscopic prostatectomy",
        "Urethral reconstruction",
        "Stricture procedures",
        "Fistula-repair environments",
      ],
    ],
    [
      "General and Surgical Oncology",
      [
        "Breast procedures",
        "Hernia procedures",
        "Abdominal and pelvic oncology",
        "Pancreatic procedures",
      ],
    ],
    [
      "Cardiothoracic, Thoracic, and Vascular",
      [
        "Pericardial coverage",
        "Sternal-edge coverage",
        "Conduit-harvest sites",
        "Esophagectomy",
        "Lobectomy",
      ],
    ],
  ];

  return (
    <section
      id="utility"
      className="relative overflow-hidden border-y border-hairline bg-canvas py-20 sm:py-28"
    >
      <SectionArt
        src="/media/elements/evopatch-dot-lines.jpg"
        className="opacity-[0.07] mix-blend-multiply"
        imageClassName="-bottom-32 -left-28 w-[58rem] sm:w-[72rem]"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Surgical Utility"
          title="Broad Coverage for Diverse Surgical Environments"
          intro="EvoPatch may be considered when a licensed clinician determines that additional wound covering is appropriate, consistent with the Instructions for Use, patient presentation, institutional protocol, and surgical judgment."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {groups.map(([title, procedures]) => (
            <Card key={title as string} className="border-hairline bg-card p-6">
              <h3 className="text-lg font-semibold leading-snug text-foreground">
                {title as string}
              </h3>
              <ul className="mt-4 space-y-2">
                {(procedures as string[]).map((procedure) => (
                  <li
                    key={procedure}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{procedure}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Procedure examples are informational and should not imply a particular clinical outcome.
        </p>
      </div>
    </section>
  );
}

function Attributes() {
  const attributes = [
    ["Donated Human Amniotic Membrane", "Processed from donated human placental tissue."],
    ["Double-Layer Construction", "Two layers of amnion form the finished graft."],
    ["Chorion-Free", "No chorion layer is incorporated into the product."],
    [
      "Sterile",
      "Final product sterilization is performed using gamma irradiation according to the current IFU.",
    ],
    ["Single-Patient Use", "EvoPatch must not be reused or re-sterilized."],
    [
      "Optional Hydration",
      "The healthcare provider may hydrate the graft with sterile saline prior to placement.",
    ],
    [
      "Natural Tissue Variation",
      "Color may vary from white or off-white to pale yellow, opaque, or light brown.",
    ],
    [
      "Tissue Traceability",
      "Allograft identification, size, product code, and expiration information support tracking.",
    ],
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Product Attributes"
          title="A Surgical Tissue Platform, Ready When Needed"
          intro="EvoPatch is designed for clinical handling, practical inventory management, and straightforward documentation."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {attributes.map(([title, body]) => (
            <Card key={title} className="border-hairline bg-card p-6">
              <PackageCheck className="h-5 w-5 text-primary" />
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sizes() {
  const rows = [
    ["EAP-11", "1×1 cm"],
    ["EAP-22", "2×2 cm"],
    ["EAP-23", "2×3 cm"],
    ["EAP-24", "2×4 cm"],
    ["EAP-35", "3×5 cm"],
    ["EAP-44", "4×4 cm"],
    ["EAP-46", "4×6 cm"],
    ["EAP-46B", "4×6 cm Butterfly"],
    ["EAP-48", "4×8 cm"],
    ["EAP-66", "6×6 cm End-to-End"],
    ["EAP-67", "6×7 cm"],
    ["EAP-1010", "10×10 cm"],
    ["EAP-0612", "6×12 cm"],
    ["EAP-0212", "2×12 cm"],
  ];

  return (
    <section id="sizes" className="relative border-y border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Product Configurations"
            title="Coverage From Focused Sites to Broad Surgical Fields"
            intro="EvoPatch is available in a range of dimensions, allowing clinicians and facilities to match the graft configuration to anatomy and procedural requirements."
          />
          <div className="mt-8 grid gap-4">
            <div className="overflow-hidden rounded-2xl border border-hairline bg-white">
              <img
                src="/media/product/evopatch-4x4-flat.jpg"
                alt="EvoPatch 4 by 4 double-layer amnion graft"
                className="h-56 w-full object-cover sm:h-64"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-hairline bg-white">
                <img
                  src="/media/product/evopatch-4x8-flat.jpg"
                  alt="EvoPatch 4 by 8 double-layer amnion graft"
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-hairline bg-white">
                <img
                  src="/media/product/evopatch-6x6-end-to-end-flat.jpg"
                  alt="EvoPatch 6 by 6 end-to-end graft with center opening"
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-hairline bg-card">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-primary-soft text-primary">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">SKU</th>
                  <th className="px-4 py-3 text-left font-semibold">Product</th>
                  <th className="px-4 py-3 text-left font-semibold">Size</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([sku, size]) => (
                  <tr key={sku} className="border-t border-hairline">
                    <td className="px-4 py-3 font-semibold text-foreground">{sku}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      EvoPatch Amnion Graft Double-Layer
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Final page should be checked against the current live SKU and labeling master before
            launch.
          </p>
        </div>
      </div>
    </section>
  );
}

function Handling() {
  const steps = [
    ["Inspect", "Confirm packaging integrity and expiration date."],
    ["Open", "Use sterile technique and deliver the sterile inner pouch to the sterile field."],
    ["Remove", "Carefully remove EvoPatch from the inner pouch."],
    ["Prepare", "Use dry or hydrate with sterile saline at clinician discretion."],
    ["Place", "Position the graft over the area where protective wound coverage is appropriate."],
    ["Document", "Record the allograft identification and relevant procedural information."],
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Handling Overview"
          title="Simple Steps. Deliberate Placement."
          intro="Always follow the current product Instructions for Use."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map(([title, body], index) => (
            <Card key={title} className="border-hairline bg-card p-5">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Step {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowStorage() {
  const bullets = [
    "Ambient-temperature storage",
    "No refrigeration required",
    "Compact sterile packaging",
    "Multiple surgical configurations",
    "Dry presentation",
    "Optional saline hydration",
    "No side-orientation requirement",
    "Single-patient use",
    "Lot and expiration traceability",
    "Product education available from Evologics",
  ];

  return (
    <section className="relative border-y border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Workflow and Storage"
            title="Designed for Real Operating-Room Logistics"
            intro="EvoPatch supports practical inventory management and procedural readiness."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex min-w-0 items-start gap-3 rounded-xl border border-hairline bg-card px-4 py-3"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0 text-sm font-medium text-foreground">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-hairline bg-card">
              <img
                src="/media/product/evopatch-4x8-close.jpg"
                alt="Close-up of flexible EvoPatch double-layer amnion graft texture"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-hairline bg-card">
              <img
                src="/media/product/evopatch-6x6-end-to-end-close.jpg"
                alt="Close-up of EvoPatch 6 by 6 end-to-end graft center opening"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    [
      "What is EvoPatch?",
      "EvoPatch is a sterile, dehydrated, double-layer human amniotic membrane allograft intended for use as a wound covering.",
    ],
    [
      "What makes EvoPatch different from an amnion-chorion graft?",
      "EvoPatch is constructed from two layers of amnion and does not incorporate a chorion layer.",
    ],
    [
      "Does EvoPatch have a required orientation?",
      "No. EvoPatch is omni-directional, so there is no required up-or-down orientation for placement.",
    ],
    [
      "Is EvoPatch an FDA-cleared adhesion-prevention device?",
      "No. EvoPatch is marketed as a 361 HCT/P for homologous use as a wound covering. It has not been cleared or approved by FDA as an adhesion-prevention device.",
    ],
    [
      "Can EvoPatch be hydrated?",
      "Yes. At the healthcare provider's discretion, the graft may be hydrated with sterile saline prior to placement.",
    ],
    [
      "Does EvoPatch require refrigeration?",
      "No. EvoPatch is stored in a clean, dry environment at ambient temperature, 15-30°C.",
    ],
    [
      "Can EvoPatch be used in robotic surgery?",
      "EvoPatch configurations are designed to support robotic, laparoscopic, and open surgical workflows. Use must remain consistent with the Instructions for Use and clinician judgment.",
    ],
    [
      "What evidence is being developed?",
      "Evologics is evaluating EvoPatch and human amniotic membrane through mechanistic, preclinical, retrospective, large-animal, and proposed prospective clinical research.",
    ],
  ];

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" centered />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {items.map(([q, a], i) => (
            <AccordionItem
              key={q}
              value={`item-${i}`}
              className="rounded-2xl border border-hairline bg-card px-5 data-[state=open]:border-primary/30 data-[state=open]:bg-primary-soft/30"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                {q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-foreground/75">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section className="relative border-y border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Regulatory and Use Information"
          title="Human Tissue, Responsibly Presented"
        />
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
          <p>
            EvoPatch is a human cells, tissues, and cellular and tissue-based product, or HCT/P.
          </p>
          <p>
            Evologics has determined that EvoPatch meets the criteria for regulation solely under
            Section 361 of the Public Health Service Act and 21 CFR Part 1271. The product is
            minimally manipulated and intended for homologous use.
          </p>
          <p>
            EvoPatch has not been cleared or approved by the U.S. Food and Drug Administration. FDA
            establishment registration or HCT/P listing does not constitute FDA approval or a
            determination of regulatory compliance.
          </p>
          <p>
            Use must be consistent with the current Instructions for Use, applicable labeling,
            clinician judgment, and institutional protocol.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary p-10 text-primary-foreground shadow-[0_40px_100px_-30px_oklch(0.36_0.075_148_/_0.5)] sm:p-16">
          <div className="pointer-events-none absolute inset-0 matrix-grid opacity-[0.12]" />
          <div className="relative max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
              Request information
            </div>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Give the Surgical Site More Than Coverage Alone
            </h2>
            <p className="mt-5 max-w-2xl text-primary-foreground/85 sm:text-lg">
              EvoPatch brings together human amniotic membrane, double-layer construction,
              omni-directional placement, and a growing scientific program in one surgical tissue
              platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <a href="#contact">Request Product Overview</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="#contact">Request Sizing Information</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="#contact">Speak With Evologics</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [contactMe, setContactMe] = useState(true);

  const buildMailtoHref = (data: FormData) => {
    const value = (field: string) => String(data.get(field) ?? "").trim();
    const subjectName = value("name") || "Website visitor";
    const lines = [
      "EvoPatch product information request",
      "",
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not provided"}`,
      `Facility: ${value("facility") || "Not provided"}`,
      `Specialty: ${value("specialty") || "Not provided"}`,
      `State: ${value("state") || "Not provided"}`,
      `Procedure or area of interest: ${value("interest") || "Not provided"}`,
      `Would like representative contact: ${contactMe ? "Yes" : "No"}`,
      "",
      "Message:",
      value("message"),
    ];

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `EvoPatch product information request from ${subjectName}`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || name.length > 120) {
      toast.error("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!message || message.length > 2000) {
      toast.error("Please add a short message.");
      return;
    }

    setSubmitting(true);
    try {
      data.set("contact_me", contactMe ? "yes" : "no");
      const encoded = new URLSearchParams();
      data.forEach((value, key) => encoded.append(key, String(value)));

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      window.location.href = buildMailtoHref(data);
      toast.success("Thanks - opening an email draft to Evologics.");
      form.reset();
      setContactMe(true);
    } catch (error) {
      console.error(error);
      toast.error("We could not submit the request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative border-t border-hairline bg-canvas py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Contact"
            title="Request EvoPatch Information"
            intro="Complete the form and an Evologics representative will follow up with product materials, available configurations, institutional-review documentation, and next steps."
          />
          <div className="mt-8 space-y-4 rounded-2xl border border-hairline bg-card p-6">
            <InfoRow
              icon={ShieldCheck}
              title="361 HCT/P · Homologous Use"
              body="Regulated under Section 361 of the Public Health Service Act and 21 CFR Part 1271."
            />
            <InfoRow
              icon={Beaker}
              title="Science-forward positioning"
              body="Protective human tissue coverage with active evidence development."
            />
            <InfoRow
              icon={Contact}
              title="Evologics support"
              body="Product education, sizing information, and operational support for surgical workflows."
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            name="evopatch-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-2xl border border-hairline bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <input type="hidden" name="form-name" value="evopatch-contact" />
            <input type="hidden" name="subject" value={CONTACT_SUBJECT} />
            <p className="hidden">
              <label>
                Do not fill this out:
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required maxLength={120} />
              <Field
                label="Professional email"
                name="email"
                type="email"
                required
                maxLength={254}
              />
              <Field label="Phone" name="phone" type="tel" maxLength={40} />
              <Field label="Facility" name="facility" maxLength={160} />
              <Field label="State" name="state" maxLength={60} />
              <SpecialtyField />
              <div className="sm:col-span-2">
                <Field label="Procedure or area of interest" name="interest" maxLength={180} />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-foreground">
                Message<span className="ml-0.5 text-accent">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                maxLength={2000}
                rows={5}
                placeholder="Tell us about your specialty, procedure focus, or product information needs."
                className="mt-2 rounded-xl border-hairline bg-background focus-visible:ring-primary"
              />
            </div>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-hairline bg-background p-4">
              <Checkbox
                id="contactMe"
                checked={contactMe}
                onCheckedChange={(value) => setContactMe(Boolean(value))}
                className="mt-0.5"
              />
              <span className="text-sm text-foreground/85">
                I would like an Evologics representative to contact me about EvoPatch.
              </span>
            </label>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 sm:w-auto"
            >
              {submitting ? "Sending..." : "Submit Request"}
              {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
            <p className="text-xs text-muted-foreground">
              By submitting this form, you consent to Evologics contacting you about EvoPatch.
              Please do not include patient-identifying or protected health information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <div className="min-w-0">
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}

function SpecialtyField() {
  return (
    <div>
      <Label htmlFor="specialty" className="text-sm font-medium text-foreground">
        Specialty
      </Label>
      <div className="relative mt-2">
        <select
          id="specialty"
          name="specialty"
          className="h-10 w-full appearance-none rounded-xl border border-hairline bg-background px-3 pr-10 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-primary/20"
          defaultValue=""
        >
          <option value="">Select a specialty</option>
          {SPECIALTIES.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <Label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-accent">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className="mt-2 rounded-xl border-hairline bg-background focus-visible:ring-primary"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src="/brand/evologics-logo-wide.png" alt="Evologics" className="h-16 w-auto" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              EvoPatch is a sterile, dehydrated, double-layer human amniotic membrane allograft
              intended for homologous use as a wound covering. It is chorion-free, omni-directional,
              and available in multiple configurations for robotic, laparoscopic, and open surgical
              workflows.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="eyebrow">Explore</div>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-foreground/80 hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="eyebrow">Company</div>
            <div className="mt-4 text-sm text-foreground/80">Evologics</div>
            <p className="mt-2 text-xs text-muted-foreground">
              Evolving biologics for surgical professionals.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-hairline pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            EvoPatch is an HCT/P regulated solely under Section 361 of the Public Health Service Act
            and 21 CFR Part 1271. EvoPatch has not been cleared or approved by FDA. Use must be
            consistent with the current Instructions for Use, applicable labeling, clinician
            judgment, and institutional protocol.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Evologics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
