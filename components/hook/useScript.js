"use client"
import { useEffect } from 'react';

const UseScript = (url, async) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = async;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default UseScript;