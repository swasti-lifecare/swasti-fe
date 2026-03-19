import Hero from '@/components/home/Hero';
import FeaturedIn from '@/components/home/FeaturedIn';
import Boxes from '@/components/home/Boxes';
import ServicesSection from '@/components/home/ServicesSection';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import ContactSection from '@/components/home/ContactSection';
import IntroSection from '@/components/home/IntroSection';
import DoctorsPreview from '@/components/home/DoctorsPreview';
import CTASection from '@/components/home/CTASection';
import { DOCTORS_DATA, SERVICES_DATA } from '@/lib/content';
import { DoctorSchema } from '@/components/seo/DoctorSchema';
import { ServiceSchema } from '@/components/seo/ServiceSchema';

export default function HomePage() {
  const doctors = DOCTORS_DATA;

  // Map services to schema format with appropriate procedure types
  const servicesForSchema = SERVICES_DATA.map((service) => {
    let procedureType: 'DiagnosticProcedure' | 'TherapeuticProcedure' | 'NoninvasiveProcedure';

    // Determine procedure type based on service
    if (service.id === 'laboratory' || service.id === 'neuro-lab') {
      procedureType = 'DiagnosticProcedure';
    } else if (service.id === 'physiotherapy' || service.id === 'home-care') {
      procedureType = 'TherapeuticProcedure';
    } else {
      procedureType = 'NoninvasiveProcedure'; // Consultations
    }

    return {
      name: service.title,
      description: service.description,
      procedureType,
    };
  });

  return (
    <main className="overflow-hidden">
      {/* Schema markup for doctors - invisible SEO enhancement */}
      {doctors.map((doctor) => (
        <DoctorSchema
          key={doctor.name}
          name={doctor.name}
          specialty={doctor.specialtyLabel}
          qualifications={doctor.qualifications}
          imageUrl={doctor.imageUrl}
          availability={doctor.availability}
        />
      ))}

      {/* Schema markup for services - invisible SEO enhancement */}
      <ServiceSchema services={servicesForSchema} />

      <Hero />
      <FeaturedIn />
      <Boxes />
      <IntroSection />
      <ServicesSection />
      <DoctorsPreview doctors={doctors} />
      <ReviewsSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
