'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MAIN_LINE, SUB_LINE, CONTACT_INFO } from '@/lib/constants';
import { fadeInUp, fadeIn, staggerContainer, staggerItem, defaultTransition } from '@/lib/animations';
import { useMotionPreferences } from '@/lib/hooks/useMotionPreferences';

export default function Hero() {
  const { prefersReducedMotion, isMobile, shouldDisableInfiniteAnimations, mounted } = useMotionPreferences();

  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden bg-primary-50 pt-20 pb-8">
      {/* Background Images and Overlays */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Desktop Background Image (≥ 768px) */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/landing-page-cover.jpeg"
            alt="Swasti Lifecare Medical Clinic in Parippally Kerala - Expert Healthcare Services"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>

        {/* Mobile Background Image (< 768px) */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/images/landing-mobile-cover.jpeg"
            alt="Swasti Lifecare Family Clinic Kerala - Quality Healthcare in Parippally"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>

        {/* Header gradient for navigation visibility - all screens */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 via-white/15 to-transparent pointer-events-none z-[5]" />

        {/* Mobile: Strong center gradient for text readability */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-white/50 via-white/35 to-white/10 pointer-events-none z-[1]" />

        {/* Desktop: Radial gradient centered on content */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: 'radial-gradient(circle at center, white 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.5) 50%, transparent 70%)'
          }}
        />

        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={!mounted || prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={!mounted || prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={!mounted || prefersReducedMotion ? { duration: 0 } : { delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-sm mb-6 md:mb-8"
          >
            <span className={`flex h-2 w-2 rounded-full bg-accent-500 ${mounted && !prefersReducedMotion ? 'animate-pulse' : ''}`}></span>
            <span className="text-sm font-medium text-secondary-600">Your Health, Our Priority</span>
          </motion.div>

          {/* Main Tagline */}
          <motion.h1
            initial={!mounted || prefersReducedMotion ? undefined : "initial"}
            animate={!mounted || prefersReducedMotion ? undefined : "animate"}
            variants={fadeInUp}
            transition={!mounted || prefersReducedMotion ? { duration: 0 } : defaultTransition}
            className="text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary-900 mb-6 md:mb-8 leading-tight"
          >
            <span className="block whitespace-nowrap">Clarity. Compassion.</span>
            <span className="text-gradient drop-shadow-sm whitespace-nowrap">Care that continues.</span>
          </motion.h1>

          {/* Sub Line */}
          <motion.p
            initial={!mounted || prefersReducedMotion ? undefined : "initial"}
            animate={!mounted || prefersReducedMotion ? undefined : "animate"}
            variants={fadeInUp}
            transition={!mounted || prefersReducedMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.2 }}
            className="text-base md:text-lg text-secondary-600 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            {SUB_LINE}
          </motion.p>

          {/* CTA Buttons & Contact Info - Unified Grid */}
          <motion.div
            initial={!mounted || prefersReducedMotion ? undefined : "initial"}
            animate={!mounted || prefersReducedMotion ? undefined : "animate"}
            variants={staggerContainer}
            className="w-full max-w-lg mx-auto px-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Book Appointment */}
              <motion.div
                variants={staggerItem}
                transition={prefersReducedMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.3 }}
              >
                <Link
                  href="/booking"
                  className="btn-primary w-full flex items-center justify-center gap-2 px-3 py-2.5 text-sm shadow-lg shadow-primary-500/30 hover:shadow-primary-600/40 hover:-translate-y-1 transition-all duration-300"
                >
                  {mounted && !prefersReducedMotion && (
                    <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                    </span>
                  )}
                  {(!mounted || prefersReducedMotion) && (
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white flex-shrink-0"></span>
                  )}
                  <span>Book Appointment</span>
                </Link>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                variants={staggerItem}
                transition={prefersReducedMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.4 }}
              >
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full flex items-center justify-center gap-2 px-3 py-2.5 text-sm bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp Only</span>
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={staggerItem}
                transition={prefersReducedMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.5 }}
              >
                <a
                  href={CONTACT_INFO.phoneLink}
                  className="group w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/85 backdrop-blur-sm hover:bg-white transition-all duration-300 text-secondary-500 font-medium text-sm"
                >
                  <div className="p-1 bg-primary-100 rounded-full text-primary-600 group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </motion.div>

              {/* Timings */}
              <motion.div
                variants={staggerItem}
                transition={prefersReducedMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.6 }}
              >
                <div className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-white/85 backdrop-blur-sm text-secondary-500 font-medium text-sm">
                  <div className="p-1 bg-accent-100 rounded-full text-accent-600 flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>{CONTACT_INFO.clinicHours}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
