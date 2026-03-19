'use client';

import { motion } from 'framer-motion';
import ReviewCard from './ReviewCard';
import { AnimatedSection, AnimatedDiv, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { hoverLift } from '@/lib/animations';
import { useMotionPreferences } from '@/lib/hooks/useMotionPreferences';
import { useBreakpoint } from '@/lib/hooks/useBreakpoint';
import Carousel from '@/components/ui/Carousel';
import { REVIEWS_DATA } from '@/lib/content';
import type { CarouselConfig } from '@/types';

export default function ReviewsSection() {
  const { prefersReducedMotion, isMobile } = useMotionPreferences();
  const { isDesktop } = useBreakpoint();
  const reviews = REVIEWS_DATA;

  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : '5.0';

  // Carousel configuration
  const carouselConfig: CarouselConfig = {
    itemsPerView: { mobile: 1, tablet: 2, desktop: 3 },
    gap: 32, // Match Tailwind gap-8 (8 * 4px = 32px)
    dragEnabled: true,
    showDots: true,
    showArrows: false,
    loop: false,
  };

  // Render review card function
  const renderReviewCard = (review: typeof reviews[0]) => (
    <motion.div
      whileHover={hoverLift}
      className="h-full"
      style={{ pointerEvents: 'auto', touchAction: 'pan-y' }}
    >
      <ReviewCard
        reviewerName={review.reviewerName}
        rating={review.rating}
        reviewDate={review.reviewDate}
        reviewText={review.reviewText}
        source={review.source}
        verified={review.verified}
      />
    </motion.div>
  );

  return (
    <AnimatedSection className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-primary-100/50 rounded-full mix-blend-multiply filter ${isMobile ? 'blur-lg' : 'blur-2xl'} opacity-50`} />
        <div className={`absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-accent-100/50 rounded-full mix-blend-multiply filter ${isMobile ? 'blur-lg' : 'blur-2xl'} opacity-50`} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <AnimatedDiv className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Real experiences from families we&apos;ve served
          </p>
          {/* Rating summary */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-6 h-6 ${star <= Math.round(parseFloat(averageRating))
                    ? 'text-yellow-400'
                    : 'text-secondary-200'
                    }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-secondary-900">{averageRating}</span>
            <span className="text-secondary-500"> 50+reviews</span>
          </div>
        </AnimatedDiv>

        {/* Reviews Grid/Carousel */}
        {isDesktop ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <StaggerItem key={review.id}>
                {renderReviewCard(review)}
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <Carousel
            config={carouselConfig}
            ariaLabel="Patient reviews carousel"
            className="mb-8"
          >
            {reviews.map((review) => (
              <div key={review.id}>
                {renderReviewCard(review)}
              </div>
            ))}
          </Carousel>
        )}

        {/* Leave a Review CTA */}
        <div className="mt-12 text-center">
          <p className="text-secondary-600 mb-4">Had a positive experience? Share your feedback!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.google.com/search?q=swasti+lifecare+parippally"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Review on Google
            </a>
            <a
              href="https://www.facebook.com/p/Swasti-Lifecare-61577658077432/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Review on Facebook
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
