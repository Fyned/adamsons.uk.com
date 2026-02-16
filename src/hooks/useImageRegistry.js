import { useState, useEffect } from 'react';

export const useImageRegistry = () => {
  const [registry, setRegistry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/assets/images/registry.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load image registry');
        return res.json();
      })
      .then(data => {
        setRegistry(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Image registry error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getImage = (path) => {
    if (!registry) {
      console.warn(`Image registry not loaded yet for path: ${path}`);
      return null;
    }

    const keys = path.split('.');
    let current = registry;

    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Image key not found: ${path}`);
        return null;
      }
      current = current[key];
    }

    return current;
  };

  return { registry, loading, error, getImage };
};