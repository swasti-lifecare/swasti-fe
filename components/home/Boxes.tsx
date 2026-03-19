'use client';

import { motion } from 'framer-motion';
import { VALUE_BOXES } from '@/lib/constants';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { hoverLift } from '@/lib/animations';
import { useMotionPreferences } from '@/lib/hooks/useMotionPreferences';

interface BoxProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const gradients = [
  'from-blue-100 to-indigo-100 text-indigo-600',
  'from-teal-100 to-emerald-100 text-teal-600',
  'from-purple-100 to-pink-100 text-purple-600',
  'from-orange-100 to-amber-100 text-orange-600',
];

function Box({ icon, title, description, index }: BoxProps) {
  const { prefersReducedMotion } = useMotionPreferences();
  const gradientClass = gradients[index % gradients.length];

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : hoverLift}
      className="glass-card p-8 lg:p-6 rounded-2xl h-full border border-white/60 bg-white/40 hover:bg-white/80 transition-all duration-300"
    >
      <div className="flex items-center lg:flex-col gap-4 lg:gap-3 mb-4 lg:text-center">
        <motion.div
          className={`w-16 h-16 flex-shrink-0 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center text-3xl shadow-sm`}
          role="img"
          aria-label={title}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl lg:text-lg font-bold text-secondary-900 hover:text-primary-600 transition-colors lg:leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-secondary-600 leading-relaxed font-medium lg:text-center lg:text-sm">{description}</p>
    </motion.div>
  );
}

export default function Boxes() {
  return (
    <AnimatedSection className="py-24 pt-8 bg-white relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50/50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent-600 uppercase bg-accent-50 rounded-full"
          >
            Our Values
          </motion.div>
          <h2 className="text-[1.5rem] sm:text-3xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
            <span className="block whitespace-nowrap">Why Choose</span>
            <span className="text-gradient whitespace-nowrap">Swasti?</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto text-lg text-secondary-600">
            We are not just a clinic, we are a growing healthcare ecosystem designed around your needs.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_BOXES.map((box, index) => (
            <StaggerItem key={index}>
              <Box icon={box.icon} title={box.title} description={box.description} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
