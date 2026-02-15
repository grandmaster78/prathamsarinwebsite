"use client";

import { Nav } from "./components/Nav";
import {
  Shield,
  Code2,
  Megaphone,
  MapPin,
  Compass,
  GraduationCap,
  Rocket,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { TrustBarLogo } from "./components/TrustBarLogo";
import { IdentityConsole } from "./components/IdentityConsole";

const experienceCards = [
  {
    icon: Shield,
    title: "AI Builder Infrastructure",
    description:
      "Leading infrastructure for Identity and Auth that powers AI Builder—the foundation enabling secure, scalable AI agent deployments across Amazon.",
  },
  {
    icon: Code2,
    title: "Auth SDKs for Autonomous Agents",
    description:
      "Designing Auth SDKs for autonomous agents on Strands, enabling developers to build secure AI workflows with native identity integration.",
  },
  {
    icon: Megaphone,
    title: "Identity for Ads Agents",
    description:
      "Solving the Identity and Authorization challenge for Ads agents—ensuring advertisers and marketing AI tools operate with proper access controls.",
  },
];

const valuesPrinciples = [
  {
    title: "Earning Trust through Security",
    description:
      "Security isn't a checkbox—it's the foundation of trust. Every design decision prioritizes protecting sensitive data and ensuring agents operate within strictly scoped access.",
  },
  {
    title: "Scalable Identity",
    description:
      "Identity systems must scale from prototype to production. Building infrastructure that handles millions of agent-to-agent handoffs without compromising audit trails or compliance.",
  },
  {
    title: "Agentic Autonomy",
    description:
      "Enabling autonomous agents to make secure decisions at the last mile—the critical gap between intention and execution. Solving the scoped access challenge for AI.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Nav />

      <main>
        {/* Hero Section — Split Screen */}
        <section
          className="flex min-h-[calc(100vh-4rem)] flex-col justify-center bg-[#0a0a0a] lg:min-h-[calc(100vh-5rem)]"
          aria-label="Hero"
        >
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr,1fr] lg:gap-12 lg:px-8">
            {/* Left — Typography */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.2,
                    },
                  },
                }}
                className="space-y-4"
              >
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  Pratham Sarin
                </motion.h1>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className="text-lg font-medium tracking-wide text-[#FF9900] sm:text-xl"
                >
                  The MBA Engineer
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className="max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base"
                >
                  HealthKart Employee #1, now architecting AI at Amazon.
                </motion.p>

                {/* Trust Bar */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-zinc-800/50 pt-6"
                  aria-label="Affiliations"
                >
                  {[
                    {
                      name: "Amazon",
                      src: "https://logo.clearbit.com/amazon.com",
                    },
                    {
                      name: "Cornell Johnson",
                      src: "https://logo.clearbit.com/cornell.edu",
                    },
                    {
                      name: "HealthKart",
                      src: "https://logo.clearbit.com/healthkart.com",
                      badge: "Sequoia",
                    },
                    {
                      name: "Addepar",
                      src: "https://logo.clearbit.com/addepar.com",
                    },
                  ].map((item) => (
                    <TrustBarLogo
                      key={item.name}
                      name={item.name}
                      src={item.src}
                      badge={item.badge}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Right — Identity Handshake Status Board */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-sm rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-6 shadow-[0_0_40px_-12px_rgba(16,185,129,0.15)]">
                <p className="mb-4 font-mono text-xs font-medium tracking-wider text-emerald-500/90 uppercase">
                  Identity Handshake
                </p>
                {/* Minimalist diagram: Agent — Auth — Resource */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-zinc-700/50 bg-zinc-800/30 px-3 py-4">
                    <span className="font-mono text-[10px] text-zinc-500">
                      AGENT
                    </span>
                    <div className="size-3 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="flex flex-1 items-center justify-center">
                    <div className="h-px flex-1 bg-gradient-to-r from-emerald-600/40 to-transparent" />
                    <div className="flex flex-col items-center gap-0.5 px-1">
                      <Lock className="size-4 text-[#FF9900]/90" />
                      <span className="font-mono text-[9px] text-zinc-600">
                        AUTH
                      </span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-l from-emerald-600/40 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-zinc-700/50 bg-zinc-800/30 px-3 py-4">
                    <span className="font-mono text-[10px] text-zinc-500">
                      RESOURCE
                    </span>
                    <div className="size-3 rounded-full bg-zinc-500/50" />
                  </div>
                </div>
                {/* Status indicators */}
                <div className="mt-5 space-y-2 border-t border-zinc-800/50 pt-4">
                  {[
                    { label: "Identity", status: "Verified", color: "emerald" },
                    { label: "Scope", status: "Authorized", color: "emerald" },
                    { label: "Session", status: "Active", color: "emerald" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <span className="font-mono text-xs text-zinc-500">
                        {item.label}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-500/90">
                        <CheckCircle2 className="size-3.5" />
                        {item.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <IdentityConsole />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Career Narrative — Startup vs Big Tech Bento */}
        <section
          id="experience"
          className="scroll-mt-20 border-t border-zinc-800/50 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <p className="text-sm font-medium tracking-wider text-amber-600/90 uppercase">
                Career Narrative
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                Engineer + MBA + Founder
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Startup Foundation — Left Bento */}
              <div className="flex flex-col rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-colors duration-200 hover:border-zinc-700/50 lg:p-8">
                <h3 className="text-sm font-medium tracking-wider text-zinc-500 uppercase">
                  Startup Foundation
                </h3>

                {/* HealthKart */}
                <div className="mt-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-zinc-100">
                      HealthKart.com
                    </span>
                    <span className="inline-flex items-center rounded-md border border-amber-600/40 bg-amber-600/10 px-2 py-0.5 font-mono text-xs font-medium text-amber-600/90">
                      Employee #1
                    </span>
                    <span className="inline-flex items-center rounded-md border border-emerald-600/40 bg-emerald-600/10 px-2 py-0.5 font-mono text-xs font-medium text-emerald-500/90">
                      Sequoia-backed
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-zinc-300">
                    Senior Software Engineer
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    Built the portal from scratch for this e-commerce firm. Managed
                    Marketplace Payments and Mobile Experience.
                  </p>
                </div>

                {/* Addepar */}
                <div className="mt-6 border-t border-zinc-800/50 pt-6">
                  <span className="font-semibold text-zinc-100">Addepar</span>
                  <span className="ml-2 rounded border border-zinc-700/50 px-1.5 py-0.5 font-mono text-xs text-zinc-500">
                    Series C
                  </span>
                  <p className="mt-2 text-sm font-medium text-zinc-300">
                    MBA Consultant
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    Designed wireframes and prototypes for corporate bond ratings
                    for this fintech platform.
                  </p>
                </div>
              </div>

              {/* The Amazon Arc — Right Bento */}
              <div className="flex flex-col rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-colors duration-200 hover:border-zinc-700/50 lg:p-8">
                <h3 className="text-sm font-medium tracking-wider text-zinc-500 uppercase">
                  The Amazon Arc
                </h3>
                <p className="mt-2 text-lg font-semibold text-zinc-100">
                  2017 → Present
                </p>

                <div className="mb-4 mt-2 flex flex-wrap items-center gap-3">
                  <MapPin className="size-4 shrink-0 text-amber-600/80" />
                  <span className="text-sm text-zinc-400">
                    Toronto → New York City
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-zinc-400">
                  Transitioned from Sr. PMT to Senior SDM. Now leading AI Builder
                  Infrastructure (Identity & Auth)—securing autonomous agents on
                  Strands.
                </p>

                {/* Impact cards — nested */}
                <div className="mt-6 grid gap-3 sm:grid-cols-1">
                  {experienceCards.map(({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 rounded bg-amber-600/10 p-1.5">
                          <Icon className="size-4 text-amber-600/90" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-100">
                            {title}
                          </h4>
                          <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Principles Section */}
        <section
          id="values"
          className="scroll-mt-20 border-t border-zinc-800/50 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <p className="text-sm font-medium tracking-wider text-amber-600/90 uppercase">
                Values & Principles
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                Engineering Leadership Principles
              </h2>
            </div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {valuesPrinciples.map(({ title, description }, i) => (
                <motion.div
                  key={title}
                  variants={cardVariants}
                  className="group relative overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-colors duration-300 hover:border-zinc-700/50 hover:bg-zinc-900/50"
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="absolute right-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-amber-600/5" />
                  </div>
                  <Compass className="mb-4 size-6 text-amber-600/70" />
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Principles — 3 Pillars */}
        <section
          id="principles"
          className="scroll-mt-20 border-t border-zinc-800/50 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-sm font-medium tracking-wider text-amber-600/90 uppercase">
              Principles
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="group rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 shadow-[0_0_0_1px_rgba(161,98,7,0.06),0_0_20px_-8px_rgba(161,98,7,0.08)] transition-all duration-300 hover:border-amber-600/20 hover:shadow-[0_0_0_1px_rgba(161,98,7,0.12),0_0_30px_-8px_rgba(161,98,7,0.15)]">
                <h3 className="font-semibold text-zinc-100">Founder Grit</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Lessons from building HealthKart from scratch—shipping with
                  constraint, making decisions with incomplete data, and owning
                  the full stack.
                </p>
              </div>
              <div className="group rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 shadow-[0_0_0_1px_rgba(161,98,7,0.06),0_0_20px_-8px_rgba(161,98,7,0.08)] transition-all duration-300 hover:border-amber-600/20 hover:shadow-[0_0_0_1px_rgba(161,98,7,0.12),0_0_30px_-8px_rgba(161,98,7,0.15)]">
                <h3 className="font-semibold text-zinc-100">VC Lens</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Strategic thinking from my time at BR Venture Fund—evaluating
                  markets, teams, and unit economics through an investor&apos;s
                  eyes.
                </p>
              </div>
              <div className="group rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 shadow-[0_0_0_1px_rgba(161,98,7,0.06),0_0_20px_-8px_rgba(161,98,7,0.08)] transition-all duration-300 hover:border-amber-600/20 hover:shadow-[0_0_0_1px_rgba(161,98,7,0.12),0_0_30px_-8px_rgba(161,98,7,0.15)]">
                <h3 className="font-semibold text-zinc-100">Amazon Scale</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Operational excellence in AI Infrastructure—building systems
                  that scale, fail safely, and earn customer trust at the last
                  mile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Focus: AI Identity Section */}
        <section
          id="technical-focus"
          className="scroll-mt-20 border-t border-zinc-800/50 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <p className="text-sm font-medium tracking-wider text-amber-600/90 uppercase">
                Technical Focus
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                AI Identity
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Agent Registry */}
              <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-6">
                <h3 className="font-mono text-sm font-medium tracking-wide text-amber-600/90">
                  Agent Registry
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Central catalog for autonomous agents—managing lifecycle,
                  metadata, and trust boundaries. The registry must handle
                  dynamic registration, versioning, and revocation at scale while
                  maintaining a consistent identity model across disparate agent
                  runtimes and deployment environments.
                </p>
              </div>

              {/* Session Services */}
              <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/30 p-6">
                <h3 className="font-mono text-sm font-medium tracking-wide text-amber-600/90">
                  Session Services
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Stateful session management for agent-to-agent and
                  agent-to-resource interactions. Sessions enforce scoped
                  authorization, token lifecycle, and audit trails—critical for
                  securing the &quot;last mile&quot; where agents access
                  sensitive data with fine-grained, time-bound credentials.
                </p>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mt-10 rounded-lg border border-zinc-800/50 bg-zinc-900/20 px-6 py-5">
              <h4 className="font-mono text-xs font-medium tracking-wider text-zinc-500 uppercase">
                Key Achievements
              </h4>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-600/80" />
                  <span className="text-sm text-zinc-300">
                    <span className="font-mono text-amber-600/90">
                      New Account Registration at Scale
                    </span>
                    {" — "}
                    Designed and delivered high-throughput registration flows for
                    AI Builder advertiser accounts with strict validation and
                    compliance guarantees.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-600/80" />
                  <span className="text-sm text-zinc-300">
                    <span className="font-mono text-amber-600/90">
                      Granular Access Controls
                    </span>
                    {" — "}
                    Implemented role-based and resource-level authorization for
                    agent actions, enabling least-privilege access across Ads
                    APIs and data surfaces.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Identity & Auth Section */}
        <section
          id="identity-auth"
          className="scroll-mt-20 border-t border-zinc-800/50 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
              Identity & Auth
            </h2>
            <p className="mt-4 text-zinc-400 sm:text-lg">
              Building enterprise-scale authentication infrastructure for AI
              Builder—ensuring secure, reliable identity at the foundation of
              every AI agent deployment.
            </p>
          </div>
        </section>

        {/* Career Summary */}
        <section
          id="career"
          className="scroll-mt-20 border-t border-zinc-800/50 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
              Career
            </h2>
            <p className="mt-4 text-zinc-400 sm:text-lg">
              Sr. PMT → Senior SDM at Amazon Ads since 2017. Leading AI Builder
              Infrastructure for Identity & Auth—securing autonomous agents on Strands.
              Toronto and New York City.
            </p>
          </div>
        </section>

        {/* Education + Foundational Ventures — Bento Grid */}
        <section
          id="foundations"
          className="scroll-mt-20 border-t border-zinc-800/50 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <p className="text-sm font-medium tracking-wider text-amber-600/90 uppercase">
                Foundational Pillars
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {/* Education — Bento Card */}
              <div className="flex flex-col rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-colors duration-200 hover:border-zinc-700/50 hover:bg-zinc-900/50 lg:p-8">
                <div className="mb-4 inline-flex rounded-lg bg-amber-600/10 p-2.5">
                  <GraduationCap className="size-5 text-amber-600/90" />
                </div>
                <h2 className="text-sm font-medium tracking-wider text-zinc-500 uppercase">
                  Education
                </h2>
                <p className="mt-3 font-serif text-xl tracking-tight text-zinc-100 sm:text-2xl">
                  Master of Business Administration
                </p>
                <p className="mt-1 text-sm text-amber-600/90">
                  Cornell University · Johnson Graduate School of Management · May
                  2017
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-md border border-zinc-700/50 bg-zinc-800/30 px-2.5 py-1 font-mono text-xs text-zinc-400">
                    Merit Scholarship
                  </span>
                  <span className="rounded-md border border-zinc-700/50 bg-zinc-800/30 px-2.5 py-1 font-mono text-xs text-zinc-400">
                    BR Venture Fund · Associate
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  The MBA laid the foundation for my Product-Minded Engineering
                  approach—blending business strategy with technical execution.
                  That dual lens shapes how I lead AI Infrastructure at Amazon:
                  building for scale while staying grounded in customer outcomes.
                </p>
              </div>

              {/* Founder Skills — Bento Card */}
              <div className="flex flex-col rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-colors duration-200 hover:border-zinc-700/50 hover:bg-zinc-900/50 lg:p-8">
                <div className="mb-4 inline-flex rounded-lg bg-amber-600/10 p-2.5">
                  <Rocket className="size-5 text-amber-600/90" />
                </div>
                <h2 className="text-sm font-medium tracking-wider text-zinc-500 uppercase">
                  Founder DNA
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  0-to-1 at HealthKart and Addepar taught me venture strategy and
                  bootstrapping under constraint. That mindset informs how I lead
                  AI Infrastructure at scale.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {[
                    "0-to-1 Product Development",
                    "Venture Strategy",
                    "Bootstrapping",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-zinc-700/50 bg-zinc-800/30 px-3 py-1.5 font-mono text-xs text-zinc-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-zinc-800/50 px-4 py-16 sm:px-6 sm:py-24"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
              Contact
            </h2>
            <p className="mt-4 text-zinc-400 sm:text-lg">
              <a
                href="mailto:hello@prathamsarin.com"
                className="text-zinc-100 underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-zinc-400"
              >
                hello@prathamsarin.com
              </a>
            </p>
          </div>
        </section>

        {/* Beyond the Office */}
        <section
          className="border-t border-zinc-800/50 px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-sm font-medium tracking-wider text-zinc-500 uppercase">
              Beyond the Office
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
              Active investor in the AI ecosystem and a watch enthusiast—interested in
              where precision engineering meets everyday life. I follow F1 for the
              same reason I build infrastructure: the details at the margin matter.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
