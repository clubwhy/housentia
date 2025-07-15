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
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 25vw"
      />
    );
  }

  // noimg.png를 절대 경로로 변환
  const imageSrc = src === 'noimg.png' ? '/noimg.png' : src;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      className="object-contain"
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 25vw"
      onError={() => setError(true)}
    />
  );
} 