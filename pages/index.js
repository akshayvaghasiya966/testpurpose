'use client'; // add if using app router

import React, { useEffect, useState } from 'react';

const getOS = (userAgent) => {
  if (/windows phone/i.test(userAgent)) return 'Windows Phone';
  if (/win/i.test(userAgent)) return 'Windows';
  if (/android/i.test(userAgent)) return 'Android';
  if (/iPad|iPhone|iPod/.test(userAgent)) return 'iOS';
  if (/mac/i.test(userAgent)) return 'Mac OS';
  if (/linux/i.test(userAgent)) return 'Linux';
  return 'Unknown';
};

const DeviceInfo = () => {
  const [os, setOS] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const detectedOS = getOS(userAgent);
    setOS(detectedOS);
  }, []);

  if (!os) return null; // or a loading fallback

  return (
    <div style={{ padding: '1.5rem', fontFamily: 'monospace' }}>
      <h2>📱 Device & OS Detection</h2>
      <p>Operating System: {os}</p>
    </div>
  );
};

export default DeviceInfo;
