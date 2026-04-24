import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFramesProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const TOTAL_FRAMES = 192;

const ScrollFrames: React.FC<ScrollFramesProps> = ({ containerRef }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef<{ frame: number }>({ frame: 0 });

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    if (canvasWidth === 0 || canvasHeight === 0) return;

    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;
    let dWidth, dHeight, dx, dy;

    if (imgRatio > canvasRatio) {
      dHeight = canvasHeight;
      dWidth = canvasHeight * imgRatio;
      dx = (canvasWidth - dWidth) / 2 + (canvasWidth * 0.03);
      dy = 0;
    } else {
      dWidth = canvasWidth;
      dHeight = canvasWidth / imgRatio;
      dx = canvasWidth * 0.03;
      dy = (canvasHeight - dHeight) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.save();
    ctx.beginPath();
    ctx.arc(canvasWidth / 2, canvasHeight / 2, Math.min(canvasWidth, canvasHeight) / 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(img, dx, dy, dWidth, dHeight);
    ctx.restore();
  };

  useEffect(() => {
    let imagesLoaded = 0;
    const CHUNK_SIZE = 10; // Load 10 images at a time

    const loadImagesChunked = async (startIndex: number) => {
      const endIndex = Math.min(startIndex + CHUNK_SIZE, TOTAL_FRAMES);
      const promises = [];

      for (let i = startIndex; i < endIndex; i++) {
        promises.push(new Promise<void>((resolve) => {
          const img = new Image();
          img.src = `/photo/${String(i + 1).padStart(4, '0')}.jpg`;
          img.onload = () => {
            imagesRef.current[i] = img;
            imagesLoaded++;
            if (i === 0) {
              setLoaded(true);
              requestAnimationFrame(() => renderFrame(0));
            }
            resolve();
          };
          img.onerror = () => resolve(); // Don't block if one image fails
        }));
      }

      await Promise.all(promises);
      
      if (endIndex < TOTAL_FRAMES) {
        // Use requestIdleCallback if available, else setTimeout
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => loadImagesChunked(endIndex));
        } else {
          setTimeout(() => loadImagesChunked(endIndex), 50);
        }
      } else {
        ScrollTrigger.refresh();
      }
    };

    loadImagesChunked(0);
  }, []);

  useEffect(() => {
    if (!loaded || !containerRef.current || !canvasRef.current) return;

    let ctx: ReturnType<typeof gsap.context> | null = null;

    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.to(frameRef.current, {
          frame: TOTAL_FRAMES - 1,
          snap: 'frame',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            onRefresh: () => renderFrame(Math.round(frameRef.current.frame)),
          },
          onUpdate: () => {
            renderFrame(Math.round(frameRef.current.frame));
          },
        });

        ScrollTrigger.refresh();
      }, containerRef);
    });

    return () => {
      cancelAnimationFrame(raf);
      ctx?.revert();
    };
  }, [loaded, containerRef]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;

        canvasRef.current.width = width * dpr;
        canvasRef.current.height = height * dpr;

        renderFrame(Math.round(frameRef.current.frame));
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (canvasRef.current) resizeObserver.observe(canvasRef.current);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent rounded-full overflow-hidden relative">
      <canvas
        ref={canvasRef}
        className={`w-full h-full transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ imageRendering: 'auto' }}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent z-20">
          <div className="w-12 h-12 border-4 border-[#F3E5D8]/10 border-t-[#F3E5D8] rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default ScrollFrames;
