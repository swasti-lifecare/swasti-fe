import Image from 'next/image';
import Link from 'next/link';

const FEATURED_ARTICLES = [
  {
    name: 'The News Brains',
    url: 'https://thenewsbrains.com/rewriting-rural-healthcare-how-dr-vishnu-s-kumar-is-transforming-lives-with-swasti-lifecare/',
    image: '/images/featured/thenewsbrain.webp',
  },
  {
    name: 'Orange City Times',
    url: 'https://orangecitytimes.com/rewriting-rural-healthcare-how-dr-vishnu-s-kumar-is-transforming-lives-with-swasti-lifecare/',
    image: '/images/featured/orange-city-times.svg',
  },
  {
    name: 'Prime Post Daily',
    url: 'https://primepostdaily.com/rewriting-rural-healthcare-how-dr-vishnu-s-kumar-is-transforming-lives-with-swasti-lifecare/',
    image: '/images/featured/prime-post-daily.webp',
  },
  {
    name: 'Global Biz Hour',
    url: 'https://globalbizhour.com/rewriting-rural-healthcare-how-dr-vishnu-s-kumar-is-transforming-lives-with-swasti-lifecare/',
    image: '/images/featured/global-biz-hour.webp',
  },
  {
    name: 'BFSI Media',
    url: 'https://bfsimedia.com/rewriting-rural-healthcare-how-dr-vishnu-s-kumar-is-transforming-lives-with-swasti-lifecare/',
    image: '/images/featured/bfsi-media.webp',
  },
];

const DUPLICATED_ARTICLES = [...FEATURED_ARTICLES, ...FEATURED_ARTICLES, ...FEATURED_ARTICLES];

export default function FeaturedIn() {
  return (
    <section className="w-full bg-transparent py-8 overflow-hidden relative z-10">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .pause-on-hover:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 mb-10">
        <div className="flex items-center justify-center w-full max-w-3xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300/80 dark:to-slate-700/80"></div>
          <h2 className="px-6 text-xs md:text-sm font-medium tracking-[0.3em] text-slate-400 dark:text-slate-500 uppercase whitespace-nowrap">
            Featured In
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300/80 dark:to-slate-700/80"></div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden pause-on-hover mt-4">
        {/* Edge fade gradients removed as requested */}

        <div className="animate-marquee gap-6 md:gap-8 px-4">
          {DUPLICATED_ARTICLES.map((article, idx) => (
            <Link
              key={`${article.name}-${idx}`}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex flex-col items-center justify-center bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 w-[220px] h-[100px] md:w-[260px] md:h-[120px] flex-shrink-0 hover:-translate-y-1"
              aria-label={`Read article about Swasti Lifecare on ${article.name}`}
            >
              <div className="relative w-full h-full p-6 transition-all duration-500">
                <Image
                  src={article.image}
                  alt={`${article.name} logo`}
                  fill
                  className="object-contain p-5 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 drop-shadow-sm"
                  sizes="(max-width: 768px) 220px, 260px"
                  priority={idx < 5}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
