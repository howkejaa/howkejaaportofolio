import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import {
  Code2,
  Bot,
  ShieldCheck,
  Smartphone,
  ArrowUpRight,
  Check,
  Layers,
  Send,
  Instagram,
  Terminal
} from 'lucide-react';
import Navbar from './components/Navbar';
import BrandLogo from './components/BrandLogo';
import SplitHeading from './components/SplitHeading';
import {
  PROFILE_DATA,
  EXPERTISE_LIST,
  COMPLETED_PROJECTS,
  MORE_PROJECTS_NOTE,
  WEB_SERVICE_DATA
} from './data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const EXPERTISE_ICONS = {
  '01': Code2,
  '02': Bot,
  '03': ShieldCheck,
  '04': Smartphone
};

const CARD_EASE = [0.22, 1, 0.36, 1];

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#090A0D] text-[#F3F4F6]">
      <Navbar />

      <main>
        {/* =================================================================
            HERO SECTION
        ================================================================== */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Kolom Kiri: Identitas & Judul Utama */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#101216] border border-white/[0.08]">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span className="text-xs font-mono text-[#9CA3AF]">
                  {PROFILE_DATA.availability}
                </span>
              </div>

              <SplitHeading
                text={PROFILE_DATA.headline}
                as="h1"
                immediate
                className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#F3F4F6] leading-[1.16]"
              />

              <p className="text-base text-[#9CA3AF] leading-relaxed max-w-2xl">
                {PROFILE_DATA.subheadline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={PROFILE_DATA.contacts.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#3B82F6] text-white text-sm font-medium hover:bg-[#2563EB] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
                >
                  <span>Mulai diskusi proyek</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </a>

                <a
                  href="#karya"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#161920] border border-white/[0.08] text-[#F3F4F6] text-sm font-medium hover:bg-[#1E222B] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                >
                  <span>Lihat karya selesai</span>
                </a>
              </div>
            </div>

            {/* Kolom Kanan: Kartu Ringkasan Spesifikasi Developer */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: CARD_EASE, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-[#101216] border border-white/[0.08] p-6 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <Terminal className="w-4 h-4 text-[#3B82F6]" strokeWidth={1.5} />
                    <span className="text-sm font-mono text-[#F3F4F6]">developer.profile</span>
                  </div>
                  <span className="text-xs font-mono text-[#6B7280] tabular-nums">v2026</span>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#6B7280] font-mono">Identitas</span>
                    <span className="text-[#F3F4F6] font-medium">{PROFILE_DATA.brandName}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-t border-white/[0.06]">
                    <span className="text-[#6B7280] font-mono">Telegram</span>
                    <span className="text-[#60A5FA] font-mono">{PROFILE_DATA.handle}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-t border-white/[0.06]">
                    <span className="text-[#6B7280] font-mono">Fokus utama</span>
                    <span className="text-[#F3F4F6]">Web, Bot, Security, Android</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-t border-white/[0.06]">
                    <span className="text-[#6B7280] font-mono">Layanan</span>
                    <span className="text-[#F3F4F6]">Jasa Pembuatan Website</span>
                  </div>
                </div>

                <div className="rounded-xl bg-[#161920] border border-white/[0.06] p-4">
                  <p className="text-xs font-mono text-[#9CA3AF] leading-relaxed">
                    Fokus pada arsitektur kode yang bersih, kecepatan akses di perangkat mobile,
                    dan keamanan aplikasi dari trafik tidak sah.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================================================
            01. TENTANG & KEAHLIAN
        ================================================================== */}
        <section id="tentang" className="border-t border-white/[0.08] py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-mono text-[#60A5FA] tabular-nums">
                  01 — Tentang & keahlian
                </span>
                <SplitHeading
                  text={PROFILE_DATA.aboutTitle}
                  as="h2"
                  className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F3F4F6] leading-snug"
                />
              </div>

              <div className="lg:col-span-7 space-y-4 text-base text-[#9CA3AF] leading-relaxed">
                {PROFILE_DATA.aboutParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Grid 4 Bidang Keahlian */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPERTISE_LIST.map((item, idx) => {
                const IconComponent = EXPERTISE_ICONS[item.code] || Code2;
                return (
                  <motion.div
                    key={item.code}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, ease: CARD_EASE, delay: idx * 0.06 }}
                    whileHover={{ y: -2 }}
                    className="rounded-xl bg-[#101216] border border-white/[0.08] hover:border-white/[0.16] p-6 flex flex-col justify-between space-y-6 transition-colors duration-200"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-lg bg-[#161920] border border-white/[0.08] flex items-center justify-center text-[#9CA3AF]">
                          <IconComponent className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-mono text-[#6B7280] tabular-nums">
                          {item.code}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-base font-medium text-[#F3F4F6]">{item.title}</h3>
                        <p className="text-sm text-[#9CA3AF] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-[#9CA3AF] bg-[#161920] px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================================
            02. KARYA PILIHAN (3 PROYEK SELESAI + DLL.)
        ================================================================== */}
        <section id="karya" className="border-t border-white/[0.08] py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono text-[#60A5FA] tabular-nums">
                02 — Karya pilihan
              </span>
              <SplitHeading
                text="Perangkat lunak dan skrip yang telah selesai dibangun"
                as="h2"
                className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F3F4F6] leading-snug"
              />
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Beberapa karya yang sudah rampung dan digunakan secara nyata, mulai dari bot
                pemrosesan data hingga skrip perlindungan keamanan aplikasi web.
              </p>
            </div>

            {/* 3 Kartu Proyek Selesai */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {COMPLETED_PROJECTS.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, ease: CARD_EASE, delay: idx * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl bg-[#101216] border border-white/[0.08] hover:border-[#3B82F6]/50 p-6 flex flex-col justify-between space-y-6 transition-colors duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#60A5FA]">{project.category}</span>
                      <span className="text-xs font-mono text-[#6B7280] tabular-nums">
                        {project.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium text-[#F3F4F6] tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#9CA3AF] leading-relaxed">{project.description}</p>

                    <ul className="space-y-2 pt-2">
                      {project.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#9CA3AF]">
                          <Check
                            className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5"
                            strokeWidth={1.5}
                          />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-[#F3F4F6] bg-[#161920] border border-white/[0.06] px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Kartu Tambahan: Dan Berbagai Proyek Lainnya (dll.) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: CARD_EASE }}
              whileHover={{ y: -2 }}
              className="rounded-2xl bg-[#161920] border border-white/[0.08] hover:border-white/[0.16] p-6 md:p-8 transition-colors duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-[#3B82F6]" strokeWidth={1.5} />
                    <span className="text-xs font-mono text-[#60A5FA] tabular-nums">
                      {MORE_PROJECTS_NOTE.code} — Arsip & eksplorasi
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-[#F3F4F6]">{MORE_PROJECTS_NOTE.title}</h3>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {MORE_PROJECTS_NOTE.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  {MORE_PROJECTS_NOTE.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-[#9CA3AF] bg-[#101216] border border-white/[0.08] px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================================================
            03. LAYANAN JASA PEMBUATAN WEBSITE HOWKEJAA
        ================================================================== */}
        <section id="layanan" className="border-t border-white/[0.08] py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono text-[#60A5FA] tabular-nums">
                03 — Layanan pengembangan
              </span>
              <SplitHeading
                text={WEB_SERVICE_DATA.title}
                as="h2"
                className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F3F4F6] leading-snug"
              />
              <p className="text-sm text-[#9CA3AF] leading-relaxed">{WEB_SERVICE_DATA.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* 3 Jenis Website */}
              <div className="lg:col-span-7 space-y-4">
                {WEB_SERVICE_DATA.packages.map((pkg, idx) => (
                  <motion.div
                    key={pkg.code}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, ease: CARD_EASE, delay: idx * 0.06 }}
                    whileHover={{ y: -2 }}
                    className="rounded-xl bg-[#101216] border border-white/[0.08] hover:border-white/[0.16] p-6 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-lg bg-[#161920] border border-white/[0.08] flex items-center justify-center text-xs font-mono text-[#60A5FA] shrink-0">
                        {pkg.code}
                      </span>
                      <div className="space-y-1.5">
                        <h3 className="text-base font-medium text-[#F3F4F6]">{pkg.name}</h3>
                        <p className="text-sm text-[#9CA3AF] leading-relaxed">{pkg.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Alur Pengerjaan & Tombol Order */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: CARD_EASE, delay: 0.12 }}
                className="lg:col-span-5 rounded-2xl bg-[#101216] border border-white/[0.08] p-6 md:p-8 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#6B7280]">Tahapan kerja</span>
                    <h3 className="text-lg font-medium text-[#F3F4F6]">
                      Alur pemesanan website
                    </h3>
                  </div>

                  <ol className="space-y-4">
                    {WEB_SERVICE_DATA.workflow.map((step, index) => (
                      <li key={index} className="flex items-start gap-3.5 text-sm text-[#9CA3AF]">
                        <span className="text-xs font-mono text-[#60A5FA] tabular-nums mt-0.5">
                          0{index + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-4 border-t border-white/[0.08] space-y-3">
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    Konsultasikan konsep website yang ingin kamu buat langsung melalui pesan
                    Telegram.
                  </p>
                  <a
                    href={PROFILE_DATA.contacts.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#3B82F6] text-white text-sm font-medium hover:bg-[#2563EB] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]"
                  >
                    <span>Pesan website via Telegram</span>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =================================================================
            04. KONTAK (TELEGRAM & INSTAGRAM)
        ================================================================== */}
        <section id="kontak" className="border-t border-white/[0.08] py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-6 space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono text-[#60A5FA] tabular-nums">04 — Kontak</span>
              <SplitHeading
                text="Terhubung langsung untuk diskusi dan kolaborasi"
                as="h2"
                className="text-2xl sm:text-3xl font-medium tracking-tight text-[#F3F4F6] leading-snug"
              />
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Hubungi melalui salah satu saluran resmi di bawah ini untuk pertanyaan teknis,
                pemesanan website, maupun kerja sama pengembangan proyek.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
              {/* Kartu Telegram */}
              <motion.a
                href={PROFILE_DATA.contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: CARD_EASE }}
                whileHover={{ y: -2 }}
                className="rounded-xl bg-[#101216] border border-white/[0.08] hover:border-[#3B82F6]/60 p-6 flex items-center justify-between group transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#161920] border border-white/[0.08] flex items-center justify-center text-[#3B82F6]">
                    <Send className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#F3F4F6]">Telegram</div>
                    <div className="text-xs font-mono text-[#9CA3AF] mt-0.5">
                      {PROFILE_DATA.contacts.telegramHandle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#6B7280] group-hover:text-[#F3F4F6] transition-colors duration-200"
                  strokeWidth={1.5}
                />
              </motion.a>

              {/* Kartu Instagram */}
              <motion.a
                href={PROFILE_DATA.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: CARD_EASE, delay: 0.06 }}
                whileHover={{ y: -2 }}
                className="rounded-xl bg-[#101216] border border-white/[0.08] hover:border-[#3B82F6]/60 p-6 flex items-center justify-between group transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#161920] border border-white/[0.08] flex items-center justify-center text-[#3B82F6]">
                    <Instagram className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#F3F4F6]">Instagram</div>
                    <div className="text-xs font-mono text-[#9CA3AF] mt-0.5">
                      {PROFILE_DATA.contacts.instagramHandle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#6B7280] group-hover:text-[#F3F4F6] transition-colors duration-200"
                  strokeWidth={1.5}
                />
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      {/* =================================================================
          FOOTER
      ================================================================== */}
      <footer className="border-t border-white/[0.08] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <BrandLogo size="sm" />
          <p className="text-xs font-mono text-[#6B7280]">
            © {new Date().getFullYear()} {PROFILE_DATA.brandName} — All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
