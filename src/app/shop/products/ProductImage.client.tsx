"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  const isValid = src && src !== 'null' && src !== 'undefined' && src.trim() !== '';

  if (!isValid || error) {
    return (
      <Image
        src="/noimg.png"
        alt="No image"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={() => setError(true)}
    />
  );
} 