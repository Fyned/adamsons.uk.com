import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useLanguage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const langFromPath = pathParts[0];
    
    if (['en', 'de', 'tr'].includes(langFromPath)) {
      if (langFromPath !== currentLang) {
        setCurrentLang(langFromPath);
      }
    } else {
      setCurrentLang('en');
    }
  }, [location.pathname, currentLang]);

  const switchLanguage = (newLang) => {
    const pathParts = location.pathname.split('/');
    const langPrefixFound = ['en', 'de', 'tr'].includes(pathParts[1]);

    if (langPrefixFound) {
      pathParts[1] = newLang;
    } else {
      pathParts.splice(1, 0, newLang);
    }
    
    const newPath = pathParts.join('/');
    navigate(newPath || `/${newLang}`);
  };

  return { currentLang, switchLanguage };
};