"use client";

import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/use-in-view";

// Só carrega/toca o vídeo quando ele entra na tela — em dados móveis,
// autoplay incondicional baixaria os 11MB assim que a página abre.
export function ProcessoVideo() {
  const { ref, isInView } = useInView<HTMLDivElement>(0.25);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <div ref={ref} className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black/40">
      <video
        ref={videoRef}
        className="aspect-video w-full object-cover"
        src={isInView ? "/videos/jornada-arodev.mp4" : undefined}
        loop
        muted
        playsInline
        preload="none"
      />
    </div>
  );
}
