import { useState, useEffect, useRef } from 'react';

// Module-level cache so registry is fetched only once across all components
let cachedRegistry = null;
let fetchPromise = null;

export const useImageRegistry = () => {
  const [registry, setRegistry] = useState(cachedRegistry);
  const [loading, setLoading] = useState(!cachedRegistry);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cachedRegistry) {
      setRegistry(cachedRegistry);
      setLoading(false);
      return;
    }

    if (!fetchPromise) {
      fetchPromise = fetch('/assets/images/registry.json')
        .then(res => {
          if (!res.ok) throw new Error('Failed to load image registry');
          return res.json();
        })
        .then(data => {
          cachedRegistry = data;
          return data;
        });
    }

    fetchPromise
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
    if (!registry) return null;

    const keys = path.split('.');
    let current = registry;

    for (const key of keys) {
      if (current[key] === undefined) return null;
      current = current[key];
    }

    return current;
  };

  return { registry, loading, error, getImage };
};
