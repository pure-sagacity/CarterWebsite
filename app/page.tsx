"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Crown,
  Flame,
  Gem,
  Quote,
  Rocket,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const heroFacts = [
  {
    icon: Sparkles,
    label: "Aura Output",
    value: "9999+",
    description: "The room brightness spikes when Carter walks in.",
  },
  {
    icon: Trophy,
    label: "Main Character Score",
    value: "Infinite",
    description: "Every moment feels like a season finale around him.",
  },
  {
    icon: Crown,
    label: "Legend Status",
    value: "Certified",
    description: "A living highlight reel with zero off days.",
  },
];

const milestones = [
  {
    year: "Origins",
    title: "Calm start. Loud impact.",
    description:
      "From day one, Carter turned regular days into stories people still retell.",
  },
  {
    year: "Breakout",
    title: "Raised the standard.",
    description:
      "When the energy dipped, Carter reset the entire room with one move.",
  },
  {
    year: "Now",
    title: "Peak form unlocked.",
    description:
      "Confidence on max, style on point, legacy expanding in real time.",
  },
];

const galleryNotes = [
  "The angle is cinematic because Carter is.",
  "No filters needed when the aura carries.",
  "Proof that legend mode is always active.",
];

const sectionMotion: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-56 -left-40 h-112 w-md rounded-full bg-chart-2/20 blur-3xl" />
        <div className="absolute -right-32 -bottom-48 h-104 w-104 rounded-full bg-chart-1/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,oklch(0.6_0_0/0.12)_1px,transparent_0)] bg-size-[20px_20px]" />
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-10 sm:px-8 md:gap-20 md:px-12 md:py-16">
        <motion.section
          initial="hidden"
          animate="show"
          variants={sectionMotion}
          className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <Card className="w-fit bg-secondary/70">
              <CardContent className="flex items-center gap-2 py-3 text-sm font-medium">
                <Flame className="size-4 text-chart-2" />
                Carter Appreciation Department
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Carter is not just him.
                <span className="block text-chart-3">Carter is the entire era.</span>
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                This page exists for one reason: to document elite presence. Every
                frame, every moment, every entrance confirms it. Carter is the
                benchmark and everyone else is taking notes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#timeline">
                  <Rocket className="size-4" />
                  See The Legacy
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <a href="#gallery">
                  <Star className="size-4" />
                  View The Highlights
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Avatar size="lg" className="ring-2 ring-primary/20">
                <AvatarImage src="/carter.jpeg" alt="Carter portrait" />
                <AvatarFallback>CR</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Carter</p>
                <p className="text-sm text-muted-foreground">
                  Human form. Legendary settings.
                </p>
              </div>
            </div>
          </div>

          <Card className="overflow-hidden border bg-card/70 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src="/carter.jpeg"
                  alt="Carter smiling in a gray hoodie"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm font-medium">Live Aura Feed</p>
                  <p className="text-xs text-muted-foreground">
                    Signal strength: impossible to ignore.
                  </p>
                </div>
                <Gem className="size-5 text-chart-3" />
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          className="space-y-5"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Confirmed Metrics
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Numbers cannot contain Carter, but they can attempt to describe the
              scale.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {heroFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <Card key={fact.label} className="bg-card/70 backdrop-blur-sm">
                  <CardHeader>
                    <CardDescription className="flex items-center gap-2 text-xs uppercase tracking-[0.14em]">
                      <Icon className="size-4 text-chart-2" />
                      {fact.label}
                    </CardDescription>
                    <CardTitle className="text-2xl">{fact.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{fact.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="timeline"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          className="space-y-5"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Timeline Of Greatness
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              A quick history of how Carter became the standard everyone measures
              against.
            </p>
          </div>
          <Card className="bg-card/70 backdrop-blur-sm">
            <CardContent className="space-y-5 py-5">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="space-y-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-chart-3">
                      {milestone.year}
                    </p>
                    <div className="max-w-2xl space-y-1">
                      <p className="text-base font-medium">{milestone.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  {index < milestones.length - 1 ? <Separator /> : null}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
        >
          <Card className="bg-secondary/60">
            <CardContent className="space-y-4 py-8 sm:px-8">
              <Quote className="size-7 text-chart-2" />
              <p className="max-w-3xl text-xl leading-relaxed font-medium tracking-tight sm:text-2xl">
                "When Carter enters the frame, the whole story upgrades. That is
                not opinion. That is documented reality."
              </p>
              <p className="text-sm text-muted-foreground">
                Official statement from the Carter Glaze Editorial Board
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          id="gallery"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
          className="space-y-5"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Gallery Of Peak Moments
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Three frames. Zero misses.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryNotes.map((note, index) => (
              <Card key={note} className="overflow-hidden bg-card/70 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative aspect-4/5 overflow-hidden">
                    <Image
                      src="/carter.jpeg"
                      alt={`Carter highlight frame ${index + 1}`}
                      fill
                      className={
                        index === 0
                          ? "object-cover object-center"
                          : index === 1
                            ? "object-cover object-[48%_18%]"
                            : "object-cover object-[52%_28%]"
                      }
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{note}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionMotion}
        >
          <Card className="border-0 bg-linear-to-r from-chart-2/20 via-chart-1/20 to-chart-3/20">
            <CardContent className="flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center sm:px-8">
              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  Carter appreciation is not a trend.
                </p>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  It is a long-term commitment to recognizing excellence.
                </p>
              </div>
              <Button size="lg" className="rounded-full px-6">
                <Star className="size-4" />
                Stay Glazing
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  );
}
