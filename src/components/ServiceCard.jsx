import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const ServiceCard = React.memo(({ title, summary, href, imageUrl, imageAlt }) => {
  const { currentLang } = useLanguage();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const learnMoreText = {
    en: "Learn More",
    de: "Mehr erfahren",
    tr: "Daha Fazla Bilgi"
  };

  return (
    <Link to={href} className="block h-full group">
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-white rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all h-full flex flex-col"
      >
        <div className="h-48 overflow-hidden relative bg-neutral-100">
          {!imgLoaded && !imgError && (
            <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
          )}
          {imgError ? (
            <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm">
              {title}
            </div>
          ) : (
            <img
              src={imageUrl}
              alt={imageAlt || title}
              className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              width="400"
              height="192"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-primary-900 mb-3">{title}</h3>
          <p className="text-text-muted mb-4 line-clamp-3 flex-grow">{summary}</p>
          <div className="inline-flex items-center gap-2 text-primary-600 group-hover:text-primary-900 font-semibold transition-colors mt-auto">
            {learnMoreText[currentLang]}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
});

export default ServiceCard;